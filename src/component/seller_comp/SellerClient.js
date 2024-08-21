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
import BigGoodsSeller from '../seller_comp/img_seller/big-goods-seller.svg';
import AddGoods from '../seller_comp/img_seller//add-goods-box-seller.svg';
import GreyX from '../seller_comp/img_seller/greyX.svg';
import ChipsLeys from '../seller_comp/img_seller/chips-leys.jpg';
import BigClientSeller from '../seller_comp/img_seller/big-client-seller.svg';


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
    return <BigGoodsSeller />;
    return <BigClientSeller />;
    return <AddGoods />;
    return <GreyX />;
    return <ChipsLeys />;
}

export default function SellerGoodsPosition() {

    const [modalIsOpenProfile, setModalIsOpenProfile] = useState(false);
    const [modalIsOpenProfilePassword, setModalIsOpenProfilePassword] = useState(false);
  
    const openModalProfilePassword = () => {
      setModalIsOpenProfilePassword(true);
    };
  
    const closeModalProfilePassword = () => {
      setModalIsOpenProfilePassword(false);
    };

    const navigate = useNavigate();

    const handleCompanyClick = () => {
        navigate("/seller/company");
    };

    const handleProfileClick = () => {
        navigate("/seller/profile");
    };

    const handlePromotionsClick = () => {
        navigate("/seller/promotions");
    };

    const handlePositionsClick = () => {
        navigate("/seller/positions");
    };

    const handleAddPositionClick = () => {
        navigate("/seller/positions/add");
    };

    const handleCategoriesClick = () => {
        navigate("/seller/categories");
    };

    const handleMainClick = () => {
        navigate("/");
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
                    <button className='left-seller-button left-seller-subbutton-open'><img src={ClientSeller} className='img-seller-left'></img>Клієнти</button>
                    </div>
                    <div>
                    <details className='seller-details'>
                    <summary><img src={OptionSeller} className='img-seller-left'></img>Налаштування</summary>
                    <div onClick={handleCompanyClick}>
                    <button className='left-seller-subbutton'>Компанія</button>
                    </div>
                    <div onClick={handleProfileClick}>
                    <button className='left-seller-subbutton'>Профіль</button>
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
            <img src={BigClientSeller} className='img-seller-left'></img>
            <p>Клієнти</p>
            </div>
            <div className='save-seller-button-div save-seller-button-div-pos'>
            <button className='save-seller-button' onClick={openModalProfilePassword}>Додати клієнта</button>
            <Modal isOpen={modalIsOpenProfilePassword} onRequestClose={closeModalProfilePassword} className='background-modal-div'>
                      <div className='modal-profile-password-div'> 
                        <button onClick={closeModalProfilePassword} className='close-modal-button close-modal-profile-button'/>
                        <h2 className='title-profile-modal'>
                          Додати клієнта
                        </h2>
                        <p className='subtitle-modal-profile'>Прізвище</p>
                        <p className='input-profile'>
                          <input className='line-profile-modal' type='text' name='modal-name' placeholder='Прізвище'/>
                        </p>
                        <p className='subtitle-modal-profile'>Ім'я</p>
                        <p className='input-profile'>
                          <input className='line-profile-modal' type='password' name='modal-name' placeholder="Ім'я"/>
                        </p>
                        <p className='subtitle-modal-profile'>Електронна пошта</p>
                        <p className='input-profile'>
                          <input className='line-profile-modal' type='email' name='modal-email' placeholder='email@gmail.com'/>
                        </p>
                        <div className='button-profile-div button-profile-modal-div'>
                          <input className='save-profile-button' type='button' value='Зберегти' />
                          <input className='cancel-profile-button' type='button' value='Скасувати'/>
                        </div>
                      </div>
                    </Modal>
            </div>
            </div>
            
            <div className='right-seller'>
                   <div className='main-position-seller'>
                    <div className='top-block-position-seller'>
                    <div className='position-search-seller-div'>
                    <input className='position-search-seller' type='search' placeholder='Пошук по ПІБ, пошті чи номеру телефону клієнта '></input>
                    </div>
                    </div>
                    <div className='bottom-block-position-seller'>
                    <details className='position-details'>
                                    <summary className='summary-details'>Відфільтруйте клієнтів</summary>
                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-top'>Стать</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Чоловік</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Жінка</button>
                                        </div>
                                    </details>
                                    </div>

                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-top'>Відгук про продавця</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Клієнт залишив відгук</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Клієнт не залишив відгук</button>
                                        </div>
                                    </details>
                                    </div>

                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-top'>Повідомлення компанії</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Клієнт писав повідомлення</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Клієнт не писав повідомлення</button>
                                        </div>
                                    </details>
                                    </div>

                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-top'>Період замовлень/повідомлень</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Менше чим 3 місяці</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Більше чим 3 місяці</button>
                                        </div>
                                    </details>
                                    </div>

                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-top'>Кількість замовлень/повідомлень</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>1</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>2 - 5</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>6 - 10</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Більше ніж 10</button>
                                        </div>
                                    </details>
                                    </div>
                                    </details>

                                <div className='filter-position-seller-block'>
                        <div className='filter-position-seller'>
                        <p>В дорозі</p>
                        <img src={GreyX} className='img-position-filter'></img>
                    </div>
                    <div className='filter-position-seller'>
                        <p>Прийнято</p>
                        <img src={GreyX} className='img-position-filter'></img>
                    </div>
                    </div>

                    <div className='goods-position-seller-block goods-position-seller-block-promotion'>
                        <div className='display-promotion-block'>
                        <div className='block-promotion'>
                            <div className='subblock-promotion'><p>Прізвище Ім'я</p></div>
                            <div className='subblock-promotion'><p>Ч/Ж</p></div>
                            <div className='subblock-promotion'><p>Відгук</p></div>
                            <div className='subblock-promotion'><p>Повідомлення</p></div>
                            <div className='subblock-promotion'><p>Замовлення №коду  </p></div>
                        </div>
                        <div className='block-promotion'>
                        <div className='subblock-promotion'><p>Прізвище Ім'я</p></div>
                            <div className='subblock-promotion'><p>Ч/Ж</p></div>
                            <div className='subblock-promotion'><p>Відгук</p></div>
                            <div className='subblock-promotion'><p>Повідомлення</p></div>
                            <div className='subblock-promotion'><p>Замовлення №коду  </p></div>
                        </div>
                        </div>

                        
                    </div>
                    </div>
                   </div>
            </div>
            </div>
            </div>
        </body>
    )
}