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
import Star from '../seller_comp/img_seller/star-empty.svg';
import StarSmall from '../seller_comp/img_seller/small-star.svg';
import BigPen from '../seller_comp/img_seller/big-pen-white.svg';


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
    return <Star />;
    return <StarSmall />;
    return <BigPen />;
}

export default function SellerGoodsPosition() {

    const [modalIsOpenProfile, setModalIsOpenProfile] = useState(false);
    const [modalIsOpenProfilePassword, setModalIsOpenProfilePassword] = useState(false);
  
    const openModalProfilePassword = () => {
      setModalIsOpenProfilePassword(true);
    };
  
    const closeModalProfilePassword = () => {
      setModalIsOpenProfilePassword(false);
    };

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

                <HeaderSeller />

            </div>
            <div className='cabinet-seller-div'>
            <div className='head-seller'>
                <div>
            <img src={BigPen} className='img-seller-left'></img>
            <p>Відгуки</p>
            </div>
            <div className='save-seller-button-div save-seller-button-div-pos'>
            {/* <button className='save-seller-button' onClick={openModalProfilePassword}>Додати клієнта</button> */}
            <Modal isOpen={modalIsOpenProfilePassword} onRequestClose={closeModalProfilePassword} className='background-modal-div'>
                      <div className='modal-reviews-div'> 
                        <button onClick={closeModalProfilePassword} className='close-modal-button close-modal-profile-button'/>
                        <div className='top-modal-review'>
                            <div>
                        <h2 className='title-profile-modal'>
                          Прізвище Ім'я
                        </h2>
                        </div>
                        <div className='stars-reviews'>
                            <div><img src={Star} className='img-star-reviews'></img></div>
                            <div><img src={Star} className='img-star-reviews'></img></div>
                            <div><img src={Star} className='img-star-reviews'></img></div>
                            <div><img src={Star} className='img-star-reviews'></img></div>
                            <div><img src={Star} className='img-star-reviews'></img></div>
                        </div>
                        </div>
                        <div className='text-reviews-seller'>
                            <p>Код товару:123456</p>
                        </div>
                        <div className='text-reviews-seller'>
                            <p>Текст відгуку з дуже конструктивною критикою. Гірка правда просочується в цих словах</p>
                        </div>

                        <div className='img-reviews-seller'>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>

                        <div className='button-profile-div button-profile-modal-div'>
                          <input className='save-profile-button' type='button' value='Зберегти' />
                          <input className='cancel-profile-button' type='button' value='Скасувати'/>
                        </div>
                      </div>
                    </Modal>
            </div>
            </div>
            
            <div className='right-seller'>
                   <div className='main-reviews-seller'>
                    <div className='block-reviews-seller'>
                        <div className='subblock-reviews-seller'>
                            <div className='name-block-reviews'>
                                <p>Призвіще Ім’я</p>
                            </div>
                            <div className='stars-block-reviews'>
                            <div><img src={StarSmall} className='img-star-reviews'></img></div>
                            <div><img src={StarSmall} className='img-star-reviews'></img></div>
                            <div><img src={StarSmall} className='img-star-reviews'></img></div>
                            <div><img src={StarSmall} className='img-star-reviews'></img></div>
                            <div><img src={StarSmall} className='img-star-reviews'></img></div>
                            </div>
                        </div>

                        <div className='subblock-reviews-seller'>
                            <div className='text-block-reviews'>
                                <p>Код товару: 123456</p>
                            </div>
                            <div className='text-block-reviews'>
                                <p>14:36</p>
                            </div>
                        </div>
                    </div>


                    <div className='block-reviews-seller'>
                        <div className='subblock-reviews-seller'>
                            <div className='name-block-reviews'>
                                <p>Призвіще Ім’я</p>
                            </div>
                            <div className='stars-block-reviews'>
                            <div><img src={StarSmall} className='img-star-reviews'></img></div>
                            <div><img src={StarSmall} className='img-star-reviews'></img></div>
                            <div><img src={StarSmall} className='img-star-reviews'></img></div>
                            <div><img src={StarSmall} className='img-star-reviews'></img></div>
                            <div><img src={StarSmall} className='img-star-reviews'></img></div>
                            </div>
                        </div>

                        <div className='subblock-reviews-seller'>
                            <div className='text-block-reviews'>
                                <p>Код товару: 123456</p>
                            </div>
                            <div className='text-block-reviews'>
                                <p>14:36</p>
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