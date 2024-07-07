import React, { useEffect, useState, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Arrow from '../images/icons/arrowLeft.svg';

import axios from 'axios';
import { JwtContext } from './providers/JwtProvider';

function App() {
    return <Arrow />;
}

export default function MailConfirmation() {

    const [code, setCode] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
    const [resetError, setResetError] = useState("");
    const secret = new URLSearchParams(useLocation().search).get('secret');
    const {encryptJwtToken, decryptJwtToken} = useContext(JwtContext);

    useEffect(() => {
        const data = decryptJwtToken(secret);
        setCode(data.code);
        setUserId(data.userId);
    }, [secret]);

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleNewPasswordRepeatChange = (e) => {
        setNewPasswordRepeat(e.target.value);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();

        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;

        if (!passRegex.test(newPassword)) {
            // handleError("Invalid password format:\nPassword length: 6-64 characters\nAt least one uppercase letter\nAt least one lowercase letter\nAt least one digit\nAt least one special character: @, $, !, %, *, ?, &");
            setResetError("Invalid password format:\nPassword length: 6-64 characters\nAt least one uppercase letter\nAt least one lowercase letter\nAt least one digit\nAt least one special character: @, $, !, %, *, ?, &");
            return;
        }

        if (newPassword !== newPasswordRepeat) {
            setResetError("Passwords are different.");
            return;
        }
        setResetError("");

        let data = {
            code,
            user_id: userId,
            new_password: newPassword,
            new_password_repeat: newPasswordRepeat
        };
        encryptJwtToken(data).then(token => {
            let dto = {
                token
            };
            axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Auth/resetPassword", dto)
            .then((response) => {
                if (response.data.message === "Success"){
                    navigate("/profile");
                }
            })
            .catch((err) => {

            });
        });
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/reset-password-verification");
    };

    return (
        <body className='authorization-body'>
            <div className='background-mail-div'>
                <div className='left-pas'>
                    <h1>
                    І таке бува...
                    </h1>
                </div>
                <div className='right-pas'>
                    <div className='left-arrow'>
                    <img src={Arrow} id='arrow'></img>
                    </div>
                    <div className='title-mail-div title-pas-div'>
                        <h1>
                            Скидання паролю
                        </h1>
                    </div>

                    <form className='form-pas-plus'>
                        <h5 className='title-line'>Новий пароль</h5>
                        <p className='text-auth'>
                            <input className='text-block' type='password' name='Password' placeholder='*********' value={newPassword} onChange={handleNewPasswordChange} required/>
                        </p>
                        <h5 className='title-line'>Пароль</h5>
                        <p className='text-auth'>
                            <input className='text-block' type='password' name='Password' placeholder='*********' value={newPasswordRepeat} onChange={handleNewPasswordRepeatChange} required/>
                        </p>
                    </form>

                    <p className='title-line-error'>
                        {resetError}
                    </p>

                    <input className='login-button mail-button' type='button' value='Підтвердити' onClick={handleResetPassword}/>
                </div>
            </div>
        </body>
    )
}