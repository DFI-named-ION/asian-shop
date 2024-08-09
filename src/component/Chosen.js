import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Collapse} from 'react-collapse';

import Logo from '../images/logo/SakuraTails.svg';
import Basket from '../images/icons/basket.svg';
import Profile from '../images/icons/profile.svg';
import Box from '../images/icons/box.svg';
import Amex from '../images/pay/amex.png';
import Apple from '../images/pay/apple.png';
import F from '../images/pay/f.png';
import Discover from '../images/pay/discover.png';
import Google from '../images/pay/google.png';
import Mastercard from '../images/pay/mastercard.png';
import Paypal from '../images/pay/paypal.png';
import Shop from '../images/pay/shop.png';
import V from '../images/pay/v.png';
import Visa from '../images/pay/visa.png';
import Instagram from '../images/socials/instagram.svg';
import X from '../images/socials/x.svg';
import Facebook from '../images/socials/facebook.svg';
import Tiktok from '../images/socials/tiktok.svg';
import Qr from '../images/pay/qr.svg';
import WhiteWolf from '../images/logo/white-wolf.svg';
import Spread from '../images/icons/spread.svg';
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
import Chips from '../images/img/chips-good.png';
import PriceGood from '../images/icons/price-good.svg';
import Transport from '../images/icons/transport-good.svg';
import Quality from '../images/icons/quality-good.svg';
import RedPen from '../images/icons/redPen.svg';
import StarRespose from '../images/icons/star-respose.svg';
import HeartOrder from '../images/icons/heart-black.svg';
import SpreadOrder from '../images/icons/spread-order.svg';

import { useAuth } from './providers/AuthProvider';

function App() {
    return <Logo />;
    return <Basket />;
    return <Spread />;
    return <Profile />;
    return <WhiteWolf />;
    return <Amex />;
    return <Apple />;
    return <F />;
    return <Discover />;
    return <Google />;
    return <Mastercard />;
    return <Paypal />;
    return <Shop />;
    return <V />;
    return <Visa />;
    return <Instagram />;
    return <X />;
    return <Facebook />;
    return <Tiktok />;
    return <Qr />;
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
    return <Chips />;
    return <PriceGood />;
    return <Transport />;
    return <Quality />;
    return <RedPen />;
    return <StarRespose />;
    return <HeartOrder />;
    return <SpreadOrder />;
  }

  export default function ReviewsSeller() {
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
        <body className='reviews-body'>
        <><><header>
              <section className='header-section'>
                <div className='head-div'>
                    <div className='head-left-div'>
                    <div className='head-nav-div'>
                      <a className='header-link header-link-market' href='/catalog'>Каталог</a>
                      </div>
                      <div className='head-nav-div'>
                      <a className='header-link' href='https://www.figma.com/'>Подарунки</a>
                      </div>
                      </div>
                  <div className='head-logo-div'>
                  <a className='head-logo' href='/'>SakuraTails</a>
                  </div>
                  <div className='head-right-div'>
                    <div className='head-nav-div'>
                        <a className='header-link' href='https://www.figma.com/'>Про нас</a>
                    </div>
                    <div className='head-nav-div'>
                        <a className='header-link' href='https://www.figma.com/'>Коробки</a>
                    </div>
                    <div className='head-nav-div'>
                        <a href='#' className='icon-head'>
                            <img src={Basket}></img>
                        </a>
                    </div>
                    <div className='head-nav-div dropdown-header'>
                        <a href='#' className='icon-head' onClick={handleHeadClick}>
                            <img src={Profile}></img>
                        </a>
                        {user && (
                            <div className="dropdown-content-header" style={{ display: isProfileModalOpen ? "block" : "none" }}>
                                <div>
                                    <p className='head-email-dropdown'>{user.email}</p>
                                </div>
                                <div>
                                    <p className='hello-dropdown'>Вітаємо, <span className='name-dropdown'>{user.displayName}</span> <img src={HelloEmoji} alt="Hello Emoji" /></p>
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
                                        <a href=''>Privacy Policy</a><span className='slash-dropdown'>/</span><a href=''> Terms of Service</a>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                  {/* <div className='language-div'>
                    <div className='language-left-div'>
                      <a className='language-link-left language-link'>
                        <p>EN</p>
                      </a>
                    </div>
                    <div className='language-right-div'>
                    <a className='language-link-right language-link'>
                        <p>UA</p>
                      </a>
                    </div>
                  </div> */}
                  </div>
                  </div>
              </section>
          </header>
              <main>
                <div className='title-reviews-div'>
            <div>
            <h2>
                Обране
            </h2>
            </div>

            <div className='menu-reviews-div'>
                <div>
                    <button className='menu-button-reviews menu-button-reviews-border'>За рейтингом</button>
                    <button className='menu-button-reviews'>Дешевше</button>
                    <button className='menu-button-reviews'>Дорожче</button>
                    <button className='menu-button-reviews'>Наявне</button>
                </div>
            </div>
                </div>

                {/* Замовлення відсутні */}

                {/* <h1 className='h1-reviews'>Твоя історія замовлень<br/> поки що порожня</h1>

                <p className='text-client-reviews'>Давай зробимо перше замовлення? Подивись наш<br/> каталог - ти обов’язково щось знайдеш!</p>

                <button className='catalog-reviews'>Каталог</button> */}

                {/* Замовлення присутні */}

                <div className='boxes-order-div'>
                    <div className='box-order-div'>
                        <div className='img-order-div'>
                            <div>
                            </div>
                        </div>
                        <div>
                        <p className='text-order'>Назва продукції</p>
                        <p className='text-order text-order-margin'>Дата замовлення</p>
                        <p className='text-order text-order-green'>Отримано</p>
                        </div>

                        <div>
                            <div className='stars-order'>
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            </div>

                            <div>
                            <p className='text-order text-order-black'>Ціна</p>
                            </div>

                        </div>

                        <div className='heart-and-spread'>
                            <div>
                        <img src={HeartOrder} />
                            </div>
                            <div>
                        <img className='spread-order' src={SpreadOrder} />
                            </div>
                        </div>
                    </div>

                    <div className='box-order-div'>
                        <div className='img-order-div'>
                            <div>
                            </div>
                        </div>
                        <div>
                        <p className='text-order'>Назва продукції</p>
                        <p className='text-order text-order-margin'>Дата замовлення</p>
                        <p className='text-order text-order-green'>Отримано</p>
                        </div>

                        <div>
                            <div className='stars-order'>
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            </div>

                            <div>
                            <p className='text-order text-order-black'>Ціна</p>
                            </div>

                        </div>

                        <div className='heart-and-spread'>
                            <div>
                        <img src={HeartOrder} />
                            </div>
                            <div>
                        <img className='spread-order' src={SpreadOrder} />
                            </div>
                        </div>
                    </div>

                    <div className='box-order-div'>
                        <div className='img-order-div'>
                            <div>
                            </div>
                        </div>
                        <div>
                        <p className='text-order'>Назва продукції</p>
                        <p className='text-order text-order-margin'>Дата замовлення</p>
                        <p className='text-order text-order-green'>Отримано</p>
                        </div>

                        <div>
                            <div className='stars-order'>
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            </div>

                            <div>
                            <p className='text-order text-order-black'>Ціна</p>
                            </div>

                        </div>

                        <div className='heart-and-spread'>
                            <div>
                        <img src={HeartOrder} />
                            </div>
                            <div>
                        <img className='spread-order' src={SpreadOrder} />
                            </div>
                        </div>
                    </div>

                    <div className='box-order-div'>
                        <div className='img-order-div'>
                            <div>
                            </div>
                        </div>
                        <div>
                        <p className='text-order'>Назва продукції</p>
                        <p className='text-order text-order-margin'>Дата замовлення</p>
                        <p className='text-order text-order-green'>Отримано</p>
                        </div>

                        <div>
                            <div className='stars-order'>
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            </div>

                            <div>
                            <p className='text-order text-order-black'>Ціна</p>
                            </div>

                        </div>

                        <div className='heart-and-spread'>
                            <div>
                        <img src={HeartOrder} />
                            </div>
                            <div>
                        <img className='spread-order' src={SpreadOrder} />
                            </div>
                        </div>
                    </div>
                </div>

                
              </main></>
    
              <footer>
                <div className='footer-div'>
                  <nav>
                    <div className='top-footer-div'>
                    <div className='logo-footer-div'>
                          <img className='footer-wolf' href='/' src={WhiteWolf} alt='logo SakuraTails'></img>
                          <a className='head-logo footer-logo' href='/'>SakuraTails</a>
                      </div>
                      <div className='nav-footer-div'>
                        <div className='left-nav-div'>
                      <ul>
                          <li className='section-footer-bold'><a className='section-footer section-footer-bold'>Тільки на SakuraTails</a></li>
                          <li className='section-footer'><a className='section-footer' href='#'>Магазин</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>Подарункові коробки</a></li>
                          <li className='section-footer'><a className='section-footer' href='#subcribtion-section'>Підписка</a></li>
                      </ul>
                      </div>
                      <div className='right-nav-div'>
                      <ul>
                          <li className='section-footer-bold'><a className='section-footer section-footer-bold'>Підтримка</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>Політика конфіденційності</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>Про нас</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>Умови</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>FAQ</a></li>
                          <li className='section-footer'><a className='section-footer' href='https://www.figma.com/'>Політика доставки</a></li>
                      </ul>
                      </div>
                      </div>
                      <div className='pay-footer-div'>
                        <div className='we-accept-div'>
                      <h3 className='we-accept'>We accept</h3>
                      </div>
                        <div className='inline-pay-div'>
                      <div className='icon-pay-div'>
                      <img src={Amex}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Apple}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={F}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Discover}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Google}></img>
                      </div>
                      </div>
                      <div className='inline-pay-div'>
                      <div className='icon-pay-div'>
                      <img src={Mastercard}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Paypal}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Shop}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={V}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Visa}></img>
                      </div>
                      </div>
                      <div className='qr-div'>
                      <img src={Qr}></img>
                      </div>
                      </div>
                      </div>
                  </nav>
                  </div>
                  <div className='white-line'></div>
                  <div className='footer-div'>
                  <div className='bottom-footer-div'>
                  
                    <div>
                  <h3 className='sakuratails'>2024 SakuraTails</h3>
                  </div>
                      <ul>
                      <div className='social-box-div'>
                          <div className='social-div'>
                          <li><a href='https://www.instagram.com/'><img src={Instagram}></img></a></li>
                          </div>
                          <div className='social-div'>
                          <li><a href='https://twitter.com/'><img src={X}></img></a></li>
                          </div>
                          <div className='social-div'>
                          <li><a href='https://www.facebook.com/'><img src={Facebook}></img></a></li>
                          </div>
                          <div className='social-div'>
                          <li><a href='https://www.tiktok.com/'><img src={Tiktok}></img></a></li>
                          </div>
                          </div>
                      </ul>
                      </div>
                      </div>
              </footer></>
              </body>
    
    
      )
  }