import React, {useContext, useEffect, useState} from 'react';

import ArrowLeft from '../images/icons/arrow-left-payment.svg';
import Basket from '../images/icons/basket-grey.svg';
import Visa from '../images/icons/visa-big.svg';
import VisaWhite from '../images/icons/visa-white.svg';
import PayPal from '../images/icons/paypal-big.svg';
import Mastercard from '../images/icons/mastercard-big.svg';
import ArrowLong from '../images/icons/long-arrow-wallet.svg';
import Header from '../component/Header';
import Footer from '../component/Footer';


function App() {
    return <ArrowLeft />;
    return <Visa />;
    return <VisaWhite />;
    return <PayPal />;
    return <Mastercard />;
    return <Basket />;
    return <ArrowLong />;
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
            <section className='section-wallet-page'>
                <div className='left-payment-page'>
                  <div className='title-payment'><h2>Мій гаманець</h2></div>

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

                  <div className='right-payment-page right-payment-page-plus'>
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
                            <button>Зберегти</button>
                        </div>
                </div>
                </div>

                {/* <div className='right-wallet-page'>
                    <div className='arrow-long-wallet'>
                    <img src={ArrowLong} className='img-arrow-long'></img>
                    </div>
                    <div className='add-card-wallet'>
                        <p>Додайте картку</p>
                    </div>
                </div> */}

               <div className='right-wallet-page-card'>
                <div className='card-box-wallet'>
                    <div className='card-subbox-wallet card-subbox-wallet-visa'>
                    <div>
                        <img src={VisaWhite} className=''></img>
                        </div>
                        <div className='number-card-wallet'>
                            <div><p>1111</p></div>
                            <div><p>2222</p></div>
                            <div><p>3333</p></div>
                            <div><p>4444</p></div>
                        </div>
                        <div className='bottom-card-wallet'>
                            <div>
                                <p className='name-card-text'>Ім’я на карті</p>
                            </div>
                            <div>
                                <p className='date-card-text'>09 / 26</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-box-wallet'>
                    <div className='card-subbox-wallet card-subbox-wallet-master'>
                        <div>
                        <img src={Mastercard} className=''></img>
                        </div>
                        <div className='number-card-wallet'>
                            <div><p>1111</p></div>
                            <div><p>2222</p></div>
                            <div><p>3333</p></div>
                            <div><p>4444</p></div>
                        </div>
                        <div className='bottom-card-wallet'>
                            <div>
                                <p className='name-card-text'>Ім’я на карті</p>
                            </div>
                            <div>
                                <p className='date-card-text'>09 / 26</p>
                            </div>
                        </div>
                    </div>
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