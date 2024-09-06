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
import OpenSchedule from '../seller_comp/img_seller/open-schedule.svg';
import CloseSchedule from '../seller_comp/img_seller/close-schedule.svg';
import HeaderSeller from '../seller_comp/HeaderSeller';
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
    return <OpenSchedule />;
    return <CloseSchedule />;
    return <HeaderSeller />;
}

export default function SellerOptionCompany() {

    const navigate = useNavigate();

    const handleCompanyClick = () => { navigate("/seller/company") };

    const handleProfileClick = () => { navigate("/seller/profile") };

    const handlePromotionsClick = () => { navigate("/seller/promotions") };

    const handlePositionsClick = () => { navigate("/seller/positions") };

    const handleCategoriesClick = () => { navigate("/seller/categories") };

    const handleMainClick = () => { navigate("/") };

    const handleOrdersClick = () => { navigate("/seller/orders") }; //

    const handleReviewsClick = () => { navigate("/seller/reviews") }; //

    const handleClientsClick = () => { navigate("/seller/clients") }; //

    const handleManagersClick = () => { navigate("/seller/managers") }; //

    const handleDeliveryOptionsClick = () => { navigate("/seller/shipping") }; //
    
    const handlePaymentOptionsClick = () => { navigate("/seller/payment") }; //
    
    const handleScheduleClick = () => { navigate("/seller/schedule") }; //

    return (
                <div className='seller-buttons-div seller-buttons-option-company-div'>
                <div>
                    <button className='left-seller-button' onClick={handleMainClick}><img src={MainSeller} className='img-seller-left'></img>Головна</button>
                    </div>
                    <div>
                    <button className='left-seller-button' onClick={handleOrdersClick}><img src={OrderSeller} className='img-seller-left'></img>Замовлення</button>
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
                    <div onClick={handleReviewsClick}>
                    <button className='left-seller-button'><img src={PenSeller} className='img-seller-left'></img>Відгуки</button>
                    </div>
                    <div onClick={handleClientsClick}>
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
                    <div onClick={handleManagersClick}>
                    <button className='left-seller-subbutton'>Менеджери</button>
                    </div>
                    <div onClick={handleDeliveryOptionsClick}>
                    <button className='left-seller-subbutton'>Способи доставки</button>
                    </div>
                    <div onClick={handlePaymentOptionsClick}>
                    <button className='left-seller-subbutton'>Способи оплати</button>
                    </div>
                    <div onClick={handleScheduleClick}>
                    <button className='left-seller-subbutton'>Графік роботи</button>
                    </div>
                    </details>
                    </div>
                </div>
                //  left-seller-subbutton-open
    )
}