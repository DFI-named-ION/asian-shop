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
    return <AddGoods />;
    return <GreyX />;
    return <ChipsLeys />;
}

export default function SellerGoodsPosition() {

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
                    <button className='left-seller-subbutton left-seller-subbutton-open'>Позиції</button>
                    </div>
                    <div onClick={handlePromotionsClick}>
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
                <div>
            <img src={BigGoodsSeller} className='img-seller-left'></img>
            <p>Перелік позицій</p>
            </div>
            <div className='save-seller-button-div save-seller-button-div-pos'>
            <button className='save-seller-button' onClick={handleAddPositionClick}>Додати позицію</button>
            </div>
            </div>
            
            <div className='right-seller'>
                   <div className='main-position-seller'>
                    <div className='top-block-position-seller'>
                    <div className='position-search-seller-div'>
                    <input className='position-search-seller' type='search' placeholder='Пошук по назві позиції та пошуковим запитам'></input>
                    </div>
                    </div>
                    <div className='bottom-block-position-seller'>
                    <details className='position-details'>
                                    <summary className='summary-details'>Відфільтруйте товари</summary>
                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-top'>Ціна</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Від дешевих до дорогих</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Від дорогих до дешевих</button>
                                        </div>
                                    </details>
                                    </div>
                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary'>Категорія</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Заморожені</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Солодощі</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Закуски</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Страви</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Соуси</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Напої</button>
                                        </div>
                                    </details>
                                    </div>
                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary'>Знижка</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>Зі знижкою</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Без знижки</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Запланована знижка</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Знижка закінчилася</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Знижка скоро закінчиться</button>
                                        </div>
                                    </details>
                                    </div>
                                    <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary'>Наявність</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>У наявності</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Немає в наявності</button>
                                        </div>
                                    </details>
                                    </div>
                                    <div>
                                        <button className='position-button-filter-seller-del'>Видалені позиції</button>
                                        </div>
                                        <div>
                                    <details className='position-subdetails position-subdetails-top'>
                                    <summary className='position-subsummary position-subsummary-bottom'>Оцінка товару</summary>
                                    <div>
                                        <button className='position-button-filter-seller'>З оцінками</button>
                                        </div>
                                        <div>
                                        <button className='position-button-filter-seller'>Без оцінок</button>
                                        </div>
                                    </details>
                                    </div>
                                </details>

                                <div className='filter-position-seller-block'>
                        <div className='filter-position-seller'>
                        <p>Від дорогих до дешевих</p>
                        <img src={GreyX} className='img-position-filter'></img>
                    </div>
                    <div className='filter-position-seller'>
                        <p>Солодощі</p>
                        <img src={GreyX} className='img-position-filter'></img>
                    </div>
                    </div>

                    <div className='goods-position-seller-block'>
                        <div className='good-position-seller'>
                        <img src={ChipsLeys} className='img-position-good'></img>
                        <h5>Картопляні чіпси Lay's: Пряні раки</h5>
                        <p className='text-position-good'>23 шт. в наявності</p>
                        <p className='price-position-good'><span className='span-small-pos'>$</span>3.49 <span className='span-slash-pos'>/</span>80<span className='span-small-pos'>г.</span></p>
                        </div>

                        <div className='good-position-seller'>
                        <img src={ChipsLeys} className='img-position-good'></img>
                        <h5>Картопляні чіпси Lay's: Пряні раки</h5>
                        <p className='text-position-good'>23 шт. в наявності</p>
                        <p className='price-position-good'><span className='span-small-pos'>$</span>3.49 <span className='span-slash-pos'>/</span>80<span className='span-small-pos'>г.</span></p>
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