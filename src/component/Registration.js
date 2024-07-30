import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import Arrow from '../images/icons/arrowLeft.svg';
import Google from '../images/socials/google-auth.svg';
import Facebook from '../images/socials/facebook-auth.svg';
import Twitter from '../images/socials/twitter-auth.svg';

import { facebook, google, twitter } from "./../firebaseConfig";

import { useAuth } from './providers/AuthProvider';
import { useErrors } from "./providers/ErrorProvider";

function App() {
    return <Google />;
    return <Facebook />;
    return <Twitter />;
    return <Arrow />;
}

export default function Registration() {

    const { catchedError, handleMethod } = useErrors();
    const { user, registerWithEmailAndPassword, loginWithPopup } = useAuth();
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

    useEffect(() => {
        const handleMouseMove = (e) => {
            const parallax = document.getElementById('parallax');
            if (!parallax) return;

            const rect = parallax.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const moveX = (mouseX - centerX) * -0.04;
            const moveY = (mouseY - centerY) * -0.04;

            const limit = 10;
            const limitedMoveX = Math.max(Math.min(moveX, limit), -limit);
            const limitedMoveY = Math.max(Math.min(moveY, limit), -limit);

            parallax.style.transform = `translate(${limitedMoveX}px, ${limitedMoveY}px)`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const [name, setName] = useState("");
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
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

    const handleAuth = async (providerOrEvent) => {
        await handleMethod(() => {
            if (providerOrEvent.preventDefault) {
                providerOrEvent.preventDefault();
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(email)) throw "email-format-error";
                const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;
                if (!passRegex.test(password)) throw "password-format-error";
        
                registerWithEmailAndPassword(email, password, name);
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
            <div className='left-auth-reg' id='parallax'>
                <div>
                    <p className='left-title-auth'>Ласкаво</p>
                </div>
                <div>
                    <p className='left-title-auth-plus'>просимо</p>
                </div>
            </div>
            <div className='right-auth-reg'>
                <div className='left-arrow' onClick={handleBack}>
                    <img src={Arrow} id='arrow'></img>
                </div>
                <div className='title-auth-block-div title-auth-block-div-reg'>
                    <h4 className='title-auth'>Реєстрація</h4>
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
                        <p className='text-auth'><input className='text-block' type='text' name='Name' value={name} onChange={handleNameChange} placeholder="Ім'я"></input></p>
                        <div className='line-text-block line-text-block-top'></div>
                        <h5 className='title-line'>Пошта</h5>
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
                    </form>
                    <a>
                        <input className='login-button' type='submit' onClick={handleAuth} value='Зареєструватись' />
                    </a>
                    <div className='lines-or lines-or-reg'>
                        <div className='line-or'></div>
                        <div className='text-or'>чи</div>
                        <div className='line-or'></div>
                    </div>
                    <div className='social-login-text social-login-text-reg'>
                        Зареєструватись за допомогою соціальних мереж
                    </div>
                    <div className='socials-auth-div'>
                        <div>
                            <button className='social-button' onClick={() => handleAuth(google)}>
                                <img src={Google}/>
                            </button>
                        </div>
                        <div>
                            <button className='social-button' onClick={() => handleAuth(facebook)}>
                                <img src={Facebook}/>
                            </button>
                        </div>
                        <div>
                            <button className='social-button' onClick={() => handleAuth(twitter)}>
                                <img src={Twitter}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='footer-auth'>
                    <div className='title-auth-white-div title-auth-white-div-reg'>
                        <h4 className='title-auth-white'>Вже маєте обліковий запис? <a href='/authorization' className='title-auth-white'>Увійдіть</a></h4>
                    </div>
                    <p className='text-auth-white bottom-text-auth'>Безпечний вхід за допомогою reCAPTCHA з урахуванням
                        <p className='text-auth-white-plus'> Умови та конфіденційність Google</p>
                    </p>
                </div>
            </div>
        </body>
    )
}