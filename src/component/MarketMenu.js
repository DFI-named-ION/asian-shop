import React, { useEffect, useState, useContext, useRef } from 'react';

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
import Header from '../component/Header';

import { useNavigate } from 'react-router-dom';

export default function MailConfirmation() {

    const navigate = useNavigate();

    const handleRedirect = (category, subCategory) => {
        navigate(`/catalog/?category=${category}&subcategory=${subCategory}`);
    };

    return (
        <body className='market-menu-body'>
          <Header/>
      
            <h1>Всі категорії</h1>
    <div class="container-market-menu">
        <div class="category-market-menu">
            <h2>Заморожені</h2>
            <div class="category-item" onClick={() => { handleRedirect("category1", "subCategory1") }}>
                Морепродукти
                <img src={Seafood} alt="Морепродукти"/>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category1", "subCategory2") }}>
                Випічка
                <img src={Bakery} alt="Випічка"/>
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Солодощі</h2>
            <div class="category-item" onClick={() => { handleRedirect("category2", "subCategory1") }}>
                Шоколад
                <img src={Choko} alt="Шоколад"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category2", "subCategory2") }}>
                Моті
                <img src={Mochi} alt="Моті"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category2", "subCategory3") }}>
                Печиво
                <img src={Cookies} alt="Печиво"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category2", "subCategory4") }}>
                Торти
                <img src={Cakes} alt="Торти"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category2", "subCategory5") }}>
                Мармеладки
                <img src={Gummy} alt="Мармелад"></img>
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Закуски</h2>
            <div class="category-item" onClick={() => { handleRedirect("category3", "subCategory1") }}>
                Чипси
                <img src={Chips} alt="Чипси"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category3", "subCategory2") }}>
                Крекери
                <img src={Creckers} alt="Крекери"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category3", "subCategory3") }}>
                Горіхи
                <img src={Nuts} alt="Горіхи"></img>
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Страви</h2>
            <div class="category-item" onClick={() => { handleRedirect("category4", "subCategory1") }}>
                Гострі
                <img src={Spicy} alt="Гострі"/>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category4", "subCategory2") }}>
                Локшина
                <img src={Noodles} alt="Локшина"/>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category4", "subCategory3") }}>
                Каррі
                <img src={Cari} alt="Каррі"/>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category4", "subCategory4") }}>
                Рис
                <img src={Rice} alt="Рис"/>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category4", "subCategory5") }}>
                Токпоккі
                <img src={Teokbokki} alt="Токпоккі"/>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category4", "subCategory6") }}>
                Місо
                <img src={Miso} alt="Місо"/>
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Соуси</h2>
            <div class="category-item" onClick={() => { handleRedirect("category5", "subCategory1") }}>
                Гострі
                <img src={SpicySouce} alt="Гострі"/>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category5", "subCategory2") }}>
                Соєвий
                <img src={Soy} alt="Шоколад"/>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category5", "subCategory3") }}>
                Оцти
                <img src={Vinegar} alt="Оцти"/>
            </div>
        </div>
        <div class="category-market-menu">
            <h2>Напої</h2>
            <div class="category-item" onClick={() => { handleRedirect("category6", "subCategory1") }}>
                Газованка
                <img src={Soda} alt="Газованка"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category6", "subCategory2") }}>
                Сік
                <img src={Juice} alt="Сік"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category6", "subCategory3") }}>
                Фітнес
                <img src={Sport} alt="Фітнес"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category6", "subCategory4") }}>
                Вода
                <img src={Water} alt="Вода"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category6", "subCategory5") }}>
                Чай
                <img src={Tea} alt="Чай"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category6", "subCategory6") }}>
                Кава
                <img src={Coffee} alt="Кава"></img>
            </div>
            <div class="category-item" onClick={() => { handleRedirect("category6", "subCategory7") }}>
                Молоко
                <img src={Milk} alt="Молоко"></img>
            </div>
        </div>
    </div>
            
        </body>
    )
}