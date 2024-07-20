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
import BigGoodsSeller from '../seller_comp/img_seller/big-goods-seller.svg';


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
    return <BigGoodsSeller />;
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
                    {/* <div className='wolf-seller-div'>
                    <img src={WolfSeller} className='wolf-seller'></img>
                    </div> */}
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
                    <button className='left-seller-subbutton'>Категорії</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton'>Позиції</button>
                    </div>
                    <div>
                    <button className='left-seller-subbutton left-seller-subbutton-open'>Акції та промокоди</button>
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
            <div className='title-head-seller-width'>
            <p>Акції і промокоди</p>
            </div>
            <div className='save-seller-button-div save-seller-button-div-width'>
            <button className='save-seller-button'>Зберегти зміни</button>
            </div>
            </div>
            <div className='right-seller'>
                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                        <h3>
                        Основна інформація про продукт
                            </h3>
                            <p>
                            Промокод - це додатковий спосіб просування ваших товарів, і ви можете самі вирішувати, які обмеження встановлювати, як і кому надавати знижки за промокодом
                            </p>
                        </div>
                        <div className='information-option'>
                            <div className='top-bottom-box-seller'>
                                
                                <div className='top-bottom-left-box-seller'>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Тип акції <span>*</span></p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder='Наприклад: промокод' required></input>
                                <div className='short-line-seller'></div>
                                </p>
                                
                            </div>
                            <div className='block-input-seller block-input-small-seller'>
                            <div>
                                <p className='name-input-seller'>Знижка <span>*</span></p>
                                <p className='text-input-seller text-input-small-seller'>
                                <input type='text' placeholder='Наприклад: 1' required></input>
                                <div className='small-line-seller'></div>
                                </p>
                                </div>

                                <div className='block-input-small-seller-margin'>
                                <p className='name-input-seller'>За промокодом <span>*</span></p>
                                <p className='text-input-seller text-input-small-seller'>
                                <input type='text' placeholder='Наприклад: Пікнік2024' required></input>
                                <div className='small-line-seller'></div>
                                </p>
                                </div>
                            </div>
                                </div>
                                <div className='top-bottom-right-box-seller'>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Назва акції <span>*</span></p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder="Наприклад: промокод" required></input>
                                <div className='short-line-seller'></div>
                                </p>
                            </div>
                            <div>
                            <button className='generation-seller-button'>Згенерувати</button>
                            </div>
                            </div>
                            </div>
                            <div>
                                <h4 className='title-radio-checkbox-promotion-seller'>Акція діє <span>*</span></h4>
                                <div className='radio-goods-seller-div'>
                                <input className='radio-goods-seller' type="radio" value="style"></input>
                                <p className='radio-goods-seller-text'>На всі товари</p>
                                </div>
                                <div className='radio-goods-seller-div'>
                                <input className='radio-goods-seller' type="radio"></input>
                                <p className='radio-goods-seller-text'>На обраний тип позиції</p>
                                </div>
                                <div className='radio-goods-seller-div'>
                                <input className='radio-goods-seller' type="radio"></input>
                                <p className='radio-goods-seller-text'>На обрану позицію</p>
                                </div>
                            </div>
                            <div>
                                <h4 className='title-radio-checkbox-promotion-seller'>Обмеження по використанню</h4>
                                <div className='radio-goods-seller-div'>
                                <input className='radio-goods-seller' type="checkbox" value="style"></input>
                                <p className='radio-goods-seller-text'>Обмеження за загальною кількістю використань промокоду</p>
                                </div>
                                <div className='radio-goods-seller-div'>
                                <input className='radio-goods-seller' type="checkbox"></input>
                                <p className='radio-goods-seller-text'>Знижка діє при мінімальній сумі замовлення</p>
                                </div>
                                <div className='radio-goods-seller-div'>
                                <input className='radio-goods-seller' type="checkbox"></input>
                                <p className='radio-goods-seller-text'>Не застосовувати промокод для товарів з діючою знижкою</p>
                                </div>
                            </div>

                            <div>
                                <h4 className='title-radio-checkbox-promotion-seller'>Термін дії акції</h4>
                               <p className='subtitle-promotion-seller'>Початок акції</p>
                               <input className='input-date-promotion' type='date' placeholder='дд / мм / рррр' required></input>
                               <div className='radio-goods-seller-div'>
                                <input className='radio-goods-seller' type="checkbox"></input>
                                <p className='radio-goods-seller-text'>Встановити дату закінчення</p>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div>
                    <button className='save-seller-button option-seller-save-button'>Зберегти зміни</button>
                    </div>
                  </div>
            </div>
            </div>
        </body>
    )
}