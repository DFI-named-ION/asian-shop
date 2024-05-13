import React from 'react';
import RedWolf from '../images/logo/red-wolf.svg';

function App() {
    return <RedWolf />;
}

export default function Registration() {
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
                            <h4>Sing up</h4>
                        </div>
                        <div>
                            <form>
                            <h5>Email address</h5>
                            <p><input type='login' name='Email' placeholder='email.example@gmail.com'></input></p>
                            <h5>Password</h5>
                            <p><input type='password' name='Password' placeholder='Password'></input></p>
                            <h5>Confim password</h5>
                            <p><input type='password' name='Confim password' placeholder='Password'></input></p>
                            <div>
                            <div>
                                <input type='checkbox'></input>
                            </div>
                            <div>
                                <p>By creating an account, I agree to our <a href='#'>Terms of use</a> and <a href='#'>Privacy Policy</a></p>
                            </div>
                            </div>
                            <a>
                               <input className='login-button' type='button' value='Sing up' />
                            </a>
                            </form>
                        </div>
                        <div>
                            <a>
                               <input className='social-button' type='button' value='Sing up with Google'/>
                            </a>
                            <a>
                               <input className='social-button' type='button' value='Sing up with Facebook'/>
                            </a>
                        </div>
                    </div>
                    <div className='footer-auth'>
                        <h4>Already have an account?<a href='#'>Log In</a></h4>
                        <p>Secure Login with reCAPTCHA subject to 
                            Google <a href='#'>Terms</a> & <a href='#'>Privacy</a></p>
                    </div>
                </div>
            </div>
        </body>
    )
}