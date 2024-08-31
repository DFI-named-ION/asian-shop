import React, { useEffect, useState, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
import Mastercard from '../seller_comp/img_seller/mastercard-seller.svg';
import LeftArrow from '../seller_comp/img_seller/arrow-left.svg';


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
    return <LeftArrow />;
    return <Mastercard />;
}

export default function OptionPayMastercard() {
    
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
                    <button className='left-seller-button'><img src={OrderSeller} className='img-seller-left left-seller-subbutton-open'></img>Замовлення</button>
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
            <img src={ClientSeller} className='img-seller-left'></img>
            <p>Нове замовлення</p>
            </div>
            <div className='save-seller-button-div'>
            <button className='save-seller-button'>Зберегти</button>
            </div>
            </div>
                    <div className='right-seller'>
                    <div className='top-option-company'>
                        <div className='description-seller-option description-seller-option-delivery'>
                        <img src={LeftArrow} className='img-delivery'></img>
                        </div>
                        <div className='information-option'>
                        <div>
                        <p className='title-new-order'>Товари</p>
                        </div>
                        <div className='order-search-div'>
                    <input className='order-search' type='search' placeholder='Пошук за назвою товару'></input>
                    </div>
                        </div>
                    </div>

                    <div className='right-seller'>
                    <div className='top-option-company'>
                        <div className='description-seller-option description-seller-option-delivery'>
                       
                        </div>
                        </div>
                        <div className='information-option information-option-order'>
                        <div className='menu-new-order'>
                        <div>
                        <p className='title-new-order'>Клієнт</p>
                        </div>
                        <div>
                            <a href='#'><p className='link-order-client'>Додати</p></a>
                        </div>
                        </div>
                        <div className='order-search-div'>
                    <input className='order-search' type='search' placeholder='Пошук за поштою'></input>
                    </div>
                    <div className='flex-order'>
                  
                        <div>
                    <div>
                        <p className='title-new-order title-new-order-plus'>Доставка</p>
                        </div>
                    <div class="radio-select-seller-div radio-select-order-div" id='block-1'>
                                <select className='radio-select-seller radio-select-seller-order' required>
                                <option value="" disabled selected hidden>Виберіть спосіб доставки</option>
                                <option>Нова Пошта</option>
                                 <option>Доставка Rozetka</option>
                                 <option>УкрПошта</option>
                                 </select>
                                 </div>
                        </div>
                        </div>

                        <div>
                         <div>
                        <p className='title-new-order title-new-order-plus'>Оплата</p>
                        </div>
                    <div class="radio-select-seller-div radio-select-order-div" id='block-1'>
                                <select className='radio-select-seller radio-select-seller-order' required>
                                <option value="" disabled selected hidden>Виберіть спосіб оплати</option>
                                <option>PayPal</option>
                                 <option>Mastercard</option>
                                 <option>Visa</option>
                                 </select>
                                 </div>
                                 </div>
                    </div>
                    </div>
               </div>
                    
                    
                    <div>
                    <button className='save-seller-button option-seller-save-button save-seller-button-delivery'>Зберегти зміни</button>
                    </div>
                  
                  
            </div>
            
            </div>
        </body>
    )
}