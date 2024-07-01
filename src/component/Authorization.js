import React, { useState, useEffect, useContext } from 'react';

import Google from '../images/socials/google-auth.svg'
import Facebook from '../images/socials/facebook-auth.svg'
import Twitter from '../images/socials/twitter-auth.svg';

import { auth, facebook, google, twitter } from "./../firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

import { CookieContext } from './providers/CookieProvider';
import { UserContext } from './providers/UserProvider';

function App() {
    return <Google />;
    return <Facebook />;
    return <Twitter />;
}

export default function Authorization() {
    
    const { setCookie, getCookie } = useContext(CookieContext);
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        if (user) {
            if (user.emailVerified) {
                window.location = "/";
            }
            window.location = "/confirmation";
        };
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = async (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = async (e) => {
        setPassword(e.target.value);
    };

    const handleThirdPartyLogin = async (user) => {
        let dto = {
            accessToken: user.stsTokenManager.accessToken,
        };

        axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Auth/handleNewUser", dto)
        .then((response) => {
            if (response.data.status === "Success") {
                setUser((prevUser) => {
                    const updatedUser = {
                        ...prevUser,
                        role: response.data.role
                    };
                    return updatedUser;
                });
            } else {
                handleError(response.data.status);
            };
        })
        .catch((err) => {
            handleError(err);
        });
    };

    const login = async (provider) => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
            setUser(result.user);
            //handleThirdPartyLogin(result.user);
        } catch (err) {
            handleError(err);
        };
    };

    const handleLoginClick = async (e) => {
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
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);
            window.location = "/confirmation";
            // store user!
        } catch (err) {
            handleError(err.message);
        }
    };

    const handleError = (error) => {
        console.log(`${error}`);
    };

    return (
        <body className='authorization-body'>
            <div className='background-div'>
                <div className='left-auth'>
                    <h1>Привіт</h1>
                </div>
                <div className='right-auth'>
                    <div className='title-auth-block-div'>
                        <h4 className='title-auth'>Вхід</h4>
                    </div>
                    <div>
                        <form className='form-auth'>
                            <h5 className='title-line'>Пошта</h5>
                            <p className='text-auth'>
                                <input className='text-block' type='login' name='Email' value={email} onChange={handleEmailChange} placeholder='email@gmail.com' required/>
                            </p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'>
                                <input className='text-block' type='password' name='Password' value={password} onChange={handlePasswordChange} placeholder='*********' required/>
                            </p>
                        </form>
                        <a>
                            <input className='login-button' type='submit' value='Увійти' onClick={handleLoginClick}/>
                        </a>
                        <p className='forgot-password'>
                            <a className='text-auth' href='#'>Забули свій пароль?</a>
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
            </div>
        </body>
    )
}