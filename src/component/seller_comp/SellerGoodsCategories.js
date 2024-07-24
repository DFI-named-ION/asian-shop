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
}
export default function SellerOptionCompany() {
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
                    <div>
                    <button className='left-seller-button'><img src={MainSeller} className='img-seller-left'></img>Головна</button>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={OrderSeller} className='img-seller-left'></img>Замовлення</button>
                    </div>
                    <div>
                    <details className='seller-details'>
                    <summary><img src={GoodsSeller} className='img-seller-left'></img>Товари і послуги</summary>
                    <div>
                    <button className='left-seller-subbutton left-seller-subbutton-open'>Категорії</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Позиції</button>
                    </div>
                    <div>
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
                    <button className='left-seller-button'><img src={ClientSeller} className='img-seller-left'></img>Клієнти</button>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={AnaliticSeller} className='img-seller-left'></img>Аналітика</button>
                    </div>
                    <div>
                    <button className='left-seller-button'><img src={WalletSeller} className='img-seller-left'></img>Гаманець компанії</button>
                    </div>
                    <div>
                    <details className='seller-details'>
                    <summary><img src={OptionSeller} className='img-seller-left'></img>Налаштування</summary>
                    <div>
                    <button className='left-seller-subbutton'>Компанія</button>
                    </div>
                    <div>
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
            <img src={BigGoodsSeller} className='img-seller-left'></img>
            <p>Управління категоріями товарів</p>
            </div>
            <div className='right-seller'>
                    <div className='top-option-company'>
                        <div>
                        <div className='categories-title-seller'>
                            <h3>Категорії</h3>
                        </div>
                        <div className='list-categories-seller'>
                        <details className='seller-categories-details'>
                    <summary>Заморожені</summary>
                    <div>
                    <button className='list-buttons-categories-seller'>Морепродукти</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Випічка</button>
                    </div>
                    </details>

                    <details className='seller-categories-details'>
                    <summary>Солодощі</summary>
                    <div>
                    <button className='list-buttons-categories-seller'>Шоколад</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Моті</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Печиво</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Торти</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Мармеладки</button>
                    </div>
                    </details>

                    <details className='seller-categories-details'>
                    <summary>Закуски</summary>
                    <div>
                    <button className='list-buttons-categories-seller'>Чипси</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Крекери</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Горіхи</button>
                    </div>
                    </details>

                    <details className='seller-categories-details'>
                    <summary>Страви</summary>
                    <div>
                    <button className='list-buttons-categories-seller'>Гострі</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Локшина</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Каррі</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Рис</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Токпоккі</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Місо</button>
                    </div>
                    </details>

                    <details className='seller-categories-details'>
                    <summary>Соуси</summary>
                    <div>
                    <button className='list-buttons-categories-seller'>Гострі</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Соєвий</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Оцти</button>
                    </div>
                    </details>

                    <details className='seller-categories-details'>
                    <summary>Напої</summary>
                    <div>
                    <button className='list-buttons-categories-seller'>Газованка</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Сік</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Фітнес</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Вода</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Чай</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Кава</button>
                    </div>
                    <div>
                    <button className='list-buttons-categories-seller'>Молоко</button>
                    </div>
                    </details>
                    
                        </div>
                        </div>
                        <div className='information-categories'>
                            {/* Виберіть категорію */}
                            <p className='select-category-seller'>Виберіть категорію</p>

                            {/* Виберіть підкатегорію */}
                            {/* <p className='select-subcategory-seller'>Виберіть підкатегорію</p> */}

                            {/* Додати товар */}
                            {/* <a><img src={AddGoods} className='img-goods-categories'></img>
                            <p className='add-goods-categories-seller'>Додати товар</p></a> */}
                        </div>
                    </div>
                  </div>
            </div>
            </div>
        </body>
    )
}