import React, {useContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Collapse} from 'react-collapse';
import Cookies from 'js-cookie';

import Logo from '../images/logo/SakuraTails.svg';
import Basket from '../images/icons/basket.svg';
import Profile from '../images/icons/profile.svg';
import HelloEmoji from '../images/icons/hello-emoji.svg';
import AddPlus from '../images/icons/add-plus.svg';
import Exit from '../images/icons/exit.svg';
import History from '../images/icons/history.svg';
import Transfer from '../images/icons/transfer.svg';
import Like from '../images/icons/like.svg';
import Pen from '../images/icons/pen.svg';
import Wallet from '../images/icons/wallet.svg';
import Procent from '../images/icons/procent.svg';
import Case from '../images/icons/case.svg';
import Dump from '../images/icons/dump.svg';

import { useAuth } from './providers/AuthProvider';
import { useErrors } from './providers/ErrorProvider';

export default function Header (){
    const { user, logout } = useAuth();
    const { handleMethod } = useErrors();
    const navigate = useNavigate();
    const [isProfileModalOpen, setIsProfileModalOpen] = useState("");

    const handleHeadClick = (e) => {
        e.preventDefault();
        if (!user) {
            navigate('/authorization');
        } else {
            setIsProfileModalOpen(!isProfileModalOpen);
        }
    };

    const handleFavoritesClick = () => { navigate("/favorites") };
    
    const handleOrdersHistoryClick = () => { navigate("/orders-history") };

    const handleReviewsClick = () => { navigate("/reviews-my") };
    
    const handleTrackingClick = () => { navigate("/tracking") };
    
    const handleSellerProfileClick = () => { navigate("/seller") };

    const handleSettingsClick = () => { navigate("/profile-settings") };
    
    const handleBonusesClick = () => { navigate("/bonuses") };

    const handleWalletClick = () => { navigate("/wallet") };

    const handlePaymentClick = () => { navigate("/payment") };

    const handleLogoutClick = () => {
        handleMethod(async () => {
            await logout();
        });
    };

    let assetsPath = require.context('../images/img', false, /\.(png|jpe?g|svg)$/); 
    
    const Cart = () => {
      const [cartItems, setCartItems] = useState([]);
      const [total, setTotal] = useState(0);
      useEffect(() => {
        const intervalId = setInterval(() => {
          const savedCartItems = Cookies.get('cart');
          if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
            calculateTotal(JSON.parse(savedCartItems));
          }
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);

      const calculateTotal = (items) => {
        const totalSum = items.reduce((acc, item) => acc + item.price * item.qt, 0);
        setTotal(totalSum.toFixed(2));
      };

      const increaseQuantity = (index) => {
        const updatedItems = [...cartItems];
        updatedItems[index].qt += 1;
        setCartItems(updatedItems);
        Cookies.set('cart', JSON.stringify(updatedItems)); // Обновляем cookie
        calculateTotal(updatedItems); // Пересчитываем сумму
      };
    
      const decreaseQuantity = (index) => {
        const updatedItems = [...cartItems];
        if (updatedItems[index].qt > 1) {
          updatedItems[index].qt -= 1;
          setCartItems(updatedItems);
          Cookies.set('cart', JSON.stringify(updatedItems)); // Обновляем cookie
          calculateTotal(updatedItems); // Пересчитываем сумму
        }
      };
    
      const removeItem = (index) => {
        const updatedItems = [...cartItems];
        updatedItems.splice(index, 1);
        setCartItems(updatedItems);
        Cookies.set('cart', JSON.stringify(updatedItems)); // Обновляем cookie
        calculateTotal(updatedItems); // Пересчитываем сумму
      };

      return (
        <div className='boxes-basket'>
          {cartItems.map((item, index) => (
            <div className='box-basket'>
              <img className='img-basket-div' src={assetsPath(item.img)}></img>
                <div className='title-good-basket'>
                  <h3>{item.name}</h3>
                </div>
                <div className='quantity-of-goods'>
                  <div className='plus-minus-basket' onClick={() => increaseQuantity(index)}>
                    <p>
                      +
                    </p>
                  </div>
                  <div className='number-good-basket'>
                    <input type='number' value={item.qt} readOnly>
                    </input>
                  </div>
                  <div className='plus-minus-basket minus-basket'  onClick={() => decreaseQuantity(index)}>
                    <p>
                      -
                    </p>
                  </div>
                </div>
                <div className='price-basket'>
                  <p>€{item.price.toFixed(2)}</p>
                </div>
                <div className='dump-basket'  onClick={() => removeItem(index)}>
                  <img src={Dump}></img>
                </div>
              </div>
            ))}

            <div className='white-line-basket'>
            </div>
            <div className='footer-basket'>
              <div className='left-footer-basket'>
                <p>Всього:</p>
              </div>
              <div className='right-footer-basket'>
                <p><span>€</span>{total}</p>
              </div>
            </div>

            <button className='pay-basket-button' onClick={handlePaymentClick}>Сплатити</button>
          </div>
      );

    };
    
    

    return (
        <section className='header-section'>
            <div className='head-div'>
                <div className='head-left-div'>
                <div className='head-nav-div'>
                  <a className='header-link header-link-market' href='/catalog/menu'>Каталог</a>
                  </div>
                  <div className='head-nav-div'>
                  <a className='header-link' href='/faq'>FAQ</a>
                  </div>
                  </div>
              <div className='head-logo-div'>
              <a className='head-logo' href='/'>SakuraTails</a>
              </div>
              <div className='head-right-div'>
                <div className='head-nav-div'>
                    <a className='header-link' href='/about'>Про нас</a>
                </div>
                <div className='head-nav-div'>
                    <a className='header-link' href='/boxes'>Коробки</a>
                </div>
                <div className='head-nav-div dropdown-header'>
                    <a href='#' className='icon-head'>
                        <img src={Basket}></img>
                    </a>
                    <div className="dropdown-basket-header">
                      <h2>Кошик</h2>

                      {/* Пустий кошик */}

                      {/* <h2 className='basket-zero'>Кошик порожній</h2>
                      <h4>Подивись наш каталог, обов'язково щось знайдеш</h4>
                      <button className='market-basket-button'>Каталог</button> */}

                      {/* Повний кошик */}

                      <Cart/>
                    </div>
                </div>
                <div className='head-nav-div dropdown-header'>
                    <a href='#' className='icon-head' onClick={handleHeadClick}>
                      {user ? (
                        <div className='profile-avto'>
                          <p>
                            {user.displayName 
                              ? user.displayName.substring(0, 2) 
                              : user.email.substring(0, 2)}
                          </p>
                        </div>
                      ) : (
                        <img src={Profile} alt='Profile Icon' />
                      )}
                    </a>
                    {user && (
                        <div className="dropdown-content-header" style={{ display: isProfileModalOpen ? "block" : "none" }}>
                            <div>
                                <p className='head-email-dropdown'>{user.email}</p>
                            </div>
                            <div>
                              <p className='hello-dropdown'>Вітаємо, <span className='name-dropdown'>
                                {user.displayName
                                  ? (user.displayName.length > 5 ? user.displayName.substring(0, 3) + "..." : user.displayName.substring(0, 5))
                                  : user.email.substring(0, 5)}
                                </span> <img src={HelloEmoji} alt="Hello Emoji" />
                              </p>
                            </div>
                            <div onClick={handleOrdersHistoryClick}>
                                <button className='dropdown-border-top-button'><img src={History} alt="History" />Історія замовлень</button>
                            </div>
                            <div onClick={handleTrackingClick}>
                                <button className='dropdown-button'><img src={Transfer} alt="Transfer" />Відстеження замовлення</button>
                            </div>
                            <div onClick={handleFavoritesClick}>
                                <button className='dropdown-button'><img src={Like} alt="Like" />Обране</button>
                            </div>
                            <div onClick={handleReviewsClick}>
                                <button className='dropdown-button'><img src={Pen} alt="Pen" />Мої відгуки</button>
                            </div>
                            <div onClick={handleWalletClick}>
                                <button className='dropdown-button'><img src={Wallet} alt="Wallet" />Мій гаманець</button>
                            </div>
                            <div onClick={handleBonusesClick}>
                                <button className='dropdown-border-bottom-button'><img src={Procent} alt="Procent" />Знижки та бонуси</button>
                            </div>
                            <div>
                                <button className='dropdown-button dropdown-button-exit' onClick={handleLogoutClick}><img src={Exit} alt="Exit" />Вийти з акаунта</button>
                            </div>
                            <div>
                                <button className='dropdown-border-left-button' onClick={handleSettingsClick}>Налаштування</button>
                                <button className='dropdown-border-right-button'>Довідка</button>
                            </div>
                            {user.isSeller ? (
                                <div onClick={handleSellerProfileClick}>
                                    <button className='dropdown-border-bottom-button'><img src={Case} alt="Case" />Кабінет продавця</button>
                                </div>
                            ) : (
                                <div onClick={() => { navigate("/seller/authorization") }}>
                                    <button className='dropdown-border-bottom-button'><img src={Case} alt="Case" />Стати партнером</button>
                                </div>
                            )}
                            <div>
                                <p className='bottom-dropdown'>
                                    <a href='/privacy'>Privacy Policy</a><span className='slash-dropdown'>/</span><a href='/terms-of-use'> Terms of Service</a>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
              </div>
              </div>
          </section>
    );
};