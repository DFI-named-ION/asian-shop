import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useParams, useNavigate } from 'react-router-dom';

import { useErrors } from './providers/ErrorProvider';
import { useAuth } from './providers/AuthProvider';
import { useData } from './providers/DataProvider';

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

  const [modalIsOpenProfilePassword, setModalIsOpenProfilePassword] = useState(false);

  const openModalProfilePassword = () => {
    setModalIsOpenProfilePassword(true);
  };

  const closeModalProfilePassword = () => {
    setModalIsOpenProfilePassword(false);
  };

    const { user, logout } = useAuth();
    const { handleMethod, catchedError } = useErrors();
    const navigate = useNavigate();
    const { requestData } = useData();

    useEffect(() => {
        if (!user) {
            navigate('/authorization');
        } else {
            handleMethod(() => requestData('phone;birthday;'));
        }
    }, []);

    const handleLogOutClick = async (e) => {
        e.preventDefault();
        logout();
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
                  <a href='/profile-settings' className='icon-head'>
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
                    <h1>Налаштування</h1>
                  </div>
                  {/* FIRST PART */}
                  <div className='top-block-div'>
                    <div className='top-left-block-div'>
                      <h2 className='title-profile-block'>
                        Особисті дані
                      </h2>
                      <div className='columns-profile-div'>
                        <div className='column-profile-div'>
                          <h4>Прізвище</h4>
                          <p>{user?.lastName ? user.lastName : "Не вказано"}</p>
                          <h4>Дата народження</h4>
                          <p>01/01/2000</p>
                        </div>
                        <div className='column-profile-div'>
                        <h4>Ім'я</h4>
                        <p>{user?.firstName ? user.firstName : "Не вказано"}</p>
                        <h4>Стать</h4>
                          <p>Не вказано</p>
                        </div>
                        <div className='column-profile-div'>
                        <h4>По батькові</h4>
                        <p>{user?.middleName ? user.middleName : "Не вказано"}</p>
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
                          <p>{user?.phone ? user.phone : "Не вказано"}</p>
                        </div>
                        <div className='column-profile-div'>
                        <h4>Електронна пошта</h4>
                        <p>{user?.email ? user.email : "Не вказано"}</p>
                        <h4>Не друкувати чеки та гарантійні талони</h4>
                          <p>Так</p>
                        </div>
                      </div>
                      <input className='edit-profile-button' type='button' value='Редагувати' />
                    </div>
                        </div>

                    {/* SECOND PART */}
                    {/* <div className='top-block-div'>
                    <div className='top-left-block-div'>
                      <h2 className='title-profile-block title-black-profile-block'>
                        Особисті дані
                      </h2>
                      <div className='columns-profile-div columns-top-profile-div'>
                        <div className='column-profile-div'>
                          <h4>Прізвище</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='text' name='first name' required/>
                            </p>
                          <h4 className='top-margin-profile-title'>Дата народження</h4>
                          <p className='input-profile'>
                                <input className='date-profile' type='date' name='date' required/>
                            </p>
                        </div>
                        <div className='column-profile-div'>
                        <h4>Ім'я</h4>
                        <p className='input-profile'>
                                <input className='line-profile' type='text' name='last name' required/>
                            </p>
                        <h4 className='top-margin-profile-title'>Стать</h4>
                        <select className='select-profile'>
                        <option>Чоловік</option>
                        <option>Жінка</option>
                        </select>
                        </div>
                        <div className='column-profile-div'>
                        <h4>По батькові</h4>
                        <p className='input-profile'>
                                <input className='line-profile' type='text' name='father name' required/>
                            </p>
                        <h4 className='top-margin-profile-title'>Мова спілкування</h4>
                        <p className='input-profile'>
                                <input className='line-profile' type='text' name='language' required/>
                            </p>
                        </div>
                      </div>
                      <div className='button-profile-div'>
                      <input className='save-profile-button button-top-profile-div' type='button' value='Зберегти' />
                      <input className='cancel-profile-button button-top-profile-div' type='button' value='Скасувати' />
                      </div>
                    </div>
                    <div className='top-right-block-div'>
                    <h2 className='title-profile-block title-black-profile-block'>
                        Контакти
                      </h2>
                      <div className='columns-profile-div'>
                        <div className='column-profile-div'>
                          <h4>Підтверджений телефон</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='tel' name='telephone' required/>
                            </p>
                            <a className='add-info-profile' href='#'>
                            <p>Додати ще номер</p>
                            </a>
                        </div>
                        <div className='column-profile-div'>
                        <h4>Електронна пошта</h4>
                        <p className='input-profile'>
                                <input className='line-profile' type='email' name='email' placeholder='email@gmail.com' required/>
                            </p>
                            <div className='checkbox-profile-div'>
                            <p className='input-profile'>
                                <input className='checkbox-profile' type='checkbox' name='checkbox' required/>
                            </p>
                        <h4 className='druk-paper'>Не друкувати паперові чеки та гарантійні талони</h4>
                        </div>
                        </div>
                      </div>
                      <div className='button-profile-div'>
                      <input className='save-profile-button button-top-profile-div' type='button' value='Зберегти' />
                      <input className='cancel-profile-button button-top-profile-div' type='button' value='Скасувати' />
                      </div>
                    </div>
                  </div> */}

                  {/* FIRST PART */}
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

                  {/* SECOND PART */}
                  {/* <div className='medium-block-div'>
                    <div className='top-left-block-div'>
                      <h2 className='title-profile-block title-black-profile-block'>
                        Адреса доставки
                      </h2>
                      <div className='columns-profile-div columns-medium-profile-div'>
                        <div className='column-profile-div'>
                        <h4>Місто</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='text' name='city' required/>
                            </p>
                            <a className='add-info-profile' href='#'>
                            <p>Додати ще адресу</p>
                            </a>
                      </div>
                      <div className='column-profile-div'>
                        <h4>Вулиця</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='address' name='street' required/>
                            </p>
                      </div>
                      <div className='column-profile-div'>
                        <h4>Будинок</h4>
                          <p className='input-profile'>
                                <input className='line-profile line-small-profile' type='text' name='house' required/>
                            </p>
                      </div>
                      <div className='column-profile-div'>
                        <h4>Квартира</h4>
                          <p className='input-profile'>
                                <input className='line-profile line-small-profile' type='text' name='apartment' required/>
                            </p>
                      </div>
                      </div>
                      <div className='button-profile-div button-medium-profile-div'>
                      <input className='save-profile-button' type='button' value='Зберегти' />
                      <input className='cancel-profile-button' type='button' value='Скасувати' />
                      </div>
                    </div>
                  </div> */}

                  {/* FIRST PART */}
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

                  {/* SECONT PART */}
                  {/* <div className='bottom-block-div'>
                    <div className='top-left-block-div'>
                      <h2 className='title-profile-block title-black-profile-block'>
                        Мої отримувачі замовлень
                      </h2>
                        <div className='column-profile-div'>
                        <h4>Отримувач (за замовчуванням)</h4>
                        <p className='input-profile'>
                                <input className='line-profile' type='text' name='text' required/>
                            </p>
                      </div>

                      <p className='title-bottom-profile'>
                        Отримувач замовлень
                      </p>
                      <div className='columns-profile-div columns-bottom-profile-div'>
                      <div className='column-profile-div'>
                        <h4>Прізвище</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='text' name='first name' required/>
                            </p>
                            <a className='add-info-profile' href='#'>
                            <p>Додати ще отримувача</p>
                            </a>
                      </div>
                      <div className='column-profile-div'>
                        <h4>Ім'я</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='text' name='last name' required/>
                            </p>
                      </div>
                      <div className='column-profile-div'>
                        <h4>По батькові</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='text' name='father name' required/>
                            </p>
                      </div>
                      <div className='column-profile-div'>
                        <h4>Мобільний телефон</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='tel' name='tel' required/>
                            </p>
                      </div>
                      </div>
                      <div className='button-profile-div button-medium-profile-div'>
                      <input className='save-profile-button' type='button' value='Зберегти' />
                      <input className='cancel-profile-button' type='button' value='Скасувати' />
                      </div>
                    </div>
                  </div> */}

                  <div className='footer-profile-div'>
                    <a href='#' onClick={openModalProfilePassword}>
                    <h3>Змінити пароль</h3>
                    </a>
                    <Modal isOpen={modalIsOpenProfilePassword} onRequestClose={closeModalProfilePassword} className='background-modal-div'>
                    <div className='modal-profile-password-div'> 
                    <button onClick={closeModalProfilePassword} className='close-modal-button close-modal-profile-button'></button>
                    <h2 className='title-profile-modal'>
                        Зміна паролю
                      </h2>
                      <p className='subtitle-modal-profile'>Старий пароль</p>
                      <p className='input-profile'>
                                <input className='line-profile-modal' type='password' name='modal-password' required/>
                      </p>
                      <p className='subtitle-modal-profile'>Новий пароль</p>
                      <p className='input-profile'>
                                <input className='line-profile-modal' type='password' name='modal-password' required/>
                      </p>
                      <p className='subtitle-modal-profile'>Повторіть новий пароль</p>
                      <p className='input-profile'>
                                <input className='line-profile-modal' type='password' name='modal-password' required/>
                      </p>
                      <div className='button-profile-div button-profile-modal-div'>
                      <input className='save-profile-button' type='button' value='Зберегти' />
                      <input className='cancel-profile-button' type='button' value='Скасувати' />
                      </div>
                    </div>
                    </Modal>
                    <a href='#' onClick={handleLogOutClick}>
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