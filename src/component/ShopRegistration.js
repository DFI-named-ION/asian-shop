import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import Arrow from '../images/icons/arrowLeft.svg';
import Google from '../images/socials/google-auth.svg';
import Facebook from '../images/socials/facebook-auth.svg';
import Twitter from '../images/socials/twitter-auth.svg';

import ReCaptcha from 'react-google-recaptcha';

import { facebook, google, twitter } from "./../firebaseConfig";

import { useAuth } from './providers/AuthProvider';
import { useErrors } from "./providers/ErrorProvider";

function App() {
    return <Google />;
    return <Facebook />;
    return <Twitter />;
    return <Arrow />;
}

export default function ShopRegistration() {

    const { catchedError, handleMethod } = useErrors();
    const { user, registerSeller, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.isSeller) navigate("/seller");
    }, [user, navigate]);

    const [name, setName] = useState("");
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [token, setToken] = useState(false);
    
    const openErrorModal = () => {
        setIsErrorModalOpen(true);
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    };

    const handleTokenChange = (e) => {
        setToken(e);
    };

    const handleAuth = (e) => {
        handleMethod(async () => {
            e.preventDefault();
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) throw "email-format-error";
            const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;
            if (!passRegex.test(password)) throw "password-format-error";
            if (companyName.length < 5) throw "company-format-error";
            if (!token) throw "recaptcha-error";

            try {
                if (user) await logout();

                await registerSeller(email, password, name, companyName);
                navigate("/confirmation");
            } catch (err) {
                if (err?.code === "ERR_NETWORK") throw "server-offline-error";
                throw err;
            }
        });
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <body className='authorization-body'>
            <div className='left-auth-reg' id='parallax'>
                <div>
                    <p className='left-title-auth-shop'>Так ви</p>
                </div>
                <div>
                    <p className='left-title-auth-plus left-title-auth-reg-plus-shop'>продавець</p>
                </div>
            </div>
            <div className='right-auth-reg'>
                <div className='left-arrow' onClick={handleBack}>
                    <img src={Arrow} id='arrow'></img>
                </div>
                <div className='title-auth-block-div title-auth-block-div-reg'>
                    <h4 className='title-auth'>Реєстрація продавця</h4>
                </div>
                <div>
                    <form className='form-auth form-auth-reg'>
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
                        <h5 className='title-line'>Ім'я</h5>
                        <p className='text-auth'><input className='text-block' type='text' name='Name' value={name} onChange={handleNameChange} placeholder='Best name'></input></p>
                        <div className='line-text-block line-text-block_plus'></div>
                        <h5 className='title-line'>Корпоративна пошта</h5>
                        <p className='text-auth'><input className='text-block-margin-zero' type='login' name='Email' value={email} onChange={handleEmailChange} placeholder='email@gmail.com' required></input><div className='line-text-block'></div></p>
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
                        <p className='text-auth'><input className='text-block-margin-zero' type='password' name='Password' value={password} onChange={handlePasswordChange} placeholder='*********' required></input><div className='line-text-block'></div></p>
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
                        <h5 className='title-line'>Назва компанії</h5>
                        <p className='text-auth'><input className='text-block-margin-zero' type='text' name='companyName' value={companyName} onChange={handleCompanyNameChange} placeholder='Компанія' required></input><div className='line-text-block'></div></p>
                        <p className='title-line-error'>
                            {catchedError.tags.includes("company-field") ? (
                                <>
                                    {catchedError.short}
                                    <a className='link-line-error' href='#' onClick={openErrorModal}>ⓘ</a>
                                </>
                            ) : (
                                <></>
                            )}
                        </p>
                        <div className="Captcha-div-shop">
                                <ReCaptcha className="Captcha"
                                    sitekey="6Le0QA8qAAAAAHq5xgAIIBAuZfy7oNG1bDazdwQF"
                                    onChange={handleTokenChange}/>
                    </div>
                    </form>
                    <a>
                        <input className='login-button' type='submit' onClick={handleAuth} value='Зареєструватись' />
                    </a>
                    
                </div>
                <div className='footer-auth footer-auth-shop-reg'>
                    <div className='title-auth-white-div title-auth-white-div-reg'>
                        <h4 className='title-auth-white'>Вже маєте обліковий запис? <a href='/seller/authorization' className='title-auth-white'>Увійдіть</a></h4>
                    </div>
                    <p className='text-auth-white bottom-text-auth'>Безпечний вхід за допомогою reCAPTCHA з урахуванням
                        <p className='text-auth-white-plus'> Умови та конфіденційність Google</p>
                    </p>
                </div>
            </div>
        </body>
    )
}