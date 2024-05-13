import React from 'react';
import RedWolf from '../images/logo/red-wolf.svg';

function App() {
    return <RedWolf />;
}

export default function Authorization() {
    return (
        <body className='authorization-body'>
            <div className='background-div'>
                <div className='authorization-block-div'>
                    <div className='logo-auth'>
                        <div>
                        <a href='/'>
                        <img className='red-wolf' src={RedWolf}></img>
                        </a>
                        </div>
                        <div className='sakura-auth'>
                            <h1 className='sakuraTails-auth'>SakuraTails</h1>
                            <h3 className='sakuraTails-subtitle-auth'>Asian Eats, Global Treats</h3>
                        </div>
                    </div>
                    <div>
                        <div className='left-auth'>
                            <h4 className='title-auth'>Log In</h4>
                        </div>
                        <div>
                            <form>
                            <h5 className='title-line'>Email address</h5>
                            <p className='text-auth'><input className='text-block' type='login' name='Email' placeholder='email.example@gmail.com'></input></p>
                            <h5 className='title-line'>Password</h5>
                            <p className='text-auth'><input className='text-block' type='password' name='Password' placeholder='Password'></input></p>
                            <p>
                                <a className='text-auth' href='#'>Forgot your password?</a>
                            </p>
                            <a>
                               <input className='login-button' type='button' value='Log In' />
                            </a>
                            </form>
                        </div>
                        <div className='right-auth'>
                            <a>
                               <input className='social-button' type='button' value='Log In with Google'/>
                            </a>
                            <a>
                               <input className='social-button' type='button' value='Log In with Facebook'/>
                            </a>
                        </div>
                    </div>
                    <div className='footer-auth'>
                        <h4 className='title-auth-white'>Don't have an account yet?<a href='#' className='title-auth-white'> Sign up for one</a></h4>
                        <p className='text-auth-white'>Secure Login with reCAPTCHA subject to 
                            Google <a href='#' className='text-auth-white'>Terms</a> & <a href='#' className='text-auth-white'>Privacy</a></p>
                    </div>
                </div>
            </div>
        </body>
    )
}