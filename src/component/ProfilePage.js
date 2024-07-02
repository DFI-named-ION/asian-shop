import React, { useContext, useState } from 'react';

import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";
import axios from 'axios';

import { UserContext } from './providers/UserProvider';

import Basket from '../images/icons/basket.svg';
import Profile from '../images/icons/profile.svg';
import WhiteWolf from '../images/logo/white-wolf.svg';
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

function App() {
    return <Basket />;
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
  }

export default function ProfilePage() {

    const {user, setUser} = useContext(UserContext);

    const handleRequest = async (event) => {
        event.preventDefault();
        console.log(user);
    };


    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (err) {
            handleError(err);
        };

        window.location = "/";
    };

    const handleError = (error) => {
        console.log(`${error}`);
    };

    return (
        <body className='ProfilePage-body'>
        <><><header>
              <section className='header-section'>
                <div className='head-div'>
                    <div className='head-left-div'>
                    <div className='head-nav-div'>
                      <a className='header-link header-link-market' href='https://www.figma.com/'>Каталог</a>
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
                  <div className='head-nav-div'>
                  <a href='/authorization' className='icon-head'>
                      <img src={Profile}></img>
                  </a>
                  </div>
                  <div className='language-div'>
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
                  </div>
                  </div>
                  </div>
              </section>
          </header>
              <main>
                <section className='profile-section'>
                  <div className='title-profile'>
                    <h1>Профіль</h1>
                  </div>
                  <div className='top-block-div'>
                    <div className='top-left-block-div'>
                      <h2 className='title-profile-block'>
                        Особисті дані
                      </h2>
                      <div className='columns-profile-div'>
                        <div className='column-profile-div'>
                          <h4>Прізвище</h4>
                          <p>Тестове</p>
                          <h4>Дата народження</h4>
                          <p>01/01/2000</p>
                        </div>
                        <div className='column-profile-div'>
                        <h4>Ім'я</h4>
                        <p>Тестове</p>
                        <h4>Стать</h4>
                          <p>Не вказано</p>
                        </div>
                        <div className='column-profile-div'>
                        <h4>По батькові</h4>
                        <p>Не вказано</p>
                        <h4>Мова спілкування</h4>
                          <p>Українська</p>
                        </div>
                      </div>
                      <input className='edit-profile-button' type='button' value='Редагувати' />
                    </div>
                    <div className='top-right-block-div'>
                    <h2 className='title-profile-block'>
                        Контакти
                      </h2>
                      <div className='columns-profile-div'>
                        <div className='column-profile-div'>
                          <h4>Підтверджений телефон</h4>
                          <p>+380 66 000 00 00</p>
                        </div>
                        <div className='column-profile-div'>
                        <h4>Електронна пошта</h4>
                        <p>email@gmail.com</p>
                        <h4 className='druk-paper'>Не друкувати паперові чеки та гарантійні талони</h4>
                          <p>Так</p>
                        </div>
                      </div>
                      <input className='edit-profile-button' type='button' value='Редагувати' />
                    </div>
                  </div>

                  <div className='medium-block-div'>
                    <div className='top-left-block-div'>
                      <h2 className='title-profile-block'>
                        Адреса доставки
                      </h2>
                        <div className='column-profile-div'>
                          <p>Не вказано</p>
                      </div>
                      <input className='edit-profile-button' type='button' value='Редагувати' />
                    </div>
                  </div>

                  <div className='bottom-block-div'>
                    <div className='top-left-block-div'>
                      <h2 className='title-profile-block'>
                        Мої отримувачі замовлень
                      </h2>
                        <div className='column-profile-div'>
                        <h4>Тестове Тестове</h4>
                          <p>+380 66 000 00 00</p>
                      </div>
                      <input className='edit-profile-button' type='button' value='Редагувати' />
                    </div>
                  </div>

                  <div className='footer-profile-div'>
                    <a href='#'>
                    <h3>Змінити пароль</h3>
                    </a>
                    <a href='#'>
                    <h3 className='exit-profile'>Вихід</h3>
                    </a>
                  </div>
                  </section>
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
                          <li><a className='section-footer' href='/'>SakuraTails Sites</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>SakuraTails Market</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>SakuraTails Gift Boxes</a></li>
                      </ul>
                      </div>
                      <div className='center-nav-div'>
                      <ul>
                          <li><a className='section-footer' href='https://www.figma.com/'>Shop</a></li>
                          <li><a className='section-footer' href='#subcribtion-section'>Subscribe</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>About Us</a></li>
                      </ul>
                      </div>
                      <div className='right-nav-div'>
                      <ul>
                          <li><a className='section-footer' href='https://www.figma.com/'>Support</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>Privacy Policy</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>Terms</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>FAQ</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>Shipping Policy</a></li>
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