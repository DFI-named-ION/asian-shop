import React from 'react';
import Google from '../images/socials/google-auth.svg'
import Facebook from '../images/socials/facebook-auth.svg'
import Instagram from '../images/socials/instagram-auth.svg'


function App() {
    return <Google />;
    return <Facebook />;
    return <Instagram />;
}

export default function Authorization() {
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
                            <p className='text-auth'><input className='text-block' type='login' name='Email' placeholder='IDK@gmail.com'></input></p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'><input className='text-block' type='password' name='Password' placeholder='*********'></input></p>
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
                                <button className='social-button'>
                                   <img src={Google}></img>
                                   </button>
                                </div>
                                <div>
                                <button className='social-button'>
                                    <img src={Facebook}></img>
                                    </button>
                                </div>
                                <div>
                                <button className='social-button'>
                                    <img src={Instagram}></img>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className='footer-auth'>
                        <h4 className='title-auth-white title-auth-white-auth'>Ще не маєте облікового запису? <a href='/registration' className='title-auth-white'>Зареєструйтеся</a></h4>
                        <p className='text-auth-white bottom-text-auth'>Безпечний вхід за допомогою reCAPTCHA з урахуванням
                            <p className='text-auth-white-plus'> Умови та конфіденційність Google</p></p>
                    </div>
                    </div>
                    </div>
        </body>
    )
}