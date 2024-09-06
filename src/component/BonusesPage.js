import React, {useContext, useEffect, useState} from 'react';

import StarRespose from '../images/icons/star-respose.svg';
import HeartOrder from '../images/icons/heart-black.svg';
import SpreadOrder from '../images/icons/spread-order.svg';
import Header from '../component/Header';
import Footer from '../component/Footer';

import { useAuth } from './providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

function App() {
    return <StarRespose />;
    return <HeartOrder />;
    return <SpreadOrder />;
    return <Header />;
    return <Footer />;
  }

  export default function ReviewsSeller() {

    const navigate = useNavigate();

    const handleCatalgClick = () => { navigate("/catalog") };

    return (
        <body className='reviews-body'>
        <><><header>
             <Header/>
          </header>
              <main className='reviews-main'>
                <div className='title-reviews-div'>
            <div>
            <h2>
                Знижки та бонуси
            </h2>
            </div>
                </div>

                <h1 className='h1-reviews'>Для вас поки що немає<br/> знижок на бонусів</h1>

                <button className='button-bonuses' onClick={handleCatalgClick}>Каталог</button>
                
              </main></>
    
              <footer>
               <Footer/>
              </footer></>
              </body>
    
    
      )
  }