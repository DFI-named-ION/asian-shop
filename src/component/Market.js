import React, {useContext, useState} from 'react';
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
import ChipsLeys from '../images/img/chips-good.png';

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
    return <ChipsLeys />;
  }

  export default function Market() {
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
        <body className='market-body'>
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
             <div className='filter-market-div'>
                <div className='subfilter-market'>
                    <h4>
                        КАТЕГОРІЯ
                    </h4>
                    <details className='market-details'>
                                    <summary className='summary-details-market'>Показати все</summary>
                                    <div>
                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Заморожені</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Солодощі</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Закуски</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Страви</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Соуси</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Напої</p>
                                        </div>
                                        </div>
                                    </div>
                                    </details>
                </div>

                <div className='subfilter-market'>
                    <h4>
                        ПІДКАТЕГОРІЯ
                    </h4>
                    <details className='market-details'>
                                    <summary className='summary-details-market'>Показати все</summary>
                                    <div>
                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Морепродукти</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Випічка</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Шоколад</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Моті</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Печиво</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Торти</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Марпеладки</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Чипси</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Крекери</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Горіхи</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Гострі страви</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Локшина</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Каррі</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Рис</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Токкпокі</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Місо</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Гострі соуси</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Соєві</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Оцти</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Газованка</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Сік</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Фітнес</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Вода</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Чай</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Кава</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Молоко</p>
                                        </div>
                                        </div>
                                    </div>
                                    </details>
                </div>

                <div className='subfilter-market'>
                    <h4>
                        ВАГА
                    </h4>
                    <details className='market-details'>
                                    <summary className='summary-details-market'>Показати все</summary>
                                    <div>
                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>До 100 г.</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>До 250 г.</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>До 500 г.</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>До 1 кг.</p>
                                        </div>
                                        </div>
                                    </div>
                                    </details>
                </div>

                <div className='subfilter-market'>
                    <h4>
                        ЗА РЕЙТИНГОМ
                    </h4>
                    <details className='market-details'>
                                    <summary className='summary-details-market'>Показати все</summary>
                                    <div>
                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>5 зірок</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>4 зірки</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>3 зірки</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>2 зірки</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>1 зірка</p>
                                        </div>
                                        </div>
                                    </div>
                                    </details>
                </div>

                <div className='subfilter-market'>
                    <p className='price-range'>ЦІНА</p>
                    <input type='range'></input>
                    <div className='menu-range-market'>
                        <div>€3.99</div>
                        <div>€n</div>
                        <div>€300.99</div>
                    </div>
                </div>
             </div>

             <div className='catalog-market'>
             <div className='good-catalog-market'>
                        <img src={ChipsLeys} className='img-position-good'></img>
                        <div className='full-stars full-stars-good'>
                      <div className='rating-group rating-group-good'>
                      <div className='stars-good-page'>
                   <input name="fst" value="0" type="radio" disabled checked />
                   
                    <label for="fst-1">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                   </label>
                   <input name="fst" id="fst-1" value="1" type="radio" />
                       
                   <label for="fst-2">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke="#182531" stroke-width="30" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                   </label>
                   <input name="fst" id="fst-2" value="2" type="radio" />
          
                   <label for="fst-3">
                       <svg xmlns="http://www.w3.org/2000/svg" stroke="#182531" stroke-width="30" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                   </label>
                   <input name="fst" id="fst-3" value="3" type="radio" />
                         
                   <label for="fst-4">
                       <svg xmlns="http://www.w3.org/2000/svg" stroke="#182531" stroke-width="30" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                   </label>
                   <input name="fst" id="fst-4" value="4" type="radio" />
                    
                    <label for="fst-5">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke="#182531" stroke-width="30" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                    </label>
                    <input name="fst" id="fst-5" value="5" type="radio" />
                    </div>
                    </div>
                    </div>
                        <h5>Картопляні чіпси Lay's: Пряні раки</h5>
                        <p className='text-position-good'>23 шт. в наявності</p>
                        <p className='price-position-good'><span className='span-small-pos'>€</span>3.49 <span className='span-slash-pos'>/</span>80<span className='span-small-pos'>г.</span></p>
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