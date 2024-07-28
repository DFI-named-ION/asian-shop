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
}

export default function SellerOptionCompany() {
    
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
                    <button className='left-seller-subbutton left-seller-subbutton-open'>Компанія</button>
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
            <img src={BigOptionSeller} className='img-seller-left'></img>
            <p>Компанія</p>
            <div className='save-seller-button-div'>
            <button className='save-seller-button'>Зберегти зміни</button>
            </div>
            </div>
            <div className='right-seller'>
                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                                Інформація про компанію
                            </h3>
                            <p>
                            Ми віримо, що прозорість веде до довіри, тому відкрито ділимося інформацією про продукцію та компанії що співпрацюють з нами
                            </p>
                        </div>
                        <div className='information-option'>
                            <div>
                                <p className='name-input-seller'>Назва <span>*</span></p>
                                <p className='text-input-seller'>
                                <input type='text' placeholder='Назва' required></input>
                                <div className='long-line-seller'></div>
                                </p>
                            </div>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Електронна адреса сайту виробника</p>
                                <p className='text-input-seller'>
                                <input type='text' placeholder='https://' required></input>
                                <div className='long-line-seller'></div>
                                </p>
                            </div>
                            <div className='top-bottom-box-seller'>
                                <div className='top-bottom-left-box-seller'>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Пошта <span>*</span></p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder='email@gmail.com' required></input>
                                <div className='short-line-seller'></div>
                                </p>
                            </div>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Телефон <span>*</span></p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder='+380 66 000 00 00' required></input>
                                <div className='short-line-seller'></div>
                                </p>
                            </div>
                                </div>
                                <div className='top-bottom-right-box-seller'>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Контактна особа <span>*</span></p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder="Ім'я Прізвище" required></input>
                                <div className='short-line-seller'></div>
                                </p>
                            </div>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Коментар</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <input type='text' placeholder='Наприклад: Бухгалтерія' required></input>
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
                            Про нас
                            </h3>
                            <p>
                            Ми радимо вам детально описати основні напрямки роботи вашої організації, її історію та ключові досягнення. Перед публікацією переконайтесь у відсутності помилок в тексті, оскільки потенційні клієнти будуть звертати увагу на цю інформацію при виборі вашої компанії. 
                            </p>
                        </div>
                        <div className='information-option information-option-text'>
                        <textarea className='big-textarea-seller' placeholder='Поле для написання тексту' required></textarea>
                        </div>
                    </div>

                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                            Додаткова інформація
                            про компанію
                            </h3>
                            <p>
                            Додаткова інформація про
компанію відображається на вашому сайті на сторінці «Про нас» в розділі «Відомості про компанію». 
                            </p>
                        </div>
                        <div className='information-option'>
                            <div>
                                <p className='name-input-seller'>Кількість співробітників</p>
                                <p className='text-input-seller'>
                                <select className='select-seller-option-long' required>
                                    <option disabled selected hidden>Оберіть зі списку</option>
                                    <option>1 - 10</option>
                                    <option>10 - 50</option>
                                    <option>50 - 150</option>
                                </select>
                                <div className='long-line-seller'></div>
                                </p>
                            </div>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Рік заснуванння</p>
                                <p className='text-input-seller'>
                                <input type='text' placeholder='2024' required></input>
                                <div className='long-line-seller'></div>
                                </p>
                            </div>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Основні клієнти</p>
                                <p className='text-input-seller'>
                                <input type='text' placeholder='Основні клієнти' required></input>
                                <div className='long-line-seller'></div>
                                </p>
                            </div>
                            <div className='top-bottom-box-seller'>
                                <div className='top-bottom-left-box-seller'>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Обсяг продажів за рік</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <select className='select-seller-option-long select-seller-option-short' required>
                                    <option disabled selected hidden>Оберіть зі списку</option>
                                    <option>1000 - 5000</option>
                                    <option>5000 - 10 000</option>
                                    <option>10 000 - 50 000</option>
                                </select>
                                <div className='short-line-seller'></div>
                                </p>
                            </div>
                                </div>
                                <div className='top-bottom-right-box-seller'>
                                <div className='block-input-seller'>
                                <p className='name-input-seller'>Об'єми заявок за рік</p>
                                <p className='text-input-seller text-input-short-seller'>
                                <select className='select-seller-option-long select-seller-option-short' required>
                                    <option disabled selected hidden>Оберіть зі списку</option>
                                    <option>1000 - 5000</option>
                                    <option>5000 - 10 000</option>
                                    <option>10 000 - 50 000</option>
                                </select>
                                <div className='short-line-seller'></div>
                                </p>
                            </div>
                                </div>
                            </div>
                            <div className='block-input-seller'>
                                <p className='name-input-seller'>Місцезнаходження виробництва</p>
                                <p className='text-input-seller'>
                                <input type='text' placeholder='Місцезнаходження виробництва' required></input>
                                <div className='long-line-seller'></div>
                                </p>
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