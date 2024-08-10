import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Collapse} from 'react-collapse';

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

function App() {
    return <Logo />;
    return <Basket />;
    return <HelloEmoji />;
    return <AddPlus />;
    return <Exit />;
    return <History />;
    return <Transfer />;
    return <Like />;
    return <Pen />;
    return <Wallet />;
    return <Procent />;
    return <Case />;
    return <Dump />;
    return <Profile />;
  }

   

    export default function Header (){
        const {user} = useAuth();
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
    
        const handleSellerProfileClick = () => {
            navigate("/seller");
        };
    
        const handleSettingsClick = () => {
            navigate("/profile-settings")
        };
    
    return (
        <section className='header-section'>
            <div className='head-div'>
                <div className='head-left-div'>
                <div className='head-nav-div'>
                  <a className='header-link header-link-market' href='/catalog'>Каталог</a>
                  </div>
                  <div className='head-nav-div'>
                  <a className='header-link' href='https://www.figma.com/'>FAQ</a>
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
                    <a className='header-link' href='https://www.figma.com/'>Коробки</a>
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

                      <div className='boxes-basket'>
                        <div className='box-basket'>
                          <div className='img-basket-div'></div>
                          <div className='title-good-basket'>
                            <h3>Name</h3>
                          </div>
                          <div className='quantity-of-goods'>
                            <div className='plus-minus-basket'>
                              <p>
                              +
                              </p>
                            </div>
                            <div className='number-good-basket'>
                              <input type='number' value="1">
                              </input>
                            </div>
                            <div className='plus-minus-basket minus-basket'>
                            <p>
                              -
                              </p>
                              </div>
                          </div>
                          <div className='price-basket'>
                            <p>€25.60</p>
                          </div>
                          <div className='dump-basket'>
                          <img src={Dump}></img>
                          </div>
                        </div>
                        <div className='box-basket'>
                          <div className='img-basket-div'></div>
                          <div className='title-good-basket'>
                            <h3>Name</h3>
                          </div>
                          <div className='quantity-of-goods'>
                            <div className='plus-minus-basket'>
                              <p>
                              +
                              </p>
                            </div>
                            <div className='number-good-basket'>
                              <input type='number' value="1">
                              </input>
                            </div>
                            <div className='plus-minus-basket minus-basket'>
                            <p>
                              -
                              </p>
                              </div>
                          </div>
                          <div className='price-basket'>
                            <p>€25.60</p>
                          </div>
                          <div className='dump-basket'>
                          <img src={Dump}></img>
                          </div>
                        </div>

                        <div className='white-line-basket'>
                        </div>

                        <div className='footer-basket'>
                          <div className='left-footer-basket'>
                            <p>Всього:</p>
                          </div>
                          <div className='right-footer-basket'>
                            <p><span>€</span>153.60</p>
                          </div>
                        </div>

                        <button className='pay-basket-button'>Сплатити</button>
                      </div>
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
                            <div>
                                <button className='dropdown-border-top-button'><img src={History} alt="History" />Історія замовлень</button>
                            </div>
                            <div>
                                <button className='dropdown-button'><img src={Transfer} alt="Transfer" />Відстеження замовлення</button>
                            </div>
                            <div>
                                <button className='dropdown-button'><img src={Like} alt="Like" />Обране</button>
                            </div>
                            <div>
                                <button className='dropdown-button'><img src={Pen} alt="Pen" />Мої відгуки</button>
                            </div>
                            <div>
                                <button className='dropdown-button'><img src={Wallet} alt="Wallet" />Мій гаманець</button>
                            </div>
                            <div>
                                <button className='dropdown-border-bottom-button'><img src={Procent} alt="Procent" />Знижки та бонуси</button>
                            </div>
                            <div>
                                <button className='dropdown-button dropdown-button-exit'><img src={Exit} alt="Exit" />Вийти з акаунта</button>
                            </div>
                            <div>
                                <button className='dropdown-border-left-button' onClick={handleSettingsClick}>Налаштування</button>
                                <button className='dropdown-border-right-button'>Довідка</button>
                            </div>
                            <div onClick={handleSellerProfileClick}>
                                <button className='dropdown-border-bottom-button'><img src={Case} alt="Case" />Кабінет продавця</button>
                            </div>
                            <div>
                                <p className='bottom-dropdown'>
                                    <a href='/privacy'>Privacy Policy</a><span className='slash-dropdown'>/</span><a href=''> Terms of Service</a>
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