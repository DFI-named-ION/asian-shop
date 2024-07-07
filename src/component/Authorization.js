import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import Arrow from '../images/icons/arrowLeft.svg';
import Google from '../images/socials/google-auth.svg'
import Facebook from '../images/socials/facebook-auth.svg'
import Twitter from '../images/socials/twitter-auth.svg';

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

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
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

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);
        } catch (err) {
            handleError(err.code);
        }
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
            default:
                console.log(error);
                break;
        };
    };

    return (
        <body className='authorization-body'>
                <div className='left-auth'>
                    <h1>Привіт</h1>
                </div>
                <div className='right-auth'>
                <div className='left-arrow'>
                    <img src={Arrow} id='arrow'></img>
                    </div>
                    <div className='title-auth-block-div'>
                        <h4 className='title-auth'>Вхід</h4>
                    </div>
                    <div>
                        <form className='form-auth'>
                            <h5 className='title-line'>Пошта</h5>
                            <p className='text-auth'>
                                <input 
                                    className='text-block-margin-zero' type='login' name='Email' value={email} onChange={handleEmailChange} placeholder='email@gmail.com' required 
                                />
                            </p>
                            <p className='title-line-error'>
                                {emailError}
                            </p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'>
                                <input 
                                    className='text-block-margin-zero' type='password' name='Password' value={password} onChange={handlePasswordChange} placeholder='*********' required 
                                />
                            </p>
                            <p className='title-line-error'>
                                {passwordError.split('\n').map((line) => (
                                    <>
                                        {line}
                                        <br />
                                    </>
                                ))}
                            </p>
                        </form>
                        <a>
                            <input className='login-button' type='submit' value='Увійти' onClick={handleLoginClick}/>
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
                                <button className='social-button' onClick={() => login(google)}>
                                    <img src={Google}/>
                                </button>
                            </div>
                            <div>
                                <button className='social-button' onClick={() => login(facebook)}>
                                    <img src={Facebook}/>
                                </button>
                            </div>
                            <div>
                                <button className='social-button' onClick={() => login(twitter)}>
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