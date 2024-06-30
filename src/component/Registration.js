import React, { useState, useEffect, useContext } from 'react';

import Google from '../images/socials/google-auth.svg';
import Facebook from '../images/socials/facebook-auth.svg';
import Twitter from '../images/socials/twitter-auth.svg';

import { auth, facebook, google, twitter } from "./../firebaseConfig";
import { signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import axios from 'axios';

import { CookieContext } from './providers/CookieProvider';
import { UserContext } from './providers/UserProvider';

function App() {
    return <Google />;
    return <Facebook />;
    return <Twitter />;
}

export default function Registration() {

    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        if (user) {
            if (user.emailVerified) {
                window.location = "/";
            }
            window.location = "/confirmation";
        }
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = async (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = async (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = async (e) => {
        setPassword(e.target.value);
    };

    const login = async (provider) => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            // store user!
        } catch (err) {
            handleError(err);
        };
    };

    const handleRegisterClick = async (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;
        if (!emailRegex.test(email)) {
            handleError("Invalid email format");
            return;
        }
        if (!passRegex.test(password)) {
            handleError("Invalid password format:\nYour password must be between 6 and 64 characters long\nYour password must include at least one letter (uppercase or lowercase)\nYour password must include at least one special character from the following set: @, $, !, %, *, ?, &");
            return;
        }
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            result.user.providerData[0].displayName = name; // ?????
            setUser(result.user);
            window.location = "/confirmation";
        } catch (err) {
            handleError(err.message);
        }
    };

    const handleError = (error) => {
        console.log(`${error}`);
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
                            <p className='text-auth'><input className='text-block' type='login' name='Email' value={email} onChange={handleEmailChange} placeholder='IDK@gmail.com' required></input></p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'><input className='text-block' type='password' name='Password' value={password} onChange={handlePasswordChange} placeholder='*********' required></input></p>
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