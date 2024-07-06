import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';

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
}

export default function Registration() {

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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

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
            handleError(err);
        }
    };

    const handleRegisterClick = async (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;

        if (!emailRegex.test(email)) {
            // handleError("Invalid email format.");
            setEmailError("Invalid email format.");
            return;
        }
        setEmailError("");

        if (!passRegex.test(password)) {
            // handleError("Invalid password format:\nPassword length: 6-64 characters\nAt least one uppercase letter\nAt least one lowercase letter\nAt least one digit\nAt least one special character: @, $, !, %, *, ?, &");
            setPasswordError("Invalid password format:\nPassword length: 6-64 characters\nAt least one uppercase letter\nAt least one lowercase letter\nAt least one digit\nAt least one special character: @, $, !, %, *, ?, &");
            return;
        }
        setPasswordError("");

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName: name });
            setUser(result.user);
        } catch (err) {
            handleError(err);
        }
    };

    const handleError = (error) => {
        let text = "";
        if (error?.code) {
            switch (error.code) {
                case "auth/invalid-credential":
                    text = "Invalid credentials.";
                    setEmailError(text);
                    setPasswordError(text);
                    break;
                case "auth/too-many-requests":
                    text = "Too many requests. Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
                    setPasswordError(text);
                    break;
                case "auth/email-already-in-use":
                    text = "This email is already in use."
                    setEmailError(text);
                    break;
                default:
                    text = error.message;
            }
        }
        // console.log(error);
    };

    return (
        <body className='authorization-body'>
            <div className='background-div background-div-reg'>
                <div className='left-auth-reg'>
                    <div>
                        <p className='left-title-auth'>Ласкаво</p>
                    </div>
                    <div>
                        <p className='left-title-auth-plus'>просимо</p>
                    </div>
                </div>
                <div className='right-auth right-auth-reg'>
                    <div className='title-auth-block-div title-auth-block-div-reg'>
                        <h4 className='title-auth'>Реєстрація</h4>
                    </div>
                    <div>
                        <form className='form-auth form-auth-reg'>
                            <h5 className='title-line'>Ім'я</h5>
                            <p className='text-auth'><input className='text-block' type='text' name='Name' value={name} onChange={handleNameChange} placeholder='Best name'></input></p>
                            <h5 className='title-line'>Пошта</h5>
                            <p className='text-auth'><input className='text-block-margin-zero' type='login' name='Email' value={email} onChange={handleEmailChange} placeholder='email@gmail.com' required></input></p>
                            <p className='title-line-error'>
                                {emailError}
                            </p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'><input className='text-block-margin-zero' type='password' name='Password' value={password} onChange={handlePasswordChange} placeholder='*********' required></input></p>
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
                            <input className='login-button' type='submit' onClick={handleRegisterClick} value='Зареєструватись' />
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
                        <div className='title-auth-white-div title-auth-white-div-reg'>
                            <h4 className='title-auth-white'>Вже маєте обліковий запис? <a href='/authorization' className='title-auth-white'>Увійдіть</a></h4>
                        </div>
                        <p className='text-auth-white bottom-text-auth'>Безпечний вхід за допомогою reCAPTCHA з урахуванням
                            <p className='text-auth-white-plus'> Умови та конфіденційність Google</p>
                        </p>
                    </div>
                </div>
            </div>
        </body>
    )
}