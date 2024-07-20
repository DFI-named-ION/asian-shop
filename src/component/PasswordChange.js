import React, { useEffect, useState, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import Arrow from '../images/icons/arrowLeft.svg';

import axios from 'axios';
import { JwtContext } from './providers/JwtProvider';
import { useErrors } from './providers/ErrorProvider';

function App() {
    return <Arrow />;
}

export default function MailConfirmation() {

    const [code, setCode] = useState("");
    const [userId, setUserId] = useState("");
    const {handleMethod, catchedError} = useErrors();
    const navigate = useNavigate();
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
    const secret = new URLSearchParams(useLocation().search).get('secret');
    const {encryptJwtToken, decryptJwtToken} = useContext(JwtContext);

    const openErrorModal = () => {
        setIsErrorModalOpen(true);
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false);
    };

    useEffect(() => {
        handleMethod(async () => {
            const data = decryptJwtToken(secret);
            setCode(data.code);
            setUserId(data.userId);
        });
    }, [secret]);

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleNewPasswordRepeatChange = (e) => {
        setNewPasswordRepeat(e.target.value);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        handleMethod(async () => {
            const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;
            if (!passRegex.test(newPassword)) throw "password-format-error";
            if (newPassword !== newPasswordRepeat) throw "not-same-error";
            let data = {
                code,
                user_id: userId,
                new_password: newPassword,
                new_password_repeat: newPasswordRepeat
            };
            await encryptJwtToken(data).then(async token => {
                await axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Auth/resetPassword", { token });
                navigate("/authorization");
            });
        });
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/reset-password-verification");
    };

    return (
        <body className='authorization-body'>
            <div className='background-mail-div'>
                <div className='left-pas'>
                    <h1>
                    І таке бува...
                    </h1>
                </div>
                <div className='right-pas'>
                    <div className='left-arrow' onClick={handleBack}>
                    <img src={Arrow} id='arrow'></img>
                    </div>
                    <div className='title-mail-div title-pas-div'>
                        <h1>
                            Скидання паролю
                        </h1>
                    </div>

                    <form className='form-pas-plus'>
                        <Modal isOpen={isErrorModalOpen} onRequestClose={closeErrorModal} className='background-modal-div'>
                            <div className='modal-link-error-div'> 
                                <button onClick={closeErrorModal} className='close-modal-button close-link-error-button'></button>
                                <p>
                                    {catchedError.long === "password-format-error" ? (
                                        <>
                                            <p>Неправильний формат пароля:</p>
                                            <ol>
                                                <li>Довжина пароля повинна бути від 6 до 64 символів.</li>
                                                <li>Пароль повинен містити:</li>
                                            </ol>
                                            <ul>
                                                <li>одну велику літеру.</li>
                                                <li>одну малу літеру.</li>
                                                <li>одну цифру.</li>
                                                <li>один спеціальний символ: @, $, !, %, *, ?, &.</li>
                                            </ul>
                                        </>
                                    ) : (catchedError.long) }
                                </p>
                            </div>
                        </Modal>
                        <h5 className='title-line'>Новий пароль</h5>
                        <p className='text-auth'>
                            <input className='text-block' type='password' name='Password' placeholder='*********' value={newPassword} onChange={handleNewPasswordChange} required/>
                            <div className='line-text-block line-text-block_plus'></div>
                        </p>
                        <h5 className='title-line'>Підтвердіть новий пароль</h5>
                        <p className='text-auth'>
                            <input className='text-block' type='password' name='Password' placeholder='*********' value={newPasswordRepeat} onChange={handleNewPasswordRepeatChange} required/>
                            <div className='line-text-block line-text-block_plus'></div>
                        </p>
                    </form>

                    <p className='title-line-error'>
                        {catchedError.tags.includes("password-field") ? (
                            <>
                                {catchedError.short}
                                <a className='link-line-error' href='#' onClick={openErrorModal}>ⓘ</a>
                            </>
                        ) : (
                            <></>
                        )}
                    </p>

                    <input className='login-button mail-button' type='button' value='Підтвердити' onClick={handleResetPassword}/>
                </div>
            </div>
        </body>
    )
}