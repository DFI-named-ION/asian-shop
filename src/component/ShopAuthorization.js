import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import Arrow from '../images/icons/arrowLeft.svg';
import Google from '../images/socials/google-auth.svg'
import Facebook from '../images/socials/facebook-auth.svg'
import Twitter from '../images/socials/twitter-auth.svg';

import ReCaptcha from 'react-google-recaptcha';

import { facebook, google, twitter } from "./../firebaseConfig";

import { useAuth } from './providers/AuthProvider';
import { useErrors } from './providers/ErrorProvider';

function App() {
    return <Google />;
    return <Facebook />;
    return <Twitter />;
    return <Arrow />;
}

export default function ShopAuthorization() {

    const { catchedError, handleMethod } = useErrors();
    const { user, loginWithEmailAndPassword, loginWithPopup } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (user.isVerified) {
                navigate("/profile-settings");
            } else {
                navigate("/confirmation");
            }
        }
    }, [user, navigate]);

    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(false);

    const openErrorModal = () => {
        setIsErrorModalOpen(true);
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleTokenChange = (e) => {
        setToken(true);
    };

    const handleAuth = async (providerOrEvent) => {
        await handleMethod(() => {
            if (providerOrEvent.preventDefault) {
                providerOrEvent.preventDefault();
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(email)) throw "email-format-error";
                const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;
                if (!passRegex.test(password)) throw "password-format-error";
                if(!token) throw "recaptcha-error";
              
                loginWithEmailAndPassword(email, password);
            } else {
                loginWithPopup(providerOrEvent);
            }
        });
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <body className='authorization-body'>
                <div className='left-auth-reg-shop' id='parallax'>
                <div>
                    <p className='left-title-auth-shop'>Раді вас</p>
                </div>
                <div>
                    <p className='left-title-auth-plus-shop'>бачити</p>
                </div>
            </div>
                <div className='right-auth'>
                <div className='left-arrow' onClick={handleBack}>
                    <img src={Arrow} id='arrow'></img>
                    </div>
                    <div className='title-auth-block-div'>
                        <h4 className='title-auth'>Вхід</h4>
                    </div>
                    <div>
                        <form className='form-auth'>
                            <Modal isOpen={isErrorModalOpen} onRequestClose={closeErrorModal} className='background-modal-div'>
                                <div className='modal-link-error-div'> 
                                    <button onClick={closeErrorModal} className='close-modal-button close-link-error-button'></button>
                                    <p>
                                        {catchedError.code === "password-format-error" ? (
                                            <>
                                                <p>Неправильний формат пароля:</p>
                                                <ol>
                                                    <li>Довжина пароля повинна бути від 6 до 64 символів.</li>
                                                    <li>Пароль повинен містити:</li>
                                                </ol>
                                                <ul>
                                                    <li>одну велику літеру.</li>
                                                    <li>одну малу літеру.</li>
                                                    <li>одну цифру.</li>
                                                    <li>один спеціальний символ: @, $, !, %, *, ?, &.</li>
                                                </ul>
                                            </>
                                        ) : (catchedError.long)}
                                    </p>
                                </div>
                            </Modal>
                            <h5 className='title-line'>Корпоративна пошта</h5>
                            <p className='text-auth'>
                                <input className='text-block-margin-zero' type='login' name='Email' value={email} onChange={handleEmailChange} placeholder='email@gmail.com' required />
                                <div className='line-text-block'></div>
                            </p>
                            <p className='title-line-error'>
                                {catchedError.tags.includes("email-field") ? (
                                    <>
                                        {catchedError.short}
                                        <a className='link-line-error' href='#' onClick={openErrorModal}>ⓘ</a>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'>
                                <input className='text-block-margin-zero' type='password' name='Password' value={password} onChange={handlePasswordChange} placeholder='*********' required />
                                <div className='line-text-block'></div>
                            </p>
                            <p className='title-line-error'>
                                {catchedError.tags.includes("password-field") ? (
                                    <>
                                        {catchedError.short}
                                        <a className='link-line-error' href='#' onClick={openErrorModal}>ⓘ</a>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </p>
                            <div className="Captcha-div">
                                <ReCaptcha className="Captcha"
                                    sitekey="6Le0QA8qAAAAAHq5xgAIIBAuZfy7oNG1bDazdwQF"
                                    onChange={handleTokenChange}/>
                            </div>
                        </form>
                        <a>
                            <input className='login-button' type='submit' value='Увійти' onClick={handleAuth}/>
                        </a>
                        <p className='forgot-password'>
                            <a className='text-auth' href='/reset-password-verification'>Забули свій пароль?</a>
                        </p>

                    </div>
                    <div className='footer-auth footer-auth-shop'>
                        <h4 className='title-auth-white title-auth-white-auth'>Ще не маєте облікового запису? <a href='/registration' className='title-auth-white'>Зареєструйтеся</a></h4>
                        <p className='text-auth-white bottom-text-auth'>
                            Безпечний вхід за допомогою reCAPTCHA з урахуванням
                            <p className='text-auth-white-plus'>
                                Умови та конфіденційність Google
                            </p>
                        </p>
                    </div>
                </div>
        </body>
    )
}