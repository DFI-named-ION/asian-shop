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
import { useAuth } from '../providers/AuthProvider';


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
}

export default function Seller() {

    const { user } = useAuth();
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
                    <button className='left-seller-subbutton'>Профіль</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton' onClick={() => {navigate("/seller/managers");}}>Менеджери</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton' onClick={() => {navigate("/seller/shipping");}}>Способи доставки</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton' onClick={() => {navigate("/seller/payment");}}>Способи оплати</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton' onClick={() => {navigate("/seller/schedule");}}>Графік роботи</button>
                    </div>
                    </details>
                    </div>
                </div>

            </div>
            <div className='cabinet-seller-div'>
            <div className='head-seller'>
            <div>
            <img src={BigOptionSeller} className='img-seller-left'></img>
            <p>Компанія</p>
            </div>
            </div>
            <div className='text-cabinet-seller'>
                    <h1>Кабінет продавця</h1>
                  </div>
            </div>
            </div>
        </body>
    )
}