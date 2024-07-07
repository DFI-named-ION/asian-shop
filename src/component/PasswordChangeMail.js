import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Arrow from '../images/icons/arrowLeft.svg';

import axios from 'axios';

import { AuthContext } from './providers/AuthProvider';

function App() {
    return <Arrow />;
}

export default function MailConfirmation() {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [sendError, setSendError] = useState("");

    useEffect(() => {
        if (user) {
            setEmail(user.email);
            return;
        }
    }, [user]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendEmailClick = async (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            // handleError("Invalid email format.");
            setEmailError("Invalid email format.");
            return;
        }
        setEmailError("");
        let dto = {
            email: email
        };
        await axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Auth/sendResetUrl", dto)
        .then((response) => {
            if (response.data.message !== "Success") {
                handleError(response.data.message);
            }
        })
        .catch((error) => {
            // axios is trash
            // console.log(error);
        });
    };

    const handleBack = (e) => {
        e.preventDefault();
        const referrerURL = new URL(document.referrer);
        if (referrerURL.origin === window.location.origin) {
            navigate(referrerURL.pathname + referrerURL.search);
        } else {
            window.location.href = document.referrer;
        }
    };

    const handleError = (error) => {
        if (error === "Failure: User not found") {
            setEmailError("User with this email is not found.")
        }
    };

    return (
        <body className='authorization-body'>
            <div className='background-mail-div'>
                <div className='left-pas'>
                    <h1>І таке бува...</h1>
                </div>
                <div className='right-pas'>
                    <div className='left-arrow' onClick={handleBack}>
                        <img src={Arrow} id='arrow'></img>
                    </div>
                    <div className='title-mail-div'>
                        <h1>
                            Скидання паролю
                        </h1>
                    </div>

                    <div className='text-pas-div'>
                        <p>
                        Введіть вашу електронну адресу, на яку буде надіслано посилання, натисніть на нього для скидання паролю.
                        </p>
                    </div>

                    <form className='form-pas'>
                        <h5 className='title-line'>Пошта</h5>
                        <p className='text-auth'>
                            <input className='text-block-margin-zero' type='login' name='Email' placeholder='email@gmail.com' value={email} onChange={handleEmailChange} required/>
                        </p>
                        <div className='line-text-block'></div>
                        <p className='title-line-error'>
                            {emailError}
                        </p>
                        <p className='title-line-error-zero-margin'>
                            {sendError}
                        </p>
                    </form>

                    <input className='login-button mail-button' type='button' value='Підтвердити' onClick={handleSendEmailClick}/>
                </div>
            </div>
        </body>
    )
}