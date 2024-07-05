import React, { useEffect, useState, useContext, useRef } from 'react';
import Arrow from '../images/icons/arrowLeft.svg';

function App() {
    return <Arrow />;
}

export default function MailConfirmation() {
    return (
        <body className='authorization-body'>
            <div className='background-mail-div'>
                <div className='left-pas'>
                    <h1>
                    І таке бува...
                    </h1>
                </div>
                <div className='right-pas'>
                    <div className='left-arrow'>
                    <img src={Arrow} id='arrow'></img>
                    </div>
                    <div className='title-mail-div title-pas-div'>
                        <h1>
                            Скидання паролю
                        </h1>
                    </div>

                    <form className='form-pas-plus'>
                            <h5 className='title-line'>Новий пароль</h5>
                            <p className='text-auth'>
                                <input className='text-block' type='password' name='Password' placeholder='*********' required/>
                                <div className='line-text-block'></div>
                            </p>
                            <h5 className='title-line'>Пароль</h5>
                            <p className='text-auth'>
                                <input className='text-block' type='password' name='Password' placeholder='*********' required/>
                                <div className='line-text-block'></div>
                            </p>
                        </form>

                    <input className='login-button mail-button' type='button' value='Підтвердити'/>
                </div>
            </div>
        </body>
    )
}