import React, { useEffect, useState, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import MainSeller from '../seller_comp/img_seller/main-seller.svg';
import OrderSeller from '../seller_comp/img_seller/order-seller.svg';
import GoodsSeller from '../seller_comp/img_seller/goods-seller.svg';
import MessageSeller from '../seller_comp/img_seller/message-seller.svg';
import PenSeller from '../seller_comp/img_seller/pen-seller.svg';
import ClientSeller from '../seller_comp/img_seller/client-seller.svg';
import AnaliticSeller from '../seller_comp/img_seller/analitic-seller.svg';
import WalletSeller from '../seller_comp/img_seller/wallet-seller.svg';
import OptionSeller from '../seller_comp/img_seller/option-seller.svg';
import WolfSeller from '../seller_comp/img_seller/white-trans-wolf.svg';
import BigOptionSeller from '../seller_comp/img_seller/big-option-seller.svg';
import SakuraSeller from '../seller_comp/img_seller/sakura-seller.svg';

import { useAuth } from '../providers/AuthProvider';
import { useErrors } from '../providers/ErrorProvider';
import { useData } from '../providers/DataProvider';

export default function SellerOptionProfile() {

    const { user, updatePassword, updateEmail, removeUser } = useAuth();
    const { handleMethod, catchedError } = useErrors();
    const { updateSellerInfo } = useData();
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        sellerFirstName: user.sellerFirstName,
        sellerLastName: user.sellerLastName,
        sellerMiddleName: user.sellerMiddleName,
        email: user.email,
        sellerPhone: user.sellerPhone,
        password: "",
        newPassword: "",
        newPasswordRepeat: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleMethod(() => {
            setNewUser(prev => {
                return { ...prev, [name]: value };
            });
        });
    };

    const handleSavePhoneClick = () => {
        handleMethod(async () => {
            if (!/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/.test(newUser.sellerPhone)) throw "phone-format-error";
            await updateSellerInfo(newUser);
            window.location.reload(true);
        });
    };

    const handleChangeEmail = () => {
        handleMethod(async () => {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newUser.email)) throw "email-format-error";
            await updateEmail(newUser.email);
            navigate("/confirmation");
        });
    };

    const handleChangePassword = () => {
        handleMethod(async () => {
            const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;
            if (!passRegex.test(newUser.newPassword)) throw "password-format-error";
            if (newUser.newPassword !== newUser.newPasswordRepeat) throw "not-same-error";
            await updatePassword(newUser.password, newUser.newPassword, newUser.newPasswordRepeat);
            
            window.location.reload(true);
        });
    };

    const handleSaveClick = () => {
        handleMethod(async () => {
            await updateSellerInfo(newUser);
            window.location.reload(true);
        });
    };

    const handleRemoveUser = () => {
        handleMethod(async () => {
            await removeUser();
            navigate("/");
        });
    };

    const handleCompanyClick = () => { navigate("/seller/company") };

    const handleProfileClick = () => { navigate("/seller/profile") };

    const handlePromotionsClick = () => { navigate("/seller/promotions") };

    const handlePositionsClick = () => { navigate("/seller/positions") };

    const handleCategoriesClick = () => { navigate("/seller/categories") };

    const handleMainClick = () => { navigate("/") };

    const [modalIsOptionProfileSeller, setModalIsOptionProfileSeller] = useState(false);

  const openModalOptionProfileSeller = () => {
    setModalIsOptionProfileSeller(true);
  };

  const closeModalOptionProfileSeller = () => {
    setModalIsOptionProfileSeller(false);
  };

  const [modalIsOptionProfileSeller_1, setModalIsOptionProfileSeller_1] = useState(false);

  const openModalOptionProfileSeller_1 = () => {
    setModalIsOptionProfileSeller_1(true);
  };

  const closeModalOptionProfileSeller_1 = () => {
    setModalIsOptionProfileSeller_1(false);
  };

  const [modalIsOptionProfileSeller_2, setModalIsOptionProfileSeller_2] = useState(false);

  const openModalOptionProfileSeller_2 = () => {
    setModalIsOptionProfileSeller_2(true);
  };

  const closeModalOptionProfileSeller_2 = () => {
    setModalIsOptionProfileSeller_2(false);
  };
    return (
        <body className='seller-body'>
            <div className='seller-div'>
            <div className='left-seller'>
                <h1 className='logo-seller'>SakuraTails</h1>
                <div className='name-id-seller'>
                    <h3>{user.sellerFirstName} {user.sellerLastName}</h3>
                    <p>Ваш ID: {user.sellerId}</p>
                </div>
                <div className='seller-search-div'>
                <input type="search" name="seller-search" className='seller-search' placeholder="Пошук"/>
                </div>

                <div className='seller-buttons-div seller-buttons-option-company-div'>
                <div onClick={handleMainClick}>
                    <button className='left-seller-button'><img src={MainSeller} className='img-seller-left'></img>Головна</button>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={OrderSeller} className='img-seller-left'></img>Замовлення</button>
                    </div>
                    <div>
                    <details className='seller-details'>
                    <summary><img src={GoodsSeller} className='img-seller-left'></img>Товари і послуги</summary>
                    <div onClick={handleCategoriesClick}>
                    <button className='left-seller-subbutton'>Категорії</button>
                    </div>
                    <div onClick={handlePositionsClick}>
                    <button className='left-seller-subbutton'>Позиції</button>
                    </div>
                    <div onClick={handlePromotionsClick}>
                    <button className='left-seller-subbutton'>Акції та промокоди</button>
                    </div>
                    </details>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={PenSeller} className='img-seller-left'></img>Відгуки</button>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={ClientSeller} className='img-seller-left'></img>Клієнти</button>
                    </div>
                    <div>
                    <details className='seller-details'>
                    <summary><img src={OptionSeller} className='img-seller-left'></img>Налаштування</summary>
                    <div onClick={handleCompanyClick}>
                    <button className='left-seller-subbutton'>Компанія</button>
                    </div>
                    <div onClick={handleProfileClick}>
                    <button className='left-seller-subbutton left-seller-subbutton-open'>Профіль</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Менеджери</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Способи доставки</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Способи оплати</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Графік роботи</button>
                    </div>
                    </details>
                    </div>
                </div>

            </div>
            <div className='cabinet-seller-div'>
            <div className='head-seller'>
                <div>
            <img src={BigOptionSeller} className='img-seller-left'></img>
            <p>Профіль</p>
            </div>
            <div className='save-seller-button-div'>
            <button className='save-seller-button' onClick={handleSaveClick}>Зберегти зміни</button>
            </div>
            </div>
            <div className='right-seller right-seller-bottom'>
                {/* <div className='sakura-seller-div'>
                    <img src={SakuraSeller} className='sakura-seller'></img>
                    </div> */}
                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                            Особиста інформація
                            </h3>
                            <p>
                            Дані використовуються для зв'язку з вами особистого менеджера
                            </p>
                        </div>
                        <div className='information-option'>
                            <div>
                                <p className='name-input-seller'>Ім'я <span>*</span></p>
                                <p className='text-input-seller'>
                                <input type='text' placeholder="Ім'я" name='sellerFirstName' required value={newUser.sellerFirstName} onChange={handleInputChange}/>
                                <div className='long-line-seller'></div>
                                </p>
                            </div>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Прізвище <span>*</span></p>
                                <p className='text-input-seller'>
                                <input type='text' placeholder='Прізвище' name='sellerLastName' required value={newUser.sellerLastName} onChange={handleInputChange}/>
                                <div className='long-line-seller'></div>
                                </p>
                            </div>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>По батькові</p>
                                <p className='text-input-seller'>
                                <input type='text' placeholder='По батькові' name='sellerMiddleName' required value={newUser.sellerMiddleName} onChange={handleInputChange}/>
                                <div className='long-line-seller'></div>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                            Логін та пароль
                            </h3>
                            <p>
                            Дані використовуються для авторизації, відправки рахунку, повідомлень і розсилок на вказаний email
                            </p>
                        </div>
                        <div className='information-option information-option-display'>
                            <div>
                            <p className='name-link-seller'>Email</p>
                            <a href='#' className='link-seller-option' onClick={openModalOptionProfileSeller}><p>{user.email}</p></a>
                            <Modal isOpen={modalIsOptionProfileSeller} onRequestClose={closeModalOptionProfileSeller} className='background-modal-div'>
                    <div className='modal-link-error-div modal-link-option-profile-seller-div'> 
                    <button onClick={closeModalOptionProfileSeller} className='close-modal-button close-link-error-button'></button>
                     <h4>Зміна електронної пошти</h4>
                     <p className='subtitle-option-profile-seller'>Введіть нову адресу електронної пошти</p>
                     <p className='title-line-option-profile-seller'>Нова електронна пошта</p>
                     <p className='input-profile input-option-profile-seller'>
                        <input className='line-profile line-option-profile-seller' type='text' name='email' required onChange={handleInputChange}/>
                    </p>
                    <p className='title-line-error-zero-margin' style={{color: "#951717"}}>    {/* FIX STYLES !!! */}
                        {catchedError.tags.includes("email-field") ? (
                            <>
                                {catchedError.short}
                            </>
                        ) : (
                            <></>
                        )}
                    </p>
                     <div className='buttons-option-profile-seller'>
                      <input className='save-profile-button button-top-profile-div' type='button' value='Зберегти' onClick={handleChangeEmail} />
                      <input className='cancel-profile-button button-top-profile-div' type='button' value='Скасувати' onClick={closeModalOptionProfileSeller} />
                      </div>
                    </div>
                    </Modal>
                            </div>
                            <div>
                            <p className='name-link-seller'>Телефон</p>
                            <a href='#' className='link-seller-option' onClick={openModalOptionProfileSeller_1}>
                                <p>
                                    {user.sellerPhone ? (
                                        user.sellerPhone
                                    ) : (
                                        "Не вказано"
                                    )}
                                </p>
                            </a>
                            <Modal isOpen={modalIsOptionProfileSeller_1} onRequestClose={closeModalOptionProfileSeller_1} className='background-modal-div'>
                    <div className='modal-link-error-div modal-link-option-profile-seller-div'> 
                    <button onClick={closeModalOptionProfileSeller_1} className='close-modal-button close-link-error-button'></button>
                     <h4>Зміна номера телефону</h4>
                     <p className='subtitle-option-profile-seller'>Введіть новий номер телефону</p>
                     <p className='title-line-option-profile-seller'>Новий номер телефону</p>
                     <p className='input-profile input-option-profile-seller'>
                        <input className='line-profile line-option-profile-seller' type='text' name='sellerPhone' onChange={handleInputChange}/>
                    </p>
                    <p className='title-line-error-zero-margin' style={{color: "#951717"}}>    {/* FIX STYLES !!! */}
                        {catchedError.tags.includes("phone-field") ? (
                            <>
                                {catchedError.short}
                            </>
                        ) : (
                            <></>
                        )}
                    </p>
                     <div className='buttons-option-profile-seller'>
                      <input className='save-profile-button button-top-profile-div' type='button' value='Зберегти' onClick={handleSavePhoneClick} />
                      <input className='cancel-profile-button button-top-profile-div' type='button' value='Скасувати' onClick={closeModalOptionProfileSeller_1} />
                      </div>
                    </div>
                    </Modal>
                            </div>
                            <div>
                            <p className='name-link-seller'>Пароль</p>
                            <a href='#' className='link-seller-option' onClick={openModalOptionProfileSeller_2}><p>Змінити пароль</p></a>
                            <Modal isOpen={modalIsOptionProfileSeller_2} onRequestClose={closeModalOptionProfileSeller_2} className='background-modal-div'>
                    <div className='modal-link-error-div modal-link-option-profile-seller-div'> 
                    <button onClick={closeModalOptionProfileSeller_2} className='close-modal-button close-link-error-button'></button>
                     <h4>Зміна паролю</h4>
                     <p className='title-line-option-profile-seller'>Старий пароль</p>
                     <p className='input-profile input-option-profile-seller input-option-profile-seller-enter'>
                                <input className='line-profile line-option-profile-seller' type='password' name='password' required onChange={handleInputChange}/>
                            </p>
                            <p className='title-line-option-profile-seller'>Новий пароль</p>
                     <p className='input-profile input-option-profile-seller input-option-profile-seller-enter'>
                                <input className='line-profile line-option-profile-seller' type='password' name='newPassword' required onChange={handleInputChange}/>
                            </p>
                        <p className='title-line-error-zero-margin' style={{color: "#951717"}}>    {/* FIX STYLES !!! */}
                            {catchedError.tags.includes("password-field") ? (
                                <>
                                    {catchedError.short}
                                </>
                            ) : (
                                <></>
                            )}
                        </p>
                            <p className='title-line-option-profile-seller'>Повторіть новий пароль</p>
                     <p className='input-profile input-option-profile-seller'>
                                <input className='line-profile line-option-profile-seller' type='password' name='newPasswordRepeat' required onChange={handleInputChange}/>
                            </p>
                     <div className='buttons-option-profile-seller'>
                      <input className='save-profile-button button-top-profile-div' type='button' value='Зберегти' onClick={handleChangePassword} />
                      <input className='cancel-profile-button button-top-profile-div' type='button' value='Скасувати' onClick={closeModalOptionProfileSeller_2} />
                      </div>
                    </div>
                    </Modal>
                            </div>
                        </div>
                        
                    </div>
                    <div className='buttons-save-del-seller'>
                    <div>
                    <button className='save-seller-button option-seller-save-button' onClick={handleSaveClick}>Зберегти зміни</button>
                    </div>
                    <div>
                    <button className='save-seller-button del-seller-button option-seller-save-button' onClick={handleRemoveUser}>Видалити профіль</button>
                    </div>
                    </div>
                  </div>
            </div>
            </div>
        </body>
    )
}