import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import Arrow from '../images/icons/arrowLeft.svg';
import Google from '../images/socials/google-auth.svg';
import Facebook from '../images/socials/facebook-auth.svg';
import Twitter from '../images/socials/twitter-auth.svg';

import { auth, facebook, google, twitter } from "./../firebaseConfig";
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import axios from 'axios';

import { AuthContext } from './providers/AuthProvider';

function App() {
    return <Google />;
    return <Facebook />;
    return <Twitter />;
    return <Arrow />;
}

export default function Registration() {

    const { user, login, axiosError } = useContext(AuthContext);
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

    const [name, setName] = useState("");
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [emailShortError, setEmailShortError] = useState("");
    const [emailLongError, setEmailLongError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShortError, setPasswordShortError] = useState("");
    const [passwordLongError, setPasswordLongError] = useState("");
    
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
        if (providerOrEvent.preventDefault) {
            providerOrEvent.preventDefault();
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;
    
            if (!emailRegex.test(email)) {
                handleError("email-format-error");
                return;
            }

            if (!passRegex.test(password)) {
                handleError("password-format-error");
                return;
            }
    
            try {
                const result = await createUserWithEmailAndPassword(auth, email, password);
                await login(await result.user.getIdToken());
            } catch (err) {
                handleError(err.code);
            }
        } else {
            try {
                const result = await signInWithPopup(auth, providerOrEvent);
                await login(await result.user.getIdToken());
            } catch (err) {
                handleError(err.code);
            }
        }
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/");
    };

    useEffect(() => {
        if (axiosError) {
            setEmailShortError(axiosError.short);
            setEmailLongError(axiosError.long);
        }
    }, [axiosError]);

    const handleError = (error) => {
        switch (error) {
            case "auth/popup-closed-by-user":
                setEmailShortError("Popup was closed");
                setEmailLongError("You accidantly closed popup. Try again.");
                setPasswordShortError("");
                setPasswordLongError("");
                break;
            case "auth/invalid-credential":
                setEmailShortError("Invalid credentials");
                setEmailLongError("Probably you entered wrong email or password.");
                setPasswordShortError("Invalid credentials");
                setPasswordLongError("");
                break;
            case "auth/too-many-requests":
                setEmailShortError("Too much requests");
                setEmailLongError("Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.")
                setPasswordShortError("");
                setPasswordLongError("");
                break;
            case "auth/email-already-in-use":
                setEmailShortError("Email is already in use");
                setEmailLongError(`User with this email "${email}" already exists.`)
                setPasswordShortError("");
                setPasswordLongError("");
                break;
            case "email-format-error":
                setEmailShortError("Invalid email format");
                setEmailLongError("Correct email look like this: user@example.com.");
                setPasswordShortError("");
                setPasswordLongError("");
                break;
            case "password-format-error":
                setEmailShortError("");
                setEmailLongError("");
                setPasswordShortError("Invalid password format");
                setPasswordLongError("password-format-error");
                break;
            default:
                // console.log(error);
                break;
        };
    };

    document.addEventListener('mousemove', function(e) {
        const textBlock = document.getElementById('parallax');
        const rect = textBlock.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const moveX = (mouseX - centerX) * -0.05;
        const moveY = (mouseY - centerY) * -0.05;
    
        const limit = 10;
        const limitedMoveX = Math.max(Math.min(moveX, limit), -limit);
        const limitedMoveY = Math.max(Math.min(moveY, limit), -limit);
    
        textBlock.style.transform = `translate(${limitedMoveX}px, ${limitedMoveY}px)`;
    });


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
                                        {emailLongError}
                                        {passwordLongError === "password-format-error" ? (
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
                                        ) : (
                                            passwordLongError
                                        )}
                                    </p>
                                </div>
                            </Modal>
                            <h5 className='title-line'>Ім'я</h5>
                            <p className='text-auth'><input className='text-block' type='text' name='Name' value={name} onChange={handleNameChange} placeholder='Best name'></input></p>
                            <div className='line-text-block line-text-block_plus'></div>
                            <h5 className='title-line'>Пошта</h5>
                            <p className='text-auth'><input className='text-block-margin-zero' type='login' name='Email' value={email} onChange={handleEmailChange} placeholder='email@gmail.com' required></input><div className='line-text-block'></div></p>
                            <p className='title-line-error'>
                                {emailShortError.length > 0 ? (
                                    <>
                                        {emailShortError}
                                        <a className='link-line-error' href='#' onClick={openErrorModal}>ⓘ</a>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'><input className='text-block-margin-zero' type='password' name='Password' value={password} onChange={handlePasswordChange} placeholder='*********' required></input><div className='line-text-block'></div></p>
                            <p className='title-line-error'>
                                {passwordShortError.length > 0 ? (
                                    <>
                                        {passwordShortError}
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