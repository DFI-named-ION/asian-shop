import React, { useEffect, useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { AuthContext } from './providers/AuthProvider';

export default function MailConfirmation() {
    
    const {user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [sendError, setSendError] = useState("");
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputsRef = useRef([]);

    useEffect(() => {
        if (!user) {
            navigate("/registration");
            return;
        }
        if (user.emailVerified) {
            navigate("/profile");
            return;
        }
        
        sendEmail();
    }, [user, navigate]);

    const sendEmail = () => {
        let dto = {
            accessToken: user.stsTokenManager.accessToken,
        };
        axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Auth/sendVerificationCode", dto) // change to JWT
        .then((response) => {
            if (response.data.message === "Success") {
                // hmmm
                return;
            }
            handleError(response.data.message);
        })
        .catch((err) => {
            handleError(err);
        });
    };

    useEffect(() => {
        let timer;
        if (isDisabled && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsDisabled(false);
        }

        return () => clearInterval(timer);
    }, [isDisabled, timeLeft]);

    const handleResendClick = (e) => {
        e.preventDefault();
        setSendError("");
        setIsDisabled(true);
        sendEmail();
        setTimeLeft(59);
    };

    const handleSubmitCode = async (e) => {
        e.preventDefault();
        let codeStr = code.join('');
        if (codeStr.length === 6) {
            let dto = {
                accessToken: user.stsTokenManager.accessToken,
                code: codeStr,
            };
            axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Auth/checkVerificationCode", dto) // change to JWT
            .then((response) => {
                if (response.data.message === "Success") {
                    setUser((prevUser) => ({
                        ...prevUser,
                        emailVerified: true
                    }));
                    navigate("/profile");
                }
                handleError(response.data.message);
            })
            .catch((error) => {
                handleError(error);
            });
        } else {
            setSendError("Code is not full.");
        }
    };

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            if (index < 5) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (code[index] === '') {
                if (index > 0) {
                    inputsRef.current[index - 1].focus();
                }
            } else {
                const newCode = [...code];
                newCode[index] = '';
                setCode(newCode);
            }
        }
    };

    const handleError = (error) => {
        switch (error) {
            case "Failure: User is already verified.":
                setSendError("User is already verified.")
                break;
            case "Failure: Code is not valid.":
                setSendError("Code is not valid.");
                break;
            default:
                // console.log(error);
                break;
        };
    };

    return (
        <body className='authorization-body'>
            <div className='background-mail-div'>
                <div className='left-mail'>
                    Ще трохи...
                </div>
                <div className='right-mail'>
                    <div className='title-mail-div'>
                        <h1>
                            Підтвердіть пошту
                        </h1>
                    </div>

                    <div className='text-mail-div'>
                        <p>Впишіть 6-ти значний код, який ми відправили вам на <span className='email-span'>{user?.email}</span></p>
                    </div>

                    <div className='input-mail-div'>
                        {code.map((value, index) => (
                            <div key={index}>
                                <input
                                    className='text-mail'
                                    type='text'
                                    maxLength='1'
                                    autoFocus={index === 0}
                                    value={value}
                                    onChange={(e) => handleInputChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => (inputsRef.current[index] = el)}
                                    required
                                />
                            </div>
                        ))}
                    </div>

                    <div className='pass-conf-div'>
                        <p>
                            <a 
                                href='#' 
                                onClick={handleResendClick} 
                                style={{ 
                                    pointerEvents: isDisabled ? 'none' : 'auto', 
                                    color: isDisabled ? 'gray' : '#182531',
                                }}
                            >
                                Отримати код
                            </a>
                            {isDisabled && <span> {timeLeft} сек</span>}
                        </p>
                    </div>
                    
                    <p className='title-line-error-zero-margin'>
                        {sendError}
                    </p>

                    <input className='login-button mail-button' type='button' value='Підтвердити' onClick={handleSubmitCode} />
                </div>
            </div>
        </body>
    )
}