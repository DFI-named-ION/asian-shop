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


function App() {
    return <MainSeller />;
    return <OrderSeller />;
    return <GoodsSeller />;
    return <MessageSeller />;
    return <PenSeller />;
    return <ClientSeller />;
    return <AnaliticSeller />;
    return <WalletSeller />;
    return <OptionSeller />;
    return <WolfSeller />;
    return <BigOptionSeller />;
    return <SakuraSeller />;
}

export default function SellerOptionCompany() {
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
                    <h3>Ім'я Прізвище</h3>
                    <p>Ваш ID: 0000001</p>
                </div>
                <div className='seller-search-div'>
                <input type="search" name="seller-search" className='seller-search' placeholder="Пошук"/>
                </div>

                <div className='seller-buttons-div seller-buttons-option-company-div'>
                    {/* <div className='wolf-seller-div'>
                    <img src={WolfSeller} className='wolf-seller'></img>
                    </div> */}
                    <div>
                    <button className='left-seller-button'><img src={MainSeller} className='img-seller-left'></img>Головна</button>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={OrderSeller} className='img-seller-left'></img>Замовлення</button>
                    </div>
                    <div>
                    <details className='seller-details'>
                    <summary><img src={GoodsSeller} className='img-seller-left'></img>Товари і послуги</summary>
                    <div>
                    <button className='left-seller-subbutton'>Категорії</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Позиції</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Акції та промокоди</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Видалені позиції</button>
                    </div>
                    </details>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={MessageSeller} className='img-seller-left'></img>Сповіщення</button>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={PenSeller} className='img-seller-left'></img>Відгуки</button>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={ClientSeller} className='img-seller-left'></img>Клієнти</button>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={AnaliticSeller} className='img-seller-left'></img>Аналітика</button>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={WalletSeller} className='img-seller-left'></img>Гаманець компанії</button>
                    </div>
                    <div>
                    <details className='seller-details'>
                    <summary><img src={OptionSeller} className='img-seller-left'></img>Налаштування</summary>
                    <div>
                    <button className='left-seller-subbutton'>Компанія</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton left-seller-subbutton-open'>Профіль</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Менеджери</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Інтернет-магазин</button>
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
                    <div>
                    <button className='left-seller-subbutton'>Повернення та гарантія</button>
                    </div>
                    </details>
                    </div>
                </div>

            </div>
            <div className='cabinet-seller-div'>
            <div className='head-seller'>
            <img src={BigOptionSeller} className='img-seller-left'></img>
            <p>Профіль</p>
            <div className='save-seller-button-div'>
            <button className='save-seller-button'>Зберегти зміни</button>
            </div>
            </div>
            <div className='right-seller'>
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
                                <input type='text' placeholder="Ім'я" required></input>
                                <div className='long-line-seller'></div>
                                </p>
                            </div>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Прізвище <span>*</span></p>
                                <p className='text-input-seller'>
                                <input type='text' placeholder='Прізвище' required></input>
                                <div className='long-line-seller'></div>
                                </p>
                            </div>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>По батькові</p>
                                <p className='text-input-seller'>
                                <input type='text' placeholder='По батькові' required></input>
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
                            <a href='#' className='link-seller-option' onClick={openModalOptionProfileSeller}><p>email.gmail.com</p></a>
                            <Modal isOpen={modalIsOptionProfileSeller} onRequestClose={closeModalOptionProfileSeller} className='background-modal-div'>
                    <div className='modal-link-error-div modal-link-option-profile-seller-div'> 
                    <button onClick={closeModalOptionProfileSeller} className='close-modal-button close-link-error-button'></button>
                     <h4>Зміна електронної пошти</h4>
                     <p className='subtitle-option-profile-seller'>Введіть нову адресу електронної пошти</p>
                     <p className='title-line-option-profile-seller'>Нова електронна пошта</p>
                     <p className='input-profile input-option-profile-seller'>
                                <input className='line-profile line-option-profile-seller' type='text' name='first name' required/>
                            </p>
                     <div className='buttons-option-profile-seller'>
                      <input className='save-profile-button button-top-profile-div' type='button' value='Зберегти' />
                      <input className='cancel-profile-button button-top-profile-div' type='button' value='Скасувати' />
                      </div>
                    </div>
                    </Modal>
                            </div>
                            <div>
                            <p className='name-link-seller'>Телефон</p>
                            <a href='#' className='link-seller-option' onClick={openModalOptionProfileSeller_1}><p>+380 66 000 00 00</p></a>
                            <Modal isOpen={modalIsOptionProfileSeller_1} onRequestClose={closeModalOptionProfileSeller_1} className='background-modal-div'>
                    <div className='modal-link-error-div modal-link-option-profile-seller-div'> 
                    <button onClick={closeModalOptionProfileSeller_1} className='close-modal-button close-link-error-button'></button>
                     <h4>Зміна номера телефону</h4>
                     <p className='subtitle-option-profile-seller'>Введіть новий номер телефону</p>
                     <p className='title-line-option-profile-seller'>Новий номер телефону</p>
                     <p className='input-profile input-option-profile-seller'>
                                <input className='line-profile line-option-profile-seller' type='text' name='first name' required/>
                            </p>
                     <div className='buttons-option-profile-seller'>
                      <input className='save-profile-button button-top-profile-div' type='button' value='Зберегти' />
                      <input className='cancel-profile-button button-top-profile-div' type='button' value='Скасувати' />
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
                                <input className='line-profile line-option-profile-seller' type='password' name='first name' required/>
                            </p>
                            <p className='title-line-option-profile-seller'>Новий пароль</p>
                     <p className='input-profile input-option-profile-seller input-option-profile-seller-enter'>
                                <input className='line-profile line-option-profile-seller' type='password' name='first name' required/>
                            </p>
                            <p className='title-line-option-profile-seller'>Повторіть новий пароль</p>
                     <p className='input-profile input-option-profile-seller'>
                                <input className='line-profile line-option-profile-seller' type='password' name='first name' required/>
                            </p>
                     <div className='buttons-option-profile-seller'>
                      <input className='save-profile-button button-top-profile-div' type='button' value='Зберегти' />
                      <input className='cancel-profile-button button-top-profile-div' type='button' value='Скасувати' />
                      </div>
                    </div>
                    </Modal>
                            </div>
                        </div>
                        
                    </div>
                    <div className='buttons-save-del-seller'>
                    <div>
                    <button className='save-seller-button option-seller-save-button'>Зберегти зміни</button>
                    </div>
                    <div>
                    <button className='save-seller-button del-seller-button option-seller-save-button'>Видалити профіль</button>
                    </div>
                    </div>
                  </div>
            </div>
            </div>
        </body>
    )
}