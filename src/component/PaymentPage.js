import React, {useContext, useEffect, useState} from 'react';

import ArrowLeft from '../images/icons/arrow-left-payment.svg';
import Basket from '../images/icons/basket-grey.svg';
import Visa from '../images/icons/visa-big.svg';
import PayPal from '../images/icons/paypal-big.svg';
import Mastercard from '../images/icons/mastercard-big.svg';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Cookies from 'js-cookie';


function App() {
    return <ArrowLeft />;
    return <Visa />;
    return <PayPal />;
    return <Mastercard />;
    return <Basket />;
    return <Header />;
    return <Footer />;
  }
  
  let assetsPath = require.context('../images/img', false, /\.(png|jpe?g|svg)$/); 
  const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(() => {
        const savedCartItems = Cookies.get('cart');
        if (savedCartItems) {
          setCartItems(JSON.parse(savedCartItems));
          calculateTotal(JSON.parse(savedCartItems));
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);

    const calculateTotal = (items) => {
      const totalSum = items.reduce((acc, item) => acc + item.price * item.qt, 0);
      setTotal(totalSum.toFixed(2));
    };

    const increaseQuantity = (index) => {
      const updatedItems = [...cartItems];
      updatedItems[index].qt += 1;
      setCartItems(updatedItems);
      Cookies.set('cart', JSON.stringify(updatedItems)); // Обновляем cookie
      calculateTotal(updatedItems); // Пересчитываем сумму
    };
  
    const decreaseQuantity = (index) => {
      const updatedItems = [...cartItems];
      if (updatedItems[index].qt > 1) {
        updatedItems[index].qt -= 1;
        setCartItems(updatedItems);
        Cookies.set('cart', JSON.stringify(updatedItems)); // Обновляем cookie
        calculateTotal(updatedItems); // Пересчитываем сумму
      }
    };
  
    const removeItem = (index) => {
      const updatedItems = [...cartItems];
      updatedItems.splice(index, 1);
      setCartItems(updatedItems);
      Cookies.set('cart', JSON.stringify(updatedItems)); // Обновляем cookie
      calculateTotal(updatedItems); // Пересчитываем сумму
    };
    return (
      <div className='goods-payment'>
        {cartItems.map((item, index) => (
          <div className='good-payment'>
          <div className='good-payment-plus-left'>
              <img className='img-payment-good' src={assetsPath(item.img)}s></img>
              <div>
                  <h4 className='title-good-payment'>{item.name}</h4>
                  <p>{item.class}</p>
              </div>
          </div>

            <div className='good-payment-plus-right'>
              <div className='plus-minus-payment' onClick={() => increaseQuantity(index)}>
                <p>
                +
                </p>
              </div>
              <div className='number-good-payment'>
                <input type='number' value={item.qt} readOnly>
                </input>
              </div>
              <div className='plus-minus-payment' onClick={() => decreaseQuantity(index)}>
                <p>
                  -
                </p>
              </div>
              <div className='price-payment'>
                <p>€{item.price.toFixed(2)}</p>
              </div>
              <div className='dump-payment' onClick={() => removeItem(index)}>
              <img src={Basket}></img>
            </div>
           
          </div>
      </div>
          ))}
        </div>
    );
  };


  export default function PaymentPage() {
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

                  <Cart/>
                  
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