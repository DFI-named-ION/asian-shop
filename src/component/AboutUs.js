import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Collapse} from 'react-collapse';

import Header from '../component/Header';
import Footer from '../component/Footer';

import { useAuth } from './providers/AuthProvider';

function App() {
    return <Header />;
    return <Footer />;
  }

  export default function AboutUs() {

    return (
        <body className='aboutUs-body'>
        <><><header>
             <Header/>
          </header>
              <main>
              <section class="welcome-about">
            <h1>Ласкаво просимо до SakuraTails!</h1>
            <div class="h2-about">
                <h2>Все почалося у</h2>
                <p>2024</p> 
            </div>
            <p>Наша компанія є вашим надійним провідником у світ захоплюючих азіатських смаків. Вибираючи SakuraTails, ви обираєте не просто їжу, а справжню культурну пригоду.</p>
        </section>

        <section class="mission-about">
            <h3>Наша місія</h3>
            <p>Ми прагнемо зробити азіатську кухню доступною кожному в Україні, пропонуючи ексклюзивний асортимент продуктів з різних куточків Азії. Від основних страв до екзотичних десертів – ми завжди маємо щось на свій смак.</p>
        </section>

        <section class="why-us-about">
            <h3>Чому ми?</h3>
            <div>
                <p class="why-reasons-about">Інноваційність: Наша особливість – коробки з різноманітним наповненням, які є чудовим способом познайомитись з азіатською кухнею. Кожна коробка – це сюрприз, який розкриває нові горизонти смаків і вражень. Це ідеальний варіант для подарунка близьким або як новий елемент вечері вдома.</p>
                <p class="why-reasons-about">Доступність: Ми робимо азіатську кухню легкодоступною, надаючи швидку доставку по всій Україні, що дозволяє вам насолоджуватися свіжими і якісними продуктами без зусиль.</p>
                <p class="why-reasons-about">Вибір: Від японських закусок до корейських соусів, та китайських локшин до тайських десертів – SakuraTails пропонує широкий спектр продуктів, які постійно оновлюються.</p>
            </div>
        </section>

        <section class="competitors-about">
            <h3>Наші конкуренти</h3>
            <p>У сфері азіатських продуктів в Україні є чимало конкурентів, однак ми відзначаємося завдяки унікальній пропозиції та високому рівню сервісу. Враховуючи бурхливий розвиток ринку, ми продовжуємо впроваджувати нові стандарти якості та вибору для наших клієнтів.</p>
            <p>Вибір SakuraTails – це більше, ніж покупка. Це ваш квиток в незабутню кулінарну подорож, яка обіцяє бути захоплюючою. Приєднуйтесь до нас у цій пригоді смаків і культур разом з SakuraTails!</p>
        </section>
              </main></>
    
              <footer>
                <Footer/>
              </footer></>
              </body>
    
    
      )
  }