import React, {useContext, useEffect, useState} from 'react';

import Header from '../component/Header';
import Footer from '../component/Footer';

function App() {
    return <Header />;
    return <Footer />;
  }

  export default function GoodPage() {
    return (
        <body className='tracking-body'>
        <><><header>
              <Header/>
          </header>
              <main>
            <h2>
                Відстеження замовлення
            </h2>

            <h4>
            Введіть номер телефону для відстеження замовлення
            </h4>

            <div className='block-tracking'>
                <div>
                    <input type='tel' placeholder='+380 (066) 000 00 00' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" require></input>
                </div>
                <div>
                    <button>Шукати</button>
                </div>
            </div>

            <p>Немає! Ми не знайшли жодного замовлення за таким номером. Можливо, продавець ще не додав ЕН для відстеження замовлення. Спробуйте ще раз трішки пізніше або перевірте за іншим номером.</p>
              </main></>
    
              <footer>
               <Footer/>
              </footer></>
              </body>
    
    
      )
  }