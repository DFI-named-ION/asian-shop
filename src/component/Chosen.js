import React, {useContext, useEffect, useState} from 'react';


import PriceGood from '../images/icons/price-good.svg';
import Transport from '../images/icons/transport-good.svg';
import Quality from '../images/icons/quality-good.svg';
import RedPen from '../images/icons/redPen.svg';
import StarRespose from '../images/icons/star-respose.svg';
import HeartOrder from '../images/icons/heart-black.svg';
import SpreadOrder from '../images/icons/spread-order.svg';
import Header from '../component/Header';
import Footer from '../component/Footer';


function App() {
    return <PriceGood />;
    return <Transport />;
    return <Quality />;
    return <RedPen />;
    return <StarRespose />;
    return <HeartOrder />;
    return <SpreadOrder />;
    return <Header />;
    return <Footer />;
  }

  export default function ReviewsSeller() {

    return (
        <body className='reviews-body'>
        <><><header>
              <Header/>
          </header>
              <main className='reviews-main'>
                <div className='title-reviews-div'>
            <div>
            <h2>
                Обране
            </h2>
            </div>

            <div className='menu-reviews-div'>
                <div>
                    <button className='menu-button-reviews menu-button-reviews-border'>За рейтингом</button>
                    <button className='menu-button-reviews'>Дешевше</button>
                    <button className='menu-button-reviews'>Дорожче</button>
                    <button className='menu-button-reviews'>Наявне</button>
                </div>
            </div>
                </div>

                {/* Замовлення відсутні */}

                {/* <h1 className='h1-reviews'>Твоя історія замовлень<br/> поки що порожня</h1>

                <p className='text-client-reviews'>Давай зробимо перше замовлення? Подивись наш<br/> каталог - ти обов’язково щось знайдеш!</p>

                <button className='catalog-reviews'>Каталог</button> */}

                {/* Замовлення присутні */}

                <div className='boxes-order-div'>
                    <div className='box-order-div'>
                        <div className='img-order-div'>
                            <div>
                            </div>
                        </div>
                        <div>
                        <p className='text-order'>Назва продукції</p>
                        <p className='text-order text-order-margin'>Дата замовлення</p>
                        <p className='text-order text-order-green'>Отримано</p>
                        </div>

                        <div>
                            <div className='stars-order'>
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            </div>

                            <div>
                            <p className='text-order text-order-black'>Ціна</p>
                            </div>

                        </div>

                        <div className='heart-and-spread'>
                            <div>
                        <img src={HeartOrder} />
                            </div>
                            <div>
                        <img className='spread-order' src={SpreadOrder} />
                            </div>
                        </div>
                    </div>

                    <div className='box-order-div'>
                        <div className='img-order-div'>
                            <div>
                            </div>
                        </div>
                        <div>
                        <p className='text-order'>Назва продукції</p>
                        <p className='text-order text-order-margin'>Дата замовлення</p>
                        <p className='text-order text-order-green'>Отримано</p>
                        </div>

                        <div>
                            <div className='stars-order'>
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            </div>

                            <div>
                            <p className='text-order text-order-black'>Ціна</p>
                            </div>

                        </div>

                        <div className='heart-and-spread'>
                            <div>
                        <img src={HeartOrder} />
                            </div>
                            <div>
                        <img className='spread-order' src={SpreadOrder} />
                            </div>
                        </div>
                    </div>

                    <div className='box-order-div'>
                        <div className='img-order-div'>
                            <div>
                            </div>
                        </div>
                        <div>
                        <p className='text-order'>Назва продукції</p>
                        <p className='text-order text-order-margin'>Дата замовлення</p>
                        <p className='text-order text-order-green'>Отримано</p>
                        </div>

                        <div>
                            <div className='stars-order'>
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            </div>

                            <div>
                            <p className='text-order text-order-black'>Ціна</p>
                            </div>

                        </div>

                        <div className='heart-and-spread'>
                            <div>
                        <img src={HeartOrder} />
                            </div>
                            <div>
                        <img className='spread-order' src={SpreadOrder} />
                            </div>
                        </div>
                    </div>

                    <div className='box-order-div'>
                        <div className='img-order-div'>
                            <div>
                            </div>
                        </div>
                        <div>
                        <p className='text-order'>Назва продукції</p>
                        <p className='text-order text-order-margin'>Дата замовлення</p>
                        <p className='text-order text-order-green'>Отримано</p>
                        </div>

                        <div>
                            <div className='stars-order'>
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            <img src={StarRespose} />
                            </div>

                            <div>
                            <p className='text-order text-order-black'>Ціна</p>
                            </div>

                        </div>

                        <div className='heart-and-spread'>
                            <div>
                        <img src={HeartOrder} />
                            </div>
                            <div>
                        <img className='spread-order' src={SpreadOrder} />
                            </div>
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