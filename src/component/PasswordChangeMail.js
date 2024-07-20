import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-modal';

import Arrow from '../images/icons/arrowLeft.svg';

import axios from 'axios';

import { AuthContext } from './providers/AuthProvider';

function App() {
    return <Arrow />;
}

export default function MailConfirmation() {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [sendShortError, setSendShortError] = useState("");
    const [sendLongError, setSendLongError] = useState("");

    const openErrorModal = () => {
        setIsErrorModalOpen(true);
    };

    const closeErrorModal = () => {
        setIsErrorModalOpen(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendEmailClick = async (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            handleError("email-format-error");
            return;
        }
        let dto = {
            email
        };
        await axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Auth/sendResetUrl", dto)
        .then((response) => {
            if (response.data !== "Success") { 
                handleError(response.data);
            }
        })
        .catch((error) => {
            handleError(error.code);
        });
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/authorization");
    };

    const handleError = (error) => {
        switch (error) {
            case "User not found":
                setSendShortError("User not found");
                setSendLongError("User with this email not found.");
                break;
            // case "ERR_NETWORK":
            //     setSendShortError("Network error");
            //     setSendLongError("Network error. Please check your internet connection.");
            //     break;
            case `Failed to get user with email: ${email}`:
                setSendShortError("User not found");
                setSendLongError("User with this email not found.");
                break;
            case "email-format-error":
                setSendShortError("Email format error");
                setSendLongError("Correct email look like this: user@example.com.");
                break;
            default:
                // console.log(error);
                break;
        };
    };

    return (
        <body className='authorization-body'>
            <div className='background-mail-div'>
                <div className='left-pas'>
                    <h1>І таке бува...</h1>
                </div>
                <div className='right-pas'>
                    <div className='left-arrow' onClick={handleBack}>
                        <img src={Arrow} id='arrow'></img>
                    </div>
                    <div className='title-mail-div'>
                        <h1>
                            Скидання паролю
                        </h1>
                    </div>

                    <div className='text-pas-div'>
                        <p>
                        Введіть вашу електронну адресу, на яку буде надіслано посилання, натисніть на нього для скидання паролю.
                        </p>
                    </div>

                    <form className='form-pas'>
                        <Modal isOpen={isErrorModalOpen} onRequestClose={closeErrorModal} className='background-modal-div'>
                            <div className='modal-link-error-div'> 
                                <button onClick={closeErrorModal} className='close-modal-button close-link-error-button'></button>
                                <p>
                                    {sendLongError}
                                </p>
                            </div>
                        </Modal>
                        <h5 className='title-line'>Пошта</h5>
                        <p className='text-auth'>
                            <input className='text-block-margin-zero' type='login' name='Email' placeholder='email@gmail.com' value={email} onChange={handleEmailChange} required/>
                        </p>
                        <div className='line-text-block'></div>
                        <p className='title-line-error'>
                            {sendShortError.length > 0 ? (
                                <>
                                    {sendShortError}
                                    <a className='link-line-error' href='#' onClick={openErrorModal}>ⓘ</a>
                                </>
                            ) : (
                                <></>
                            )}
                        </p>
                    </form>

                    <input className='login-button mail-button' type='button' value='Підтвердити' onClick={handleSendEmailClick}/>
                </div>
            </div>
        </body>
    )
}