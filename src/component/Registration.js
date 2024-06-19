import React from 'react';
import Google from '../images/socials/google-auth.svg'
import Facebook from '../images/socials/facebook-auth.svg'
import Apple from '../images/socials/apple-auth.svg'

function App() {
    return <Google />;
    return <Facebook />;
    return <Apple />;
}

export default function Registration() {
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
                            <p className='text-auth'><input className='text-block' type='text' name='Name' placeholder='Best name'></input></p>
                            <h5 className='title-line'>Пошта</h5>
                            <p className='text-auth'><input className='text-block' type='login' name='Email' placeholder='IDK@gmail.com'></input></p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'><input className='text-block' type='password' name='Password' placeholder='*********'></input></p>
                            </form>
                            <a>
                               <input className='login-button' type='button' value='Зареєструватись' />
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
                                    <img src={Apple}></img>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className='footer-auth'>
                        <div className='title-auth-white-div title-auth-white-div-reg'>
                        <h4 className='title-auth-white'>Вже маєте обліковий запис?<a href='/registration' className='title-auth-white'> Увійдіть</a></h4>
                        </div>
                        <p className='text-auth-white'>Безпечний вхід за допомогою reCAPTCHA з урахуванням
                            <p className='text-auth-white-plus'> Умови та конфіденційність Google</p></p>
                    </div>
                    </div>
                    </div>
        </body>
    )
}