import React, { useState, useEffect, useContext } from 'react';

import Google from '../images/socials/google-auth.svg'
import Facebook from '../images/socials/facebook-auth.svg'
import Instagram from '../images/socials/instagram-auth.svg'

import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import {
    LoginSocialGoogle,
    LoginSocialFacebook,
    LoginSocialInstagram,
    LoginSocialTwitter,
  } from 'reactjs-social-login'

import { CookieContext } from './providers/CookieProvider';
import { UserContext } from './providers/UserProvider';

function App() {
    return <Google />;
    return <Facebook />;
    return <Instagram />;
}

export default function Authorization() {

    console.log(new URLSearchParams(window.location.search));

    const { setCookie, getCookie } = useContext(CookieContext);
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        if (user) {
            window.location = "/";
        }
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = async (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = async (e) => {
        setPassword(e.target.value);
    }
    const handleLoginClick = async (e) => {
        e.preventDefault();
        let inf = {
            email: email,
            password: password
        };
        axios.post(process.env.REACT_APP_WEB_API_BASE_URL + '/Users/login', inf)
        .then(response => {
            let newUser = {};
            newUser.token = response.data.token;
            let decoded = jwtDecode(response.data.token);
            newUser.role = decoded.role;
            newUser.email = decoded.email;
            newUser.providerUserId = decoded.providerUserId;
            newUser.provider = decoded.provider;
            newUser.userId = decoded.userId;
            setCookie("cookieUser", newUser, 1/24);
            setUser(newUser);
            //window.location = "/";
        })
        .catch(err => {
            // diplay error!
        });
    };

    const handleSuccess = (provider, data) => {
        let newUser = {};
        switch (provider) {
            case "google":
                if (data.Kq) {
                    newUser.accessToken = data.access_token;
                    axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Users/authorizeGoogleUser", newUser)
                    .then((response) => {
                        newUser = {};
                        newUser.token = response.data.token;
                        let decoded = jwtDecode(response.data.token);
                        newUser.role = decoded.role;
                        newUser.email = decoded.email;
                        newUser.providerUserId = decoded.providerUserId;
                        newUser.provider = decoded.provider;
                        newUser.userId = decoded.userId;
                        setCookie("cookieUser", newUser, 1/24);
                        setUser(newUser);
                        //window.location = "/";
                    })
                    .catch((error) => {
                        alert(error);
                        // some where to display error
                    });
                } else {
                    // display error: Popup closed!
                }
                break;
            case "facebook":
                if (data !== "unknown") {
                    newUser.accessToken = data.accessToken;
                    axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Users/authorizeFacebookUser", newUser)
                    .then((response) => {
                        newUser = {};
                        newUser.token = response.data.token;
                        let decoded = jwtDecode(response.data.token);
                        newUser.role = decoded.role;
                        newUser.email = decoded.email;
                        newUser.providerUserId = decoded.providerUserId;
                        newUser.provider = decoded.provider;
                        newUser.userId = decoded.userId;
                        setCookie("cookieUser", newUser, 1/24);
                        setUser(newUser);
                        //window.location = "/";
                    })
                    .catch((error) => {
                        // some where to display error
                    });
                } else {
                    // display text error!
                    // Authentication failed. If you have two-step verification enabled, please complete the process. Otherwise, try logging in again.
                }
                break;
            case "instagram":
                console.log(data);
        };
    };

    const handleError = (error) => {
        console.log(error);
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
                                <input className='text-block' type='login' name='Email' placeholder='IDK@gmail.com'/>
                            </p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'>
                                <input className='text-block' type='password' name='Password' placeholder='*********'/>
                            </p>
                        </form>
                        <a>
                            <input className='login-button' type='button' value='Увійти' />
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
                                <LoginSocialGoogle
                                    isOnlyGetToken
                                    client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                    onResolve={({ provider, data }) => {
                                        handleSuccess(provider, data);
                                    }}
                                    onReject={(err) => {
                                        handleError(err);
                                    }}
                                >
                                    <button className='social-button'>
                                        <img src={Google}/>
                                    </button>
                                </LoginSocialGoogle>
                            </div>
                            <div>
                                <LoginSocialFacebook
                                    isOnlyGetToken
                                    appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
                                    onResolve={({ provider, data }) => {
                                        handleSuccess(provider, data);
                                    }}
                                    onReject={(err) => {
                                        handleError(err);
                                    }}
                                >
                                    <button className='social-button'>
                                        <img src={Facebook}/>
                                    </button>
                                </LoginSocialFacebook>
                            </div>
                            <div>
                                <LoginSocialTwitter
                                    isOnlyGetToken
                                    client_id={process.env.REACT_APP_TWITTER_CLIENT_ID}
                                    redirect_uri="https://asian-shop-dev.vercel.app"
                                    onResolve={({ provider, data }) => {
                                        console.log(data);
                                    }}
                                    onReject={(err) => {
                                        handleError(err);
                                    }}
                                >
                                    <button className='social-button' onClick={ console.log("ENV_REACT_APP_TWITTER_CLIENT_ID:", process.env.REACT_APP_TWITTER_CLIENT_ID) }>
                                        <img src={Instagram}/>
                                    </button>
                                </LoginSocialTwitter>
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