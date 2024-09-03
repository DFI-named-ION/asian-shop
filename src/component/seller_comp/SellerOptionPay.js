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
import NovaPost from '../seller_comp/img_seller/nova-post.svg';
import UkrPost from '../seller_comp/img_seller/urk-post.svg';
import Rozetka from '../seller_comp/img_seller/rozetka.svg';
import BigPen from '../seller_comp/img_seller/big-pen.svg';
import Mastercard from '../seller_comp/img_seller/mastercard-seller.svg';
import Visa from '../seller_comp/img_seller/visa-seller.svg';
import PayPal from '../seller_comp/img_seller/paypal-seller.svg';
import Card from '../seller_comp/img_seller/card-seller.svg';
import { useAuth } from '../providers/AuthProvider';
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
    return <Mastercard />;
    return <Visa />;
    return <PayPal />;
    return <Card />;
    return <HeaderSeller />;
}

export default function SellerOptionCompany() {
    
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
                        <div className='description-seller-option'>
                            <h3>
                            Способи оплати
                            </h3>
                            <p>
                            Підключіть способи оплати, які будуть доступні в каталозі та на сайті.
                            </p>
                        </div>
                        <div className='information-option information-option-delivery'>
                            <div className='block-delivery'>
                                <div className='subblock-delivery'>
                                <div><img src={Mastercard} className='img-delivery'></img></div>
                                <div><p className='title-delivery'>Mastercard</p></div>
                                </div>

                                <div className='subblock-delivery'>
                                <div><img src={BigPen} className='img-delivery-pen'></img></div>
                                <div><label class="checkbox-container-delivery"> 
                                    <input type="checkbox"/>
                                <span class="checkmark-delivery"/>
                                </label></div>
                                </div>
                            </div>
                            <div className='long-line-seller long-line-seller-delivery'></div>
                            
                            <div className='block-delivery'>
                                <div className='subblock-delivery'>
                                <div><img src={Visa} className='img-delivery'></img></div>
                                <div><p className='title-delivery'>Visa</p></div>
                                </div>

                                <div className='subblock-delivery'>
                                <div><img src={BigPen} className='img-delivery-pen'></img></div>
                                <div><label class="checkbox-container-delivery"> 
                                    <input type="checkbox"/>
                                <span class="checkmark-delivery"/>
                                </label></div>
                                </div>
                            </div>
                            <div className='long-line-seller long-line-seller-delivery'></div>

                            <div className='block-delivery'>
                                <div className='subblock-delivery'>
                                <div><img src={PayPal} className='img-delivery'></img></div>
                                <div><p className='title-delivery'>PayPal</p></div>
                                </div>

                                <div className='subblock-delivery'>
                                <div><img src={BigPen} className='img-delivery-pen'></img></div>
                                <div><label class="checkbox-container-delivery"> 
                                    <input type="checkbox"/>
                                <span class="checkmark-delivery"/>
                                </label></div>
                                </div>   
                            </div>

                            <div className='long-line-seller long-line-seller-delivery'></div>

<div className='block-delivery'>
    <div className='subblock-delivery'>
    <div><img src={Card} className='img-delivery'></img></div>
    <div><p className='title-delivery'>За реквізитами</p></div>
    </div>

    <div className='subblock-delivery'>
    <div><img src={BigPen} className='img-delivery-pen'></img></div>
    <div><label class="checkbox-container-delivery"> 
        <input type="checkbox"/>
    <span class="checkmark-delivery"/>
    </label></div>
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