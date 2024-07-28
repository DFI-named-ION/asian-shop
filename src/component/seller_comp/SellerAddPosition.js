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
import AddImage from '../seller_comp/img_seller/add-image-position-seller.svg';


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
    return <AddImage />;
}

export default function SellerAddPosition() {

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
            <img src={BigGoodsSeller} className='img-seller-left'></img>
            <p>Нова позиція</p>
            <div className='save-seller-button-div save-seller-button-div-width'>
            <button className='save-seller-button'>Додати товар</button>
            </div>
            </div>
            <div className='right-seller'>
                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                            Основна інформація про продукт
                            </h3>
                            <p>
                            Оберіть назву продукту, встановіть ціну, визначте видимість та категорію. Перед публікацією перевірте текст на помилки, адже це важливо для клієнтів.
                            </p>
                        </div>
                        <div className='information-option'>
                            <div className='top-bottom-box-seller'>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Назва позиції <span>*</span></p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder='Назва позиції' required></input>
                                <div className='short-line-seller'></div>
                                </p>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Категорія</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <select className='select-seller-option-long select-seller-option-short' required>
                                    <option disabled selected hidden>Виберіть зі списку</option>
                                    <option>Заморожені</option>
                                    <option>Солодощі</option>
                                    <option>Закуски</option>
                                    <option>Страви</option>
                                    <option>Соуси</option>
                                    <option>Напої</option>
                                </select>
                                <div className='short-line-seller'></div>
                                </p>
                                </div>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Видимість</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <select className='select-seller-option-long select-seller-option-short' required>
                                    <option disabled selected hidden>Опубліковано</option>
                                    <option>Опубліковано</option>
                                    <option>Не опубліковано</option>
                                </select>
                                <div className='short-line-seller'></div>
                                </p>
                                </div>
                                </div>

                                <div className='right-add-position'></div>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Ціна <span>*</span></p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder="200₴" required></input>
                                <div className='short-line-seller'></div>
                                </p>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Підкатегорія</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <select className='select-seller-option-long select-seller-option-short' required>
                                    <option disabled selected hidden>Виберіть зі списку</option>
                                    <option>Заморожені</option>
                                    <option>Солодощі</option>
                                    <option>Закуски</option>
                                    <option>Страви</option>
                                    <option>Соуси</option>
                                    <option>Напої</option>
                                </select>
                                <div className='short-line-seller'></div>
                                </p>
                                </div>
                                <div className='right-add-position'></div>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Код/Артикул</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder="#134141" required></input>
                                <div className='short-line-seller'></div>
                                </p>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                            Опис позиції
                            </h3>
                            <p>
                            Ми радимо детально описати основні характеристики та переваги вашого продукту. Перед публікацією переконайтесь у відсутності помилок в тексті, оскільки потенційні клієнти будуть звертати увагу на кожну деталь.
                            </p>
                        </div>
                        <div className='information-option information-option-text'>
                        <textarea className='big-textarea-seller' placeholder='Поле для написання тексту' required></textarea>
                        </div>
                    </div>

                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                            Додайте фото товару
                            </h3>
                            <p>
                            Вибирайте фотографії, які точно відображають реальний вигляд товару, щоб уникнути будь-яких непорозумінь у клієнтів.
                            </p>
                        </div>
                        <div className='information-option'>
                            <a><img src={AddImage} className='img-add-image-position'></img>
                            <p className='download-image-position'>Завантажте файл або додайте скопійоване зображення<br />
                            Формати: JPG, GIF, PNG, WEBP.<br />
                            Максимальний розмір: 10 MB.
                            </p>
                            </a>
                        </div>
                    </div>

                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                            Додайте фото товару
                            </h3>
                            <p>
                            Вибирайте фотографії, які точно відображають реальний вигляд товару, щоб уникнути будь-яких непорозумінь у клієнтів.
                            </p>
                        </div>
                        <div className='information-option checkbox-position-seller-div'>
                            <div className='left-checkbox-position-seller'>
                            <div className='radio-goods-seller-div chekbox-position-margin'>
                                <input className='radio-goods-seller' type="checkbox" value="style"></input>
                                <p className='radio-goods-seller-text'>Без глютену</p>
                                </div>

                                <div className='radio-goods-seller-div chekbox-position-margin'>
                                <input className='radio-goods-seller' type="checkbox" value="style"></input>
                                <p className='radio-goods-seller-text'>Органічне</p>
                                </div>

                                <div className='radio-goods-seller-div chekbox-position-margin'>
                                <input className='radio-goods-seller' type="checkbox" value="style"></input>
                                <p className='radio-goods-seller-text'>Веганське</p>
                                </div>

                                <div className='radio-goods-seller-div chekbox-position-margin'>
                                <input className='radio-goods-seller' type="checkbox" value="style"></input>
                                <p className='radio-goods-seller-text'>Без ГМО</p>
                                </div>
                            </div>
                            <div className='right-checkbox-position-seller'>
                            <div className='radio-goods-seller-div chekbox-position-margin'>
                                <input className='radio-goods-seller' type="checkbox" value="style"></input>
                                <p className='radio-goods-seller-text'>Без лактози</p>
                                </div>

                                <div className='radio-goods-seller-div chekbox-position-margin'>
                                <input className='radio-goods-seller' type="checkbox" value="style"></input>
                                <p className='radio-goods-seller-text'>Без цукру</p>
                                </div>

                                <div className='radio-goods-seller-div chekbox-position-margin'>
                                <input className='radio-goods-seller' type="checkbox" value="style"></input>
                                <p className='radio-goods-seller-text'>Низькокалорійне</p>
                                </div>

                                <div className='radio-goods-seller-div chekbox-position-margin'>
                                <input className='radio-goods-seller' type="checkbox" value="style"></input>
                                <p className='radio-goods-seller-text'>Без барвників</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                            Габаритні розміри
                            </h3>
                            <p>
                            Спростіть розрахунок вартості доставки для вас та покупця
                            </p>
                        </div>
                        <div className='information-option'>
                            <div className='top-bottom-box-seller'>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Висота</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder='10 см.' required></input>
                                <div className='short-line-seller'></div>
                                </p>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Ширина</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder='5 см.' required></input>
                                <div className='short-line-seller'></div>
                                </p>
                                </div>
                                </div>

                                <div className='right-add-position'></div>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Довжина</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder="10 см." required></input>
                                <div className='short-line-seller'></div>
                                </p>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Вага</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder='500 г.' required></input>
                                <div className='short-line-seller'></div>
                                </p>
                                </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div>
                    <button className='save-seller-button option-seller-save-button'>Додати товар</button>
                    </div>
                  </div>
            </div>
            </div>
        </body>
    )
}