import React, {useContext, useEffect, useState} from 'react';

import ArrowLeft from '../images/icons/arrow-left-payment.svg';
import Basket from '../images/icons/basket-grey.svg';
import Visa from '../images/icons/visa-big.svg';
import PayPal from '../images/icons/paypal-big.svg';
import Mastercard from '../images/icons/mastercard-big.svg';
import Header from '../component/Header';
import Footer from '../component/Footer';


function App() {
    return <ArrowLeft />;
    return <Visa />;
    return <PayPal />;
    return <Mastercard />;
    return <Basket />;
    return <Header />;
    return <Footer />;
  }

  export default function GoodPage() {
    return (
        <body className='payment-body'>
        <><><header>
             <Header/>
          </header>
              <main>
            <section className='section-payment-page'>
                <div className='left-payment-page'>
                  <div className='title-payment'><h2>Оплата</h2></div>

                  <div className='subtitle-payment'>
                    <div>
                    <a>
                    <img src={ArrowLeft} className='img-arrow-payment'></img>
                    </a>
                    </div>
                    <div>
                    <a>
                        <p>Продовжити покупки</p>
                    </a>
                    </div>
                  </div>

                  <div className='goods-payment'>
                    <div className='good-payment'>
                        <div className='good-payment-plus-left'>
                            <div className='img-payment-good'></div>
                            <div>
                                <h4 className='title-good-payment'>Чипси</h4>
                                <p>Снеки</p>
                            </div>
                        </div>

                        <div className='good-payment-plus-right'>
                            <div className='plus-minus-payment'>
                              <p>
                              +
                              </p>
                            </div>
                            <div className='number-good-payment'>
                              <input type='number' value="1">
                              </input>
                            </div>
                            <div className='plus-minus-payment'>
                            <p>
                              -
                              </p>
                              </div>
                              <div className='price-payment'>
                            <p>€25.60</p>
                          </div>
                          <div className='dump-payment'>
                          <img src={Basket}></img>
                          </div>
                         
                        </div>
                    </div>

                    <div className='good-payment'>
                        <div className='good-payment-plus-left'>
                            <div className='img-payment-good'></div>
                            <div>
                                <h4 className='title-good-payment'>Чипси</h4>
                                <p>Снеки</p>
                            </div>
                        </div>

                        <div className='good-payment-plus-right'>
                            <div className='plus-minus-payment'>
                              <p>
                              +
                              </p>
                            </div>
                            <div className='number-good-payment'>
                              <input type='number' value="1">
                              </input>
                            </div>
                            <div className='plus-minus-payment'>
                            <p>
                              -
                              </p>
                              </div>
                              <div className='price-payment'>
                            <p>€25.60</p>
                          </div>
                          <div className='dump-payment'>
                          <img src={Basket}></img>
                          </div>
                         
                        </div>
                    </div>

                    <div className='good-payment'>
                        <div className='good-payment-plus-left'>
                            <div className='img-payment-good'></div>
                            <div>
                                <h4 className='title-good-payment'>Чипси</h4>
                                <p>Снеки</p>
                            </div>
                        </div>

                        <div className='good-payment-plus-right'>
                            <div className='plus-minus-payment'>
                              <p>
                              +
                              </p>
                            </div>
                            <div className='number-good-payment'>
                              <input type='number' value="1">
                              </input>
                            </div>
                            <div className='plus-minus-payment'>
                            <p>
                              -
                              </p>
                              </div>
                              <div className='price-payment'>
                            <p>€25.60</p>
                          </div>
                          <div className='dump-payment'>
                          <img src={Basket}></img>
                          </div>
                         
                        </div>
                    </div>

                    <div className='good-payment'>
                        <div className='good-payment-plus-left'>
                            <div className='img-payment-good'></div>
                            <div>
                                <h4 className='title-good-payment'>Чипси</h4>
                                <p>Снеки</p>
                            </div>
                        </div>

                        <div className='good-payment-plus-right'>
                            <div className='plus-minus-payment'>
                              <p>
                              +
                              </p>
                            </div>
                            <div className='number-good-payment'>
                              <input type='number' value="1">
                              </input>
                            </div>
                            <div className='plus-minus-payment'>
                            <p>
                              -
                              </p>
                              </div>
                              <div className='price-payment'>
                            <p>€25.60</p>
                          </div>
                          <div className='dump-payment'>
                          <img src={Basket}></img>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className='right-payment-page'>
                    <div className='title-payment-block'>
                        <h3>Відомості картки</h3>
                    </div>
                    
                    <div className='type-card-payment'>
                        <p>Тип картки</p>
                    </div>

                    <div className='card-payment'>
                        <div><img src={Visa} className='visa-payment'></img></div>
                        <div><img src={PayPal} className='paypal-payment'></img></div>
                        <div><img src={Mastercard} className='mastercard-payment'></img></div>
                    </div>

                    <div className='line-input-payment'>
                        <div className='title-input-payment'>
                            <p>
                                Ім'я на карті
                            </p>
                        </div>
                        <div>
                            <input type='text' placeholder="Ім'я на картці"></input>
                        </div>
                    </div>
                    <div className='line-input-payment'>
                        <div className='title-input-payment'>
                            <p>
                                Номер карти
                            </p>
                        </div>
                        <div>
                            <input type='number' placeholder="Номер карти"></input>
                        </div>
                    </div>
                    <div className='line-input-payment line-input-payment-bottom'>
                        <div>
                        <div className='title-input-payment'>
                            <p>
                                Кінцевий термін дії
                            </p>
                        </div>
                        <div>
                            <input type='number' placeholder="09 / 2026"></input>
                        </div>
                        </div>

                        <div>
                        <div className='title-input-payment'>
                            <p>
                                CVV
                            </p>
                        </div>
                        <div>
                            <input type='number' placeholder="123"></input>
                        </div>
                        </div>

                        
                    </div>
                    <div className='checkbox-payment'>
                            <div>
                                <input type='checkbox'></input>
                            </div>
                            <div>
                                <p>Зберегти для наступних замовлень</p>
                            </div>
                        </div>

                        <div className='button-payment'>
                            <button>Оплатити</button>
                        </div>
                </div>
 
            </section>
              </main></>
    
              <footer>
               <Footer/>
              </footer></>
              </body>
    
    
      )
  }