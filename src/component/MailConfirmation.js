import React from 'react';



function App() {

}

export default function MailConfirmation() {
    return (
        <body className='authorization-body'>
            <div className='background-mail-div'>
                        <div className='left-mail'>
                            Ще трохи...
                        </div>
                        <div className='right-mail'>
                           <div className='title-mail-div'>
                            <h1>
                                Підтвердіть пошту
                            </h1>
                           </div>

                           <div className='text-mail-div'>
                            <p>Впишіть 6-ти значний код, який ми відправили вам на <span className='email-span'>em****@gmail.com</span></p>
                           </div>

                           <div className='input-mail-div'>
                            <div><input className='text-mail' type='text' maxlength='1' autoFocus></input></div>
                            <div><input className='text-mail' type='text' maxlength='1' autoFocus></input></div>
                            <div><input className='text-mail' type='text' maxlength='1' autoFocus></input></div>
                            <div><input className='text-mail' type='text' maxlength='1' autoFocus></input></div>
                            <div><input className='text-mail' type='text' maxlength='1' autoFocus></input></div>
                            <div><input className='text-mail' type='text' maxlength='1' autoFocus></input></div>
                           </div>

                           <div className='pass-conf-div'>
                            <p><a href='#'>Отримати код</a></p>
                           </div>

                           <input className='login-button mail-button' type='button' value='Підтвердити' />
                    </div>
                    </div>
        </body>
    )
}