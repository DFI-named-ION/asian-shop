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
    return <HeaderSeller />;
}

export default function SellerOptionCompany() {
    
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleNovaPostClick = () => { navigate("/seller/shipping/novapost") };

    const handleRozetkaClick = () => { navigate("/seller/shipping/rozetka") };
    
    const handleUkrPostClick = () => { navigate("/seller/shipping/ukrpost") };

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
            <p>Способи доставки</p>
            </div>
            <div className='save-seller-button-div'>
            <button className='save-seller-button'>Зберегти зміни</button>
            </div>
            </div>
            <div className='right-seller'>
                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                            Способи доставки
                            </h3>
                            <p>
                            Підключіть способи доставки, які будуть доступні в каталозі та на сайті. Відображаються покупцю у кошику під час замовлення, на сторінці товару в каталозі та на сайті компанії.
                            </p>
                        </div>
                        <div className='information-option information-option-delivery'>
                            <div className='block-delivery'>
                                <div className='subblock-delivery'>
                                <div><img src={NovaPost} className='img-delivery'></img></div>
                                <div><p className='title-delivery'>Нова пошта</p></div>
                                </div>

                                <div className='subblock-delivery'>
                                <div onClick={handleNovaPostClick}><img src={BigPen} className='img-delivery-pen'></img></div>
                                <div><label class="checkbox-container-delivery"> 
                                    <input type="checkbox"/>
                                <span class="checkmark-delivery"/>
                                </label></div>
                                </div>
                            </div>
                            <div className='long-line-seller long-line-seller-delivery'></div>
                            
                            <div className='block-delivery'>
                                <div className='subblock-delivery'>
                                <div><img src={Rozetka} className='img-delivery'></img></div>
                                <div><p className='title-delivery'>Нова пошта</p></div>
                                </div>

                                <div className='subblock-delivery'>
                                <div onClick={handleRozetkaClick}><img src={BigPen} className='img-delivery-pen'></img></div>
                                <div><label class="checkbox-container-delivery"> 
                                    <input type="checkbox"/>
                                <span class="checkmark-delivery"/>
                                </label></div>
                                </div>
                            </div>
                            <div className='long-line-seller long-line-seller-delivery'></div>

                            <div className='block-delivery'>
                                <div className='subblock-delivery'>
                                <div><img src={UkrPost} className='img-delivery'></img></div>
                                <div><p className='title-delivery'>Нова пошта</p></div>
                                </div>

                                <div className='subblock-delivery'>
                                <div onClick={handleUkrPostClick}><img src={BigPen} className='img-delivery-pen'></img></div>
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