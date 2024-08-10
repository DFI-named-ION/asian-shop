import React, { useEffect, useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Cakes from '../images/market-menu-img/Cakes.png';
import Chips from '../images/market-menu-img/Chips.png';
import Choko from '../images/market-menu-img/Choko.png';
import Coffee from '../images/market-menu-img/Coffee.png';
import Cookies from '../images/market-menu-img/Cookies.png';
import Creckers from '../images/market-menu-img/Creckers.png';
import Gummy from '../images/market-menu-img/Gummy.png';
import Juice from '../images/market-menu-img/Juice.png';
import Milk from '../images/market-menu-img/Milk.png';
import Mochi from '../images/market-menu-img/Mochi.png';
import Nuts from '../images/market-menu-img/Nuts.png';
import Soda from '../images/market-menu-img/Soda.png';
import Sport from '../images/market-menu-img/Sport.png';
import Tea from '../images/market-menu-img/Tea.png';
import Water from '../images/market-menu-img/Water.png';
import Bakery from '../images/market-menu-img/Bakery.png';
import Cari from '../images/market-menu-img/Cari.png';
import Miso from '../images/market-menu-img/Miso.png';
import Noodles from '../images/market-menu-img/Noodles.png';
import Rice from '../images/market-menu-img/Rice.png';
import Seafood from '../images/market-menu-img/Seafood.png';
import Soy from '../images/market-menu-img/Soy.png';
import SpicySouce from '../images/market-menu-img/Spicy-souce.png';
import Spicy from '../images/market-menu-img/Spicy.png';
import Teokbokki from '../images/market-menu-img/Teokbokki.png';
import Vinegar from '../images/market-menu-img/Vinegar.png';
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

import { useAuth } from './providers/AuthProvider';


function App() {
    return <Cakes />;
    return <Chips />;
    return <Choko />;
    return <Coffee />;
    return <Cookies />;
    return <Creckers />;
    return <Gummy />;
    return <Milk />;
    return <Mochi />;
    return <Juice />;
    return <Nuts />;
    return <Soda />;
    return <Sport />;
    return <Tea />;
    return <Water />;
    return <Logo />;
    return <Basket />;
    return <Profile />;
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
    return <Cari />;
    return <Miso />;
    return <Noodles />;
    return <Rice />;
    return <Seafood />;
    return <Soy />;
    return <SpicySouce />;
    return <Spicy />;
    return <Vinegar />;
    return <Bakery />;
}

export default function MailConfirmation() {

    const [modalIsOpenProfile, setModalIsOpenProfile] = useState(false);

    const {user} = useAuth();
    const navigate = useNavigate();

    const handleHeadClick = (e) => {
        e.preventDefault();
        if (!user) {
            navigate('/authorization');
        } else {
            setModalIsOpenProfile(!modalIsOpenProfile);
        }
    };
  
    const handleSellerProfileClick = () => {
        navigate("/seller");
    };
  
    const handleSettingsClick = () => {
        navigate("/profile-settings")
    };

    return (
        <body className='market-menu-body'>
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
                        <div className="dropdown-content-header" style={{ display: modalIsOpenProfile ? "block" : "none" }}>
                            <div>
                                <p className='head-email-dropdown'></p>
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
      
            <h1>Всі категорії</h1>
    <div class="container-market-menu">
        <div class="category-market-menu">
            <h2>Заморожені</h2>
            <div class="category-item">
                Морепродукти
                <img src={Seafood} alt="Морепродукти"/>
            </div>
            <div class="category-item">
                Випічка
                <img src={Bakery} alt="Випічка"/>
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Солодощі</h2>
            <div class="category-item">
                Шоколад
                <img src={Choko} alt="Шоколад"></img>
            </div>
            <div class="category-item">
                Моті
                <img src={Mochi} alt="Моті"></img>
            </div>
            <div class="category-item">
                Печиво
                <img src={Cookies} alt="Печиво"></img>
            </div>
            <div class="category-item">
                Торти
                <img src={Cakes} alt="Торти"></img>
            </div>
            <div class="category-item">
                Мармеладки
                <img src={Gummy} alt="Мармелад"></img>
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Закуски</h2>
            <div class="category-item">
                Чипси
                <img src={Chips} alt="Чипси"></img>
            </div>
            <div class="category-item">
                Крекери
                <img src={Creckers} alt="Крекери"></img>
            </div>
            <div class="category-item">
                Горіхи
                <img src={Nuts} alt="Горіхи"></img>
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Страви</h2>
            <div class="category-item">
                Гострі
                <img src={Spicy} alt="Гострі"/>
            </div>
            <div class="category-item">
                Локшина
                <img src={Noodles} alt="Локшина"/>
            </div>
            <div class="category-item">
                Каррі
                <img src={Cari} alt="Каррі"/>
            </div>
            <div class="category-item">
                Рис
                <img src={Rice} alt="Рис"/>
            </div>
            <div class="category-item">
                Токпоккі
                <img src={Teokbokki} alt="Токпоккі"/>
            </div>
            <div class="category-item">
                Місо
                <img src={Miso} alt="Місо"/>
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Соуси</h2>
            <div class="category-item">
                Гострі
                <img src={SpicySouce} alt="Гострі"/>
            </div>
            <div class="category-item">
                Соєвий
                <img src={Soy} alt="Шоколад"/>
            </div>
            <div class="category-item">
                Оцти
                <img src={Vinegar} alt="Оцти"/>
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Напої</h2>
            <div class="category-item">
                Газованка
                <img src={Soda} alt="Газованка"></img>
            </div>
            <div class="category-item">
                Сік
                <img src={Juice} alt="Сік"></img>
            </div>
            <div class="category-item">
                Фітнес
                <img src={Sport} alt="Фітнес"></img>
            </div>
            <div class="category-item">
                Вода
                <img src={Water} alt="Вода"></img>
            </div>
            <div class="category-item">
                Чай
                <img src={Tea} alt="Чай"></img>
            </div>
            <div class="category-item">
                Кава
                <img src={Coffee} alt="Кава"></img>
            </div>
            <div class="category-item">
                Молоко
                <img src={Milk} alt="Молоко"></img>
            </div>
        </div>
    </div>
            
        </body>
    )
}