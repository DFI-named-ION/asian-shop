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
  }

  export default function GoodPage() {
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

    // document.getElementById('tab-good1').addEventListener('mouseover', function() {
    //     document.getElementById('content-good-page').innerHTML = 'Склад: Картопля, рослинна олія, гостра ракова приправа, сіль, натуральні ароматизатори, антиоксиданти.';
    // });
    
    // document.getElementById('tab-good2').addEventListener('mouseover', function() {
    //     document.getElementById('content-good-page').innerHTML = 'Алергени: Містить картоплю. Вироблено на підприємстві, що працює з молоком, соєю та пшеницею. Поживна цінність (на одну порцію, приблизно 28 г): Калорії: 150, загальний жир: 9 г, натрій: 180 мг, білок: 2 г.';
    // });
    
    // document.getElementById('tab-good3').addEventListener('mouseover', function() {
    //     document.getElementById('content-good-page').innerHTML = 'Контент для Відгуки';
    // });

    const [content, setContent] = useState('Склад продукту');

    const handleMouseEnter = (section) => {
        setContent(section);
    }


    return (
        <body className='good-body'>
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
            <section className='section-good-page'>
                <div className='left-good-page'>
                    <div className='img-good-page'>
                    <img src={Chips}></img>
                    </div>
                </div>

                <div className='right-good-page'>
                    <div className='choose-plan-box-page'>
                        <p>Виберіть план</p>
                    </div>

                    <div className='title-box-page'>
                        <h2>
                        Підписка на коробки зі смаколиками
                        </h2>
                    </div>

                    <div className='four-plan-box-page'>
                        <div>
                        <button className='plan-box-page-button'>
                            <div>
                                <p className='plan-box-page-big-text'>12 Місяців</p>
                                </div>
                                <div className='red-box-plan'>НАЙКРАЩА ЦІНА</div>
                                <div className='plan-box-page-save-money'>
                                <p className='plan-box-page-small-text'>Збережи €120</p>
                                <p className='plan-box-page-big-text'>€39.99/міс</p>
                                </div>
                        </button>
                        </div>

                        <div>
                        <button className='plan-box-page-button'>
                            <div>
                                <p className='plan-box-page-big-text'>6 Місяців</p>
                                </div>
                                <div className='plan-box-page-save-money'>
                                <p className='plan-box-page-small-text'>Збережи €36</p>
                                <p className='plan-box-page-big-text'>€43.99/міс</p>
                                </div>
                        </button>
                        </div>

                        <div className='four-plan-box-page'>
                        <div>
                        <button className='plan-box-page-button'>
                            <div>
                                <p className='plan-box-page-big-text'>3 Місяців</p>
                                </div>
                                <div className='red-box-plan'>ПОПУЛЯРНО</div>
                                <div className='plan-box-page-save-money'>
                                <p className='plan-box-page-small-text'>Збережи €12</p>
                                <p className='plan-box-page-big-text'>€45.99/міс</p>
                                </div>
                        </button>
                        </div>
                        </div>

                        <div className='four-plan-box-page'>
                        <div>
                        <button className='plan-box-page-button'>
                            <div>
                                <p className='plan-box-page-big-text'>1 Місяць</p>
                                </div>
                                <div>
                                <p className='plan-box-page-big-text'>€49.99/міс</p>
                                </div>
                        </button>
                        </div>
                        </div>
                    </div>

                    <div className='inference-plan'>
                        <div className='inference-plan-plus'>
                        <div>
                            <p className='inference-plan-text'>ВСЬОГО:</p>
                            <p className='inference-plan-price'>€137.97</p>
                        </div>
                        <div className='inference-plan-red'>
                            <p className='inference-plan-text'>ЗБEРЕЖИ 12€</p>
                            <p className='inference-plan-price inference-plan-price-cross-out'>€149.97</p>
                        </div>
                    </div>
                        <div>
                        <button className='inference-plan-button'>ОБРАТИ ЦЕЙ ПЛАН</button>
                        </div>
                    </div>

                    <div className='PS-box-page'>
                        <p>Рахунок виставляється щоквартально, скасувати можна будь-коли.<br/>
                            <br/>
                        Сума плюс вартість доставки розраховується при оформленні замовлення. 
                        Всі ціни в євро
                        </p>
                    </div>

                    <div className='text-good-page text-box-page'>
                        <p><span>Шматочок Азії прямо на столі</span><br/>Ми доставляємо до ваших дверей досвід дегустації автентичних азіатських закусок,
цукерок та чаю, отриманих безпосередньо від багатовікових сімейних виробників. Кожна коробка, яку ви
купуєте, підтримує ці сімейні бізнеси в Азії та допомагає зберегти їхні
традиції.</p>
                    </div>

<div className="menu-good">
            <div className="tabs-good">
                <div 
                    className="tab-good tab-good-left" 
                    onMouseEnter={() => handleMouseEnter('Склад продукту')}
                >
                    Склад продукту
                </div>
                <div 
                    className="tab-good tab-good-center" 
                    onMouseEnter={() => handleMouseEnter('Інформація')}
                >
                    Інформація
                </div>
                <div 
                    className="tab-good tab-good-right" 
                    onMouseEnter={() => handleMouseEnter('Відгуки')}
                >
                    Відгуки (<span>1</span>)
                </div>
            </div>
            <div className="content-good-page">
                {content === 'Склад продукту' && (
                    <div>
                        <p>Інгридієнти: Секрет, проте не містить молока, горіхів та глютену.</p>
                    </div>
                )}
                {content === 'Інформація' && (
                    <div>
                        <p>Алергени: Містить картоплю. Вироблено на підприємстві, що працює з молоком, соєю та пшеницею.
                            <br/><br/>
                           Поживна цінність (на одну порцію, приблизно 28 г): <br/>Калорії: 150, загальний жир: 9 г, натрій: 180 мг, білок: 2 г.</p>
                    </div>
                )}
                {content === 'Відгуки' && (
                    <div>
                        <div className='add-response-button-div'>
                            <button>Залишити відгук <img src={RedPen}></img></button>
                        </div>

                        <div className='respose-block'>
                            <h5>Нейлон</h5>
                            <div className='respose-stars'>
                            <img src={StarRespose}></img>
                            <img src={StarRespose}></img>
                            <img src={StarRespose}></img>
                            <img src={StarRespose}></img>
                            <img src={StarRespose}></img>
                            </div>
                            <p>Чіпси зі смаком гострого лобстера – це сміливе поєднання морських делікатесів і пікантності. Хрусткі та смачні, вони подарують яскраві враження, особливо для любителів оригінальних смаків. Справжнє задоволення для гурманів!</p>
                            <img className='img-respose' src={Chips}></img>
                        </div>
                    </div>
                )}
            </div>
        </div>
 
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