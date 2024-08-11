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
                    <button className='menu-button-reviews menu-button-reviews-border' onClick={handleSellerReviewsClick}>Про продавців</button>
                    <button className='menu-button-reviews' onClick={handleMyReviewsClick}>Про мене</button>
                </div>
            </div>
                </div>

                {/* Відгуки відсутні */}

                {/* <h1>Ви не залишили відгуки <br/>
                про продавців</h1>

                <p>Поділіться своєю думкою з іншими покупцями <br/><br/>
                Відгуки допомагають продавцям ставати краще</p> */}

                {/* Відгуки присутні */}

                <div className='reviews-block'>
                    <div className='reviews-top-block'>
                        <div className='stars-reviews-div'>
                        <img src={StarRespose} />
                        <img src={StarRespose} />
                        <img src={StarRespose} />
                        <img src={StarRespose} />
                        <img src={StarRespose} />
                        </div>
                        <div>
                            <p className='text-reviews'>дд / мм / рррр</p>
                        </div>
                    </div>
                    <div className='reviews-bottom-block'>
                        <div>
                            <p className='text-reviews-long'>"Мені дуже сподобалися чипси з раком від SakuraTails! Несподіване поєднання смаків, але воно виявилося дуже вдалим. <br/>Великий вибір продуктів на сайті дозволив мені знайти багато цікавих новинок для себе. <br/>Рекомендую всім любителям азіатської кухні спробувати!"</p>
                        </div>
                        <div>
                            <p>Код: 1</p>
                        </div>
                    </div>
                </div>

                

              </main></>
    
              <footer>
               <Footer/>
              </footer></>
              </body>
    
    
      )
  }