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
  }

  export default function FAQ() {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [isProfileModalOpen, setIsProfileModalOpen] = useState("");

    useEffect(() => {
        const faqItems = document.querySelectorAll(".faq-item");
        faqItems.forEach(function (item) {
          const question = item.querySelector(".faq-question");
          const answer = item.querySelector(".faq-answer");
    
          question.addEventListener("click", function () {
            if (answer.style.display === "block") {
              answer.style.display = "none";
            } else {
              answer.style.display = "block";
            }
          });
        });
    }, []);

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
        <body className='faq-body'>
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
                        <a className='header-link' href='/about'>Про нас</a>
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
                                        <a href='/privacy'>Privacy Policy</a><span className='slash-dropdown'>/</span><a href=''> Terms of Service</a>
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
              <div class="faq-container">
        <h1>Питання та Відповіді (FAQ)</h1>

        <div class="faq-item">
            <button class="faq-question">Як зробити замовлення на вашому сайті?</button>
            <div class="faq-answer">
                <p>Щоб зробити замовлення, виберіть продукти, які вам подобаються, додайте їх до кошика та перейдіть до оформлення замовлення. Заповніть необхідну інформацію та підтвердіть замовлення. Після цього ви отримаєте підтвердження на електронну пошту.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Які способи оплати ви приймаєте?</button>
            <div class="faq-answer">
                <p>Ми приймаємо оплату банківськими картками (Visa, MasterCard), електронні платіжні системи (PayPal), а також післяплатою при отриманні товару.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Як довго триватиме доставка?</button>
            <div class="faq-answer">
                <p>Доставка зазвичай займає від 3 до 7 робочих днів залежно від вашого місцезнаходження. Ви також можете вибрати експрес-доставку за додаткову плату, яка займе 1-3 дні.</p>
            </div>
        </div>
       
        <div class="faq-item">
            <button class="faq-question">Чи можна повернути або обміняти товар?</button>
            <div class="faq-answer">
                <p>Оскільки продукти харчування та напої, які ми куруємо, є швидкопсувними, а іноді мають короткий термін зберігання, всі товари, придбані через SakuraTails, є остаточними і не підлягають поверненню.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Чи є у вас фізичні магазини?</button>
            <div class="faq-answer">
                <p>Ні, ми є інтернет-магазином і здійснюємо продажі виключно онлайн. Це дозволяє нам пропонувати широкий асортимент продукції за вигідними цінами.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Як я можу відстежити своє замовлення?</button>
            <div class="faq-answer">
                <p>Після відправлення замовлення ви отримаєте електронного листа з трекінг-номером. Ви можете відстежувати своє замовлення на сайті транспортної компанії, використовуючи цей номер.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Чи можу я змінити своє замовлення після його оформлення?</button>
            <div class="faq-answer">
                <p>Якщо ваше замовлення ще не відправлено, ви можете внести зміни, зв'язавшись з нашою службою підтримки клієнтів якомога швидше. Після відправлення замовлення зміни неможливі.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Які країни ви обслуговуєте?</button>
            <div class="faq-answer">
                <p>На даний момент ми обслуговуємо клієнтів в Україні. Ми працюємо над розширенням нашої географії доставки.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Чи надаєте ви знижки на великі замовлення?</button>
            <div class="faq-answer">
                <p>Так, ми пропонуємо знижки на великі замовлення. Будь ласка, зв'яжіться з нами для отримання детальної інформації про умови знижок.</p>
            </div>
        </div>


        <div class="faq-item">
            <button class="faq-question">Як зв'язатися з вашою службою підтримки клієнтів?</button>
            <div class="faq-answer">
                <p>Ви можете зв'язатися з нами за допомогою форми зворотного зв'язку на сайті, електронної пошти або за телефоном, вказаним на сторінці контактів. Ми завжди раді допомогти вам!</p>
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