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
import LeftArrow from '../seller_comp/img_seller/arrow-left.svg';
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
    return <LeftArrow />;
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
                    <button className='left-seller-subbutton'>Менеджери</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton left-seller-subbutton-open'>Способи доставки</button>
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
            <p>Способи доставки</p>
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
                                <div><img src={Rozetka} className='img-delivery img-delivery-option'></img></div>
                                <div><p className='title-delivery'>Магазини Розетка</p></div>
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
                    
                    <div className='top-option-company'>
                        <div className='description-seller-option description-seller-option-delivery'>
                        </div>
                        <div className='information-option'>
                            <div className='block-delivery'>
                            <div>
                            <p className='pay-delivery'>Вартість доставки</p>
                            <div className='block-radio-delivery'>
                                    <div className='subblock-radio-delivery'>
                                    <div>
                                    <input className='radio-goods-seller' type="radio" value="2"></input>
                                    </div>
                                    <div>
                                    <p className='radio-goods-seller-text'>Платна</p>
                                    </div>
                                    </div>

                                    <div className='subblock-radio-delivery'>
                                    <div>
                                    <input className='radio-goods-seller' type="radio" value="2"></input>
                                    </div>
                                    <div>
                                    <p className='radio-goods-seller-text'>Безплатна</p>
                                    </div>
                                    </div>
                            </div>
                            <div className='radio-goods-seller-div'>
                                <input className='radio-goods-seller' type="checkbox"></input>
                                <p className='radio-goods-seller-text'>Безплатна при замовленні від</p>
                                </div>
                                <div className='radio-flex-div-seller'>
                                <div class="radio-select-seller-div" id='block-4'>
                                <input className='radio-text-seller radio-text-seller-short' type='text' placeholder='10'></input>
                                 </div>
                                 <div>
                                 <p className='dollar-seller'>€</p>
                                 </div>
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
            
            </div>
        </body>
    )
}