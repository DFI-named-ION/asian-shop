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
      
            <h1>Всі категорії</h1>
    <div class="container-market-menu">
        <div class="category-market-menu">
            <h2>Заморожені</h2>
            <div class="category-item">
                Морепродукти
                {/* <img src="images/Catalog.png" alt="Морепродукти"> */}
            </div>
            <div class="category-item">
                Випічка
                {/* <img src="images/Catalog.png" alt="Випічка"> */}
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
                {/* <img src="images/Catalog.png" alt="Гострі"> */}
            </div>
            <div class="category-item">
                Локшина
                {/* <img src="images/Catalog.png" alt="Локшина"> */}
            </div>
            <div class="category-item">
                Каррі
                {/* <img src="images/Catalog.png" alt="Каррі"> */}
            </div>
            <div class="category-item">
                Рис
                {/* <img src="images/Catalog.png" alt="Рис"> */}
            </div>
            <div class="category-item">
                Токпоккі
                {/* <img src="images/Catalog.png" alt="Токпоккі"> */}
            </div>
            <div class="category-item">
                Місо
                {/* <img src="images/Catalog.png" alt="Місо"> */}
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Соуси</h2>
            <div class="category-item">
                Гострі
                {/* <img src="images/Catalog.png" alt="Гострі"> */}
            </div>
            <div class="category-item">
                Соєвий
                {/* <img src={Choko} alt="Шоколад"></img> */}
            </div>
            <div class="category-item">
                Оцти
                {/* <img src="images/Catalog.png" alt="Оцти"> */}
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