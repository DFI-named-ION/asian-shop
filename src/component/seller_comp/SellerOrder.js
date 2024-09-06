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
    return <SakuraSeller />;
    return <BigGoodsSeller />;
    return <BigClientSeller />;
    return <AddGoods />;
    return <GreyX />;
    return <ChipsLeys />;
    return <HeaderSeller />;
}

export default function SellerGoodsPosition() {

    const navigate = useNavigate();

    const handleNewOrderClick = () => { navigate("/seller/orders/new") };

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
            <img src={BigClientSeller} className='img-seller-left'></img>
            <p>Замовлення</p>
            </div>
            <div className='save-seller-button-div save-seller-button-div-pos'>
            <button className='save-seller-button' onClick={handleNewOrderClick}>Додати замовлення</button>
            </div>
            </div>
            
            <div className='right-seller'>
                   <div className='main-position-seller'>
                    <div className='top-block-position-seller'>
                    <div className='position-search-seller-div'>
                    <input className='position-search-seller' type='search' placeholder='Пошук за номером замовлення, ПІБ покупця'></input>
                    </div>
                    </div>
                    <div className='bottom-block-position-seller'>
                    <details className='position-details'>
                                    <summary className='summary-details'>Відфільтруйте замовлення</summary>
                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-top'>Статус</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Нове</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Прийнято</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Виконано</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Скасовано</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Оплачено</button>
                                        </div>
                                    </details>
                                    </div>

                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-top'>Спосіб доставки</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Не вибрано</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Нова Пошта</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Розетка</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>УкрПошта</button>
                                        </div>
                                    </details>
                                    </div>

                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-top'>Статус доставки</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Заплановано</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>В дорозі</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>У відділенні</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Платне збереження</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Отримано</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Одержувач відмовився</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Повернення (в дорозі)</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Повернення (у відділенні)</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Повернуто</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Видалено</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Припинено зберігання</button>
                                        </div>
                                    </details>
                                    </div>

                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-top'>Спосіб оплати</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Mastercard</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Visa</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>PayPal</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>За реквізитами</button>
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
                            <div className='subblock-promotion'><p>Замовлення №коду</p></div>
                            <div className='subblock-promotion'><p>Відгук</p></div>
                            <div className='subblock-promotion'><p>Повідомлення</p></div>
                            <div className='subblock-promotion'><p>Прізвище Ім'я</p></div>
                        </div>
                        <div className='block-promotion'>
                        <div className='subblock-promotion'><p>Замовлення №коду</p></div>
                            <div className='subblock-promotion'><p>Відгук</p></div>
                            <div className='subblock-promotion'><p>Повідомлення</p></div>
                            <div className='subblock-promotion'><p>Прізвище Ім'я</p></div>
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