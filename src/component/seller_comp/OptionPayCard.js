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
import Card from '../seller_comp/img_seller/card-seller.svg';
import LeftArrow from '../seller_comp/img_seller/arrow-left.svg';
import HeaderSeller from '../seller_comp/HeaderSeller';


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
    return <Card />;
    return <HeaderSeller />;
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

                <HeaderSeller />

            </div>
            <div className='cabinet-seller-div'>
            <div className='head-seller'>
            <div>
            <img src={BigOptionSeller} className='img-seller-left'></img>
            <p>Способи оплати</p>
            </div>
            <div className='save-seller-button-div'>
            <button className='save-seller-button'>Зберегти зміни</button>
            </div>
            </div>
            <div className='right-seller'>
                    <div className='top-option-company'>
                        <div className='description-seller-option description-seller-option-delivery'>
                        <img src={LeftArrow} className='img-delivery'></img>
                        </div>
                        <div className='information-option'>
                            <div className='block-delivery'>
                                <div className='subblock-delivery'>
                                <div><img src={Card} className='img-delivery img-delivery-option'></img></div>
                                <div><p className='title-delivery'>Card</p></div>
                                </div>

                                <div className='subblock-delivery'>
                                <div><label class="checkbox-container-delivery"> 
                                    <input type="checkbox"/>
                                <span class="checkmark-delivery"/>
                                </label></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='top-option-company'>
                        <div className='description-seller-option description-seller-option-delivery'>
                        </div>
                        <div className='information-option information-option-text'>
                        <textarea className='big-textarea-seller' placeholder='Умови способу доставки' required></textarea>
                        </div>
                    </div>
                    
                    <div>
                    <button className='save-seller-button option-seller-save-button save-seller-button-delivery'>Зберегти зміни</button>
                    </div>
                  </div>
                  
            </div>
            
            </div>
        </body>
    )
}