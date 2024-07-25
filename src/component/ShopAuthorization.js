import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import Arrow from '../images/icons/arrowLeft.svg';
import Google from '../images/socials/google-auth.svg'
import Facebook from '../images/socials/facebook-auth.svg'
import Twitter from '../images/socials/twitter-auth.svg';

import ReCaptcha from 'react-google-recaptcha';

import { auth, facebook, google, twitter } from "../firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

import { AuthContext } from './providers/AuthProvider';

function App() {
    return <Google />;
    return <Facebook />;
    return <Twitter />;
    return <Arrow />;
}

export default function ShopAuthorization() {

    const [modalIsOpenErrorAuth, setModalIsOpenErrorAuth] = useState(false);

  const openModalErrorAuth = () => {
    setModalIsOpenErrorAuth(true);
  };

  const closeModalProfilePassword = () => {
    setModalIsOpenErrorAuth(false);
  };

  const [modalIsOpenErrorAuth_1, setModalIsOpenErrorAuth_1] = useState(false);

  const openModalErrorAuth_1 = () => {
    setModalIsOpenErrorAuth_1(true);
  };

  const closeModalProfilePassword_1 = () => {
    setModalIsOpenErrorAuth_1(false);
  };
    
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (user.emailVerified) {
                navigate("/profile");
            } else {
                navigate("/confirmation");
            }
        }
    }, [user, navigate]);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [token, setToken] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleTokenChange = (e) => {
        setToken(true);
    };
    const login = async (provider) => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (err) {
            handleError(err.code);
        }
    };

    const handleLoginClick = async (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;

        if (!emailRegex.test(email)) {
            handleError("email-format-error");
            return;
        }
        setEmailError("");

        if (!passRegex.test(password)) {
            handleError("password-format-error");
            return;
        }
        setPasswordError("");
        if(!token){
            handleError("recaptcha-error");
            return;
        }

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);
        } catch (err) {
            handleError(err.code);
        }
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const handleError = (error) => {
        let text = "";
        switch (error) {
            case "auth/invalid-credential":
                text = "Invalid credentials.";
                setEmailError(text);
                setPasswordError(text);
                break;
            case "auth/too-many-requests":
                text = "Too many requests. Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
                setPasswordError(text);
                break;
            case "email-format-error":
                setEmailError("Invalid email format.");
                break;
            case "password-format-error":
                setPasswordError("Invalid password format:\nPassword length: 6-64 characters\nAt least one uppercase letter\nAt least one lowercase letter\nAt least one digit\nAt least one special character: @, $, !, %, *, ?, &");
                break;
            case "recaptcha-error":
                setPasswordError("Invalid recaptcha.");
                break;
            default:
                console.log(error);
                break;
        };
    };

    return (
        <body className='authorization-body'>
                <div className='left-auth-reg' id='parallax'>
                    <div>
                        <p className='left-title-shop-auth'>Раді вас</p>
                    </div>
                    <div>
                        <p className='left-title-shop-auth-plus'>бачити</p>
                    </div>
                </div>
                <div className='right-auth right-shop-auth'>
                <div className='left-arrow' onClick={handleBack}>
                    <img src={Arrow} id='arrow'></img>
                    </div>
                    <div className='title-auth-block-div'>
                        <h4 className='title-auth'>Вхід</h4>
                    </div>
                    <div>
                        <form className='form-auth'>
                            <h5 className='title-line'>Корпоративна пошта</h5>
                            <p className='text-auth'>
                                <input className='text-block-margin-zero' type='login' name='Email' value={email} onChange={handleEmailChange} placeholder='email@gmail.com' required />
                                <div className='line-text-block'></div>
                            </p>
                            <p className='title-line-error'>
                                {emailError}
                                {/* <a className='link-line-error' href='#' onClick={openModalErrorAuth_1}>ⓘ</a>
                                        <Modal isOpen={modalIsOpenErrorAuth_1} onRequestClose={closeModalProfilePassword_1} className='background-modal-div'>
                    <div className='modal-link-error-div'> 
                    <button onClick={closeModalProfilePassword_1} className='close-modal-button close-link-error-button'></button>
                     <p>Користувача не знайдено. Сервер зіткнувся з неочікуваною помилкою при спробі обробити запит. Невірні облікові дані.</p>
                    </div>
                    </Modal> */}
                            </p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'>
                                <input className='text-block-margin-zero' type='password' name='Password' value={password} onChange={handlePasswordChange} placeholder='*********' required />
                                <div className='line-text-block'></div>
                            </p>
                            <p className='title-line-error'>
                                {passwordError.split('\n').map((line) => (
                                    <>
                                        {line} 
                                        {/* <a className='link-line-error' href='#' onClick={openModalErrorAuth}>ⓘ</a>
                                        <Modal isOpen={modalIsOpenErrorAuth} onRequestClose={closeModalProfilePassword} className='background-modal-div'>
                    <div className='modal-link-error-div'> 
                    <button onClick={closeModalProfilePassword} className='close-modal-button close-link-error-button'></button>
                     <p>Неправильний формат пароля:</p>
                     <ol>
                        <li>Довжина пароля повинна бути від 6 до 64 символів.</li>
                        <li>Пароль повинен містити:</li>
                    </ol>
                    <ul>
                        <li>одну велику літеру.</li>
                        <li>одну малу літеру.</li>
                        <li>одну цифру.</li>
                        <li>один спеціальний символ: @, $, !, %, *, ?, &..</li>
                    </ul>
                    </div>
                    </Modal> */}
                                        <br />
                                    </>
                                ))}
                            </p>
                            <div className="Captcha-div">
                                <ReCaptcha className="Captcha"
                                    sitekey="6Le0QA8qAAAAAHq5xgAIIBAuZfy7oNG1bDazdwQF"
                                    onChange={handleTokenChange}/>
                            </div>
                            
                        </form>
                        <a>
                            <input className='login-button' type='submit' value='Увійти' onClick={handleLoginClick}/>
                        </a>
                        <p className='forgot-password'>
                            <a className='text-auth' href='/reset-password-verification'>Забули свій пароль?</a>
                        </p>

                        
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