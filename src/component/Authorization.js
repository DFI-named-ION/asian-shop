import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import Arrow from '../images/icons/arrowLeft.svg';
import Google from '../images/socials/google-auth.svg'
import Facebook from '../images/socials/facebook-auth.svg'
import Twitter from '../images/socials/twitter-auth.svg';

import ReCaptcha from 'react-google-recaptcha';

import { auth, facebook, google, twitter } from "./../firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

import { AuthContext } from './providers/AuthProvider';

function App() {
    return <Google />;
    return <Facebook />;
    return <Twitter />;
    return <Arrow />;
}

export default function Authorization() {

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
                const result = await signInWithEmailAndPassword(auth, email, password);
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
                // console.log(error); // for debug
                break;
        };
    };

    return (
        <body className='authorization-body'>
                <div className='left-auth'>
                    <h1>Привіт</h1>
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
                            <h5 className='title-line'>Пошта</h5>
                            <p className='text-auth'>
                                <input className='text-block-margin-zero' type='login' name='Email' value={email} onChange={handleEmailChange} placeholder='email@gmail.com' required />
                                <div className='line-text-block'></div>
                            </p>
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
                            <p className='text-auth'>
                                <input className='text-block-margin-zero' type='password' name='Password' value={password} onChange={handlePasswordChange} placeholder='*********' required />
                                <div className='line-text-block'></div>
                            </p>
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
                            <ReCaptcha className="Captcha"
                                sitekey="6Le0QA8qAAAAAHq5xgAIIBAuZfy7oNG1bDazdwQF"
                                onChange={(token) => {console.log('reCAPTCHA token:', token);}}/>
                        </form>
                        <a>
                            <input className='login-button' type='submit' value='Увійти' onClick={handleAuth}/>
                        </a>
                        <p className='forgot-password'>
                            <a className='text-auth' href='/reset-password-verification'>Забули свій пароль?</a>
                        </p>

                        <div className='lines-or'>
                            <div className='line-or'></div>
                            <div className='text-or'>чи</div>
                            <div className='line-or'></div>
                        </div>

                        <div className='social-login-text'>
                            Увійти за допомогою соціальних мереж
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