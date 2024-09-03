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
import OpenSchedule from '../seller_comp/img_seller/open-schedule.svg';
import CloseSchedule from '../seller_comp/img_seller/close-schedule.svg';
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
    return <OpenSchedule />;
    return <CloseSchedule />;
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
            <p>Графік роботи</p>
            </div>
            <div className='save-seller-button-div'>
            <button className='save-seller-button'>Зберегти зміни</button>
            </div>
            </div>
            <div className='right-seller'>
                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                            <h3>
                            Ваш графік
                            </h3>
                            <p>
                            Інформація про робочі години вашої компанії дозволяє покупцям спланувати доставку продукції до себе додому.
                            </p>
                        </div>
                        <div className='information-option'>
                           
                            <div className='title-top-schedule'>
                                <div><h3>Дні</h3></div>
                                <div><h3>Робочий час</h3></div>
                                <div></div>
                            </div>

                            <div className='schedule-block schedule-block-top'>
                                <div><p className='day-schedule'>Понеділок</p></div>
                                <div className='schedule-option'>
                                    <div><p>з</p></div>
                                    <div><input type='text' value='10:00'></input></div>
                                    <div><p>до</p></div>
                                    <div><input type='text' value='18:00'></input></div>
                                </div>
                                <div><img src={OpenSchedule} className='img-schedule'/></div>
                            </div>

                            <div className='schedule-block'>
                                <div><p className='day-schedule'>Вівторок</p></div>
                                <div className='schedule-option'>
                                    <div><p>з</p></div>
                                    <div><input type='text' value='10:00'></input></div>
                                    <div><p>до</p></div>
                                    <div><input type='text' value='18:00'></input></div>
                                </div>
                                <div><img src={OpenSchedule} className='img-schedule'/></div>
                            </div>

                            <div className='schedule-block'>
                                <div><p className='day-schedule'>Середа</p></div>
                                <div className='schedule-option'>
                                    <div><p>з</p></div>
                                    <div><input type='text' value='10:00'></input></div>
                                    <div><p>до</p></div>
                                    <div><input type='text' value='18:00'></input></div>
                                </div>
                                <div><img src={OpenSchedule} className='img-schedule'/></div>
                            </div>

                            <div className='schedule-block'>
                                <div><p className='day-schedule'>Четвер</p></div>
                                <div className='schedule-option'>
                                    <div><p>з</p></div>
                                    <div><input type='text' value='10:00'></input></div>
                                    <div><p>до</p></div>
                                    <div><input type='text' value='18:00'></input></div>
                                </div>
                                <div><img src={OpenSchedule} className='img-schedule'/></div>
                            </div>

                            <div className='schedule-block'>
                                <div><p className='day-schedule'>П'ятниця</p></div>
                                <div className='schedule-option'>
                                    <div><p>з</p></div>
                                    <div><input type='text' value='10:00'></input></div>
                                    <div><p>до</p></div>
                                    <div><input type='text' value='18:00'></input></div>
                                </div>
                                <div><img src={OpenSchedule} className='img-schedule'/></div>
                            </div>

                            <div className='schedule-block'>
                                <div><p className='day-schedule'>Субота</p></div>
                                <div className='schedule-option'>
                                    <div><p className='day-off'>Вихідний</p></div>
                                </div>
                                <div><img src={CloseSchedule} className='img-schedule'/></div>
                            </div>

                            <div className='schedule-block'>
                                <div><p className='day-schedule'>Неділя</p></div>
                                <div className='schedule-option'>
                                    <div><p className='day-off'>Вихідний</p></div>
                                </div>
                                <div><img src={CloseSchedule} className='img-schedule'/></div>
                            </div>
                          
                        </div>
                    </div>

                    <div className='top-option-company'>
                        <div className='description-seller-option'>
                        <h3>
                            Вихідні дні
                            </h3>
                            <p>
                            У вихідні та святкові дні ви можете налаштувати і увімкнути повідомлення про затримку в обробці замовлень і повідомлень або повністю вимкнути їх прийом.
                            <br/><br/>
                            Зверніть увагу! Ми не налаштовуємо вихідний на офіційні святкові дні автоматично.
                            </p>
                        </div>
                        <div className='information-option'>
                            <h5 className='title-bottom-schedule'>Повідомлення у вихідні дні та неробочий час компанії</h5>
                            <div className='bottom-schedule'>
                                <div><p>У разі оформлення замовлення або відправки повідомлення у вихідні дні та неробочий час компанії, покупець буде повідомлений, що його замовлення або повідомлення будуть оброблені пізніше.</p></div>
                                <div><label class="checkbox-container-delivery"> 
                                    <input type="checkbox"/>
                                <span class="checkmark-delivery"/>
                                </label></div>
                            </div>

                            <h5 className='title-bottom-schedule'>Повідомлення в заданий період</h5>
                            <div className='bottom-schedule'>
                                <div><p>У разі оформлення замовлення або відправки повідомлення у заданий період, покупця буде повідомлено, що його замовлення або повідомлення будуть оброблені пізніше. Для ввімкнення необхідно вказати термін дії.</p></div>
                                <div><label class="checkbox-container-delivery"> 
                                    <input type="checkbox"/>
                                <span class="checkmark-delivery"/>
                                </label></div>
                            </div>

                            <h5 className='title-bottom-schedule'>Термін дії</h5>
                                <div className='time-promotion time-day-off'>
                                <div>
                               <p className='subtitle-promotion-seller'>Початок</p>
                               <input className='input-date-promotion' type='date' placeholder='дд / мм / рррр' required></input>
                               </div>
                               <div className='end-time-promotion'>
                               <p className='subtitle-promotion-seller'>Кінець</p>
                               <input className='input-date-promotion' type='date' placeholder='дд / мм / рррр' required></input>
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