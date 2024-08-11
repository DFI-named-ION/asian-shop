import React, {useContext, useEffect, useState} from 'react';

import StarRespose from '../images/icons/star-respose.svg';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';

function App() {
    return <StarRespose />;
    return <Header />;
    return <Footer />;
  }

  export default function ReviewsSeller() {

    const navigate = useNavigate();

    const handleMyReviewsClick = () => { navigate("/reviews-my") };

    const handleSellerReviewsClick = () => { navigate("/reviews-sellers") };

    return (
        <body className='reviews-body'>
        <><><header>
              <Header/>
          </header>
              <main>
                <div className='title-reviews-div'>
            <div>
            <h2>
                Відгуки
            </h2>
            </div>

            <div className='menu-reviews-div'>
                <div>
                    <button className='menu-button-reviews' onClick={handleSellerReviewsClick}>Про продавців</button>
                    <button className='menu-button-reviews menu-button-reviews-border' onClick={handleMyReviewsClick}>Про мене</button>
                </div>
            </div>
                </div>

                {/* Відгуки відсутні */}

                <h1 className='h1-reviews'>Рейтинг не сформований</h1>

                <p className='text-client-reviews'>За останній рік ви не здійснювали замовлення <br/>
або продавці не залишали відгуки про вас</p>

                <button className='catalog-reviews'>Каталог</button>

                <a className='text-client-reviews-a' href=''><p className='text-client-reviews'>Що це за рейтинг?</p></a>
                
              </main></>
    
              <footer>
                <Footer/>
              </footer></>
              </body>
    
    
      )
  }