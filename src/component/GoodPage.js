import React, {useContext, useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import Modal from 'react-modal';

import Chips from '../images/img/chips-good.png';
import PriceGood from '../images/icons/price-good.svg';
import Transport from '../images/icons/transport-good.svg';
import Quality from '../images/icons/quality-good.svg';
import RedPen from '../images/icons/redPen.svg';
import StarRespose from '../images/icons/star-respose.svg';
import Spread from '../images/icons/spread-order.svg';
import Attach from '../images/icons/attach.svg';
import Arrow from '../images/icons/arrowLeft.svg';
import CheckMark from '../images/icons/check-mark-green.svg';
import Header from '../component/Header';
import Footer from '../component/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function App() {
    return <Chips />;
    return <PriceGood />;
    return <Transport />;
    return <Quality />;
    return <RedPen />;
    return <StarRespose />;
    return <Attach />;
    return <Arrow />;
    return <CheckMark />;
    return <Header />;
    return <Footer />;
  }

  export default function GoodPage() {
    const [modalIsOpen_1, setModalIsOpen_1] = useState(false);
    const openModal_1 = () => {
        setModalIsOpen_1(true);
      };

      const [modalIsOpen_2, setModalIsOpen_2] = useState(false);
      const openModal_2 = () => {
          setModalIsOpen_2(true);
        };

         const [modalIsOpen_3, setModalIsOpen_3] = useState(false);
      const openModal_3 = () => {
          setModalIsOpen_3(true);
        };

      const closeModal_1 = () => {
        setModalIsOpen_1(false);
      };

      const closeModal_2 = () => {
        setModalIsOpen_2(false);
      };

      const closeModal_3 = () => {
        setModalIsOpen_3(false);
      };

    const [activeTab, setActiveTab] = useState('composition');

    const renderContent = () => {
      switch (activeTab) {
        case 'composition':
          return <div>
          <p>Інгридієнти: Секрет, проте не містить молока, горіхів та глютену.</p>
      </div>;
        case 'information':
          return <div>
                    <p>
                        Чи містить в собі глютен: {product.isglutenfree ? ("Ні") : ("Так")}.
                        <br/>
                        Чи є органічним: {!product.isorganic ? ("Ні") : ("Так")}.
                        <br/>
                        Чи є веганським: {!product.isvegan ? ("Ні") : ("Так")}.
                        <br/>
                        Чи містить ГМО: {product.isgmofree ? ("Ні") : ("Так")}.
                        <br/>
                        Чи містить лактозу: {product.islactosefree ? ("Ні") : ("Так")}.
                        <br/>
                        Чи містить цукор: {product.issugarfree ? ("Ні") : ("Так")}.
                        <br/>
                        Чи є низько калорійним: {!product.islowcalories ? ("Ні") : ("Так")}.
                        <br/>
                        Чи містить барвники: {product.isdyesfree ? ("Ні") : ("Так")}.
                        {/* <br/><br/> 
                        Алергени: Містить картоплю. Вироблено на підприємстві, що працює з молоком, соєю та пшеницею.
                        <br/><br/>
                        Поживна цінність (на одну порцію, приблизно 28 г): <br/>Калорії: 150, загальний жир: 9 г, натрій: 180 мг, білок: 2 г. */} {/* where to get this info, huh?? */}
                    </p>
                </div>;
        case 'reviews':
          return <div>
          <div className='add-response-button-div'>
              <button onClick={openModal_1}>Залишити відгук <img src={RedPen}></img></button>
          </div>

          <Modal isOpen={modalIsOpen_1} onRequestClose={closeModal_1} className='background-good-modal-div'>
                    <div className='modal-good-page-div'> 
                    <button onClick={closeModal_1} className='close-modal-button close-modal-good-button'></button>
                    <div className='title-modal-good-page'>
                        <h2>Ваша думка дуже важлива для нас</h2>
                    </div>

                    <div className='pos-neg-button'>
                        <div>
                        <button className='pos-button'>Відгук</button>
                        </div>

                        <div>
                        <button className='neg-button' onClick={openModal_2}>Скарга</button>
                        </div>

                        <Modal isOpen={modalIsOpen_2} onRequestClose={closeModal_1} className='background-good-modal-div-plus'>
                    <div className='modal-good-page-div-plus'> 
                    <button onClick={closeModal_1} className='close-modal-button close-modal-good-button close-modal-good-button-plus'></button>
                    <div className='left-arrow-good' onClick={closeModal_2}>
                    <img src={Arrow} id='arrow'></img>
                    </div>
                    <div className='title-modal-good-page'>
                        <h2>Залиште відгук про наш товар</h2>
                    </div>
                   

                    <div className='pos-neg-button'>
                        <div>
                        <button className='neg-button question-button'>Пропозиція</button>
                        </div>

                        <div>
                        <button className='neg-button question-button'>Скарга</button>
                        </div>
                    </div>

                    <div className='inform-in-product-modal'>
                        <p>Інформація про продукт</p>
                    </div>

                    <div className='input-good-modal'>
                        <div>
                            <div>
                                <p>Назва продукту, вага <span>*</span></p>
                            </div>
                            <div>
                                <input type='text'></input>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>Причина скарг</p>
                            </div>
                            <div>
                                <input type='text'></input>
                            </div>
                        </div>
                    </div>

                    <div className='input-good-modal'>
                        <div>
                            <div>
                                <p>Час виготовлення</p>
                            </div>
                            <div>
                                <input type='text'></input>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>Дата виготовлення продукту</p>
                            </div>
                            <div>
                                <input type='text'></input>
                            </div>
                        </div>
                    </div>

                    <div className='input-good-modal'>
                        <div>
                            <div>
                                <p>Дата покупки</p>
                            </div>
                            <div>
                                <input type='text'></input>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>Термін придатності</p>
                            </div>
                            <div>
                                <input type='text'></input>
                            </div>
                        </div>
                    </div>

                    <div className='input-good-modal'>
                        <div>
                            <div>
                                <p>Хто, крім Вас, їв цей продукт?</p>
                            </div>
                            <div>
                                <input type='text'></input>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>Дата споживання</p>
                            </div>
                            <div>
                                <input type='text'></input>
                            </div>
                        </div>
                    </div>

                    <div className='input-good-modal-long'>
                    <div>
                                <p>Де, в яких умовах і протягом якого періоду часу споживач зберігав продукт?</p>
                            </div>
                            <div>
                                <input type='text'></input>
                            </div>
                    </div>

                    <div className='checkbox-good-modal-box'>
                        <div className='subcheckbox-good-modal'>
                            <div>
                                <input type='checkbox' className='checkbox-good-modal'></input>
                            </div>
                            <div>
                            <p>Ви зберегли чек?</p>
                            </div>
                        </div>

                        <div className='subcheckbox-good-modal'>
                        <div>
                                <input type='checkbox' className='checkbox-good-modal'></input>
                            </div>
                            <div>
                            <p>Чи зберегли ви товар або його частину, упаковку?</p>
                            </div>
                        </div>
                    </div>
                   

                    <div className='attach-file-modal'>
                        <div>
                        <img src={Attach}></img>
                        </div>
                        <div>
                            <p>Прикріпити файл</p>
                        </div>
                    </div>

                    <div className='file-format-modal'>
                        <p>Формат файлу: jpg, jpeg, png (максимальний розмір 10 МБ)</p>
                    </div>

                    <div className='subcheckbox-good-width'>
                        <div>
                                <input type='checkbox' className='checkbox-good-modal'></input>
                            </div>
                            <div>
                            <p>Я даю згоду на обробку персональних даних</p>
                            </div>
                        </div>

                    <div className='button-good-page'>
                        <button>Відправити</button>
                    </div>
                    </div>
                    </Modal>
                    </div>

                    <div className='full-stars-good-page-modal'>
                      <div className='rating-group-good-page-modal'>
                   <input name="fst" value="0" type="radio" disabled checked />
            
                    <label for="fst-1">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                   </label>
                   <input name="fst" id="fst-1" value="1" type="radio" />
                       
                   <label for="fst-2">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke="#182531" stroke-width="30" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                   </label>
                   <input name="fst" id="fst-2" value="2" type="radio" />
          
                   <label for="fst-3">
                       <svg xmlns="http://www.w3.org/2000/svg" stroke="#182531" stroke-width="30" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                   </label>
                   <input name="fst" id="fst-3" value="3" type="radio" />
                         
                   <label for="fst-4">
                       <svg xmlns="http://www.w3.org/2000/svg" stroke="#182531" stroke-width="30" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                   </label>
                   <input name="fst" id="fst-4" value="4" type="radio" />
                    
                    <label for="fst-5">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke="#182531" stroke-width="30" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                    </label>
                    <input name="fst" id="fst-5" value="5" type="radio" />
                    </div>
                    </div>

                    <div className='query-modal-title'>
                        <p>Ваш відгук</p>
                    </div>

                    <div className='block-query-modal'>
                        <textarea/>
                    </div>

                    <div className='attach-file-modal'>
                        <div>
                        <img src={Attach}></img>
                        </div>
                        <div>
                            <p>Прикріпити файл</p>
                        </div>
                    </div>

                    <div className='file-format-modal'>
                        <p>Формат файлу: jpg, jpeg, png (максимальний розмір 10 МБ)</p>
                    </div>

                    <div className='button-good-page'>
                        <div>
                        <button>Відправити</button>
                        </div>
                    </div>
                    </div>
                    </Modal>

          <div className='respose-block'>
              <h5>Нейлон</h5>
              <div className='respose-stars'>
              <img src={StarRespose}></img>
              <img src={StarRespose}></img>
              <img src={StarRespose}></img>
              <img src={StarRespose}></img>
              <img src={StarRespose}></img>
              </div>
              <p>Чіпси зі смаком гострого лобстера – це сміливе поєднання морських делікатесів і пікантності. Хрусткі та смачні, вони подарують яскраві враження, особливо для любителів оригінальних смаків. Справжнє задоволення для гурманів!</p>
              <img className='img-respose' src={Chips}></img>
          </div>
      </div>;
        default:
          return null;
      }
    }

    const [cartItems, setCartItems] = useState([]);
        useEffect(() => {
        const savedCartItems = Cookies.get('cart');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
        }, []);

        const addToCart = (item) => {
        const updatedCart = [...cartItems, { name: item.name, class: item.class, price: item.price, img: item.img, qt: 1}];
        setCartItems(updatedCart);
            Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 });
    };

    const { article } = useParams();
    const [pending, setPending] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/getProduct/${article}`)
        .then(response => {
            console.log(response.data);
            setProduct(response.data);
        })
        .then(() => {
            setPending(false);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <body className='good-body'>
            <>
                <>
                    <header>
                        <Header/>
                    </header>
                    <main>
                        <section className='section-good-page'>
                            {pending ? (
                                <div className='mx-auto text-center' style={{marginTop: "100px"}}>
                                    <p>Loading...</p>
                                </div>
                            ) : (
                                <>
                                    <div className='left-good-page'>
                                        <div className='img-good-page'>
                                            <img src={product.photourls[0]}></img>
                                        </div>
                                    </div>

                                    <div className='right-good-page'>
                                        <div className='nav-top-good'>
                                            <p>Каталог<span>/</span>{product.category}<span>/</span>{product.subcategory}</p>
                                        </div>
                                        <div className='full-stars-good-page'>
                                            <div className='rating-group rating-group-good'>
                                                <div className='stars-good-page'>
                                                    {[1, 2, 3, 4, 5].map(star => {
                                                        let fillPercentage = 0;

                                                        const rating = product.rating;
                        
                                                        if (rating >= star - 0.75 && rating < star - 0.25) {
                                                            fillPercentage = 50;
                                                        } else if (rating >= star - 0.25 && rating < star) {
                                                            fillPercentage = 100;
                                                        } else if (rating >= star) {
                                                            fillPercentage = 100;
                                                        }

                                                        return (
                                                            <>
                                                                <label htmlFor={`fst-${star}`}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke="#182531" strokeWidth="30">
                                                                        <defs>
                                                                            <clipPath id={`clip-${star}`}>
                                                                                <rect x="0" y="0" width={`${fillPercentage}%`} height="100%" />
                                                                            </clipPath>
                                                                        </defs>
                                                                        <path
                                                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                                            style={{fill: "transparent"}}
                                                                        />
                                                                        <path
                                                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                                            fill="#182531"
                                                                            clipPath={`url(#clip-${star})`}
                                                                        />
                                                                    </svg>
                                                                </label>
                                                                <input name={`fst-${star}`} id={`fst-${star}`} value={star} type="radio" />
                                                            </>
                                                        );
                                                    })}
                                                </div>
                                
                                                <p className='modal-reviews-text'>1 відгуки</p>

                                                <button className='spread-button spread-button-good'>
                                                    <img src={Spread}></img>
                                                </button>
                                            </div>
                                        </div>

                                        <div className='title-good-page'>
                                            <h2>
                                                {product.title}  
                                                <span>Код: {product.article}</span>
                                            </h2>
                                        </div>

                                        <div className='price-good-page'>
                                            <p>€{product.price}<span><span className='crossed-out-good'>€8.99</span>22% OFF</span></p>
                                        </div>

                                        <div>
                                            {/* <button className='add-basket-good-button' onClick={() =>addToCart({ name: 'Good name', price: 1.00, img: "./chips-good.png"})}>Додати до кошику</button> */}
                                            <button className='add-basket-good-button' onClick={openModal_3}>Додати до кошику</button>
                                        </div>

                                        <Modal isOpen={modalIsOpen_3} onRequestClose={closeModal_3} className='background-good-modal-basket'>
                                            <div className='modal-good-page-basket'> 
                                                <button onClick={closeModal_3} className='close-modal-button close-modal-good-button close-modal-good-button-basket'></button>
                                                <div className='header-modal-basket'>
                                                    <div>
                                                        <img src={CheckMark}></img>
                                                    </div>
                                                    <div>
                                                        <h2>
                                                            Додано до кошику
                                                        </h2>
                                                    </div>
                                                </div>

                                                <div className='main-modal-basket'>
                                                    <div className='img-modal-basket'>

                                                    </div>
                                                    <div className='text-modal-basket'>
                                                        <div>
                                                            <h3>Name</h3>
                                                        </div>
                                                        <div>
                                                            <p>Перші 15 слів опису продукту</p>
                                                        </div>
                                                        <div>
                                                            <p>Кількість: 1</p>
                                                        </div>
                                                        <div>
                                                            <p className='price-modal-basket'>Ціна: <span>$25,6</span></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='buttons-modal-basket'>
                                                    <div>
                                                        <button className='buy-basket-modal' onClick={closeModal_3}>Продовжити покупки</button>
                                                    </div>
                                                    <div>
                                                        <button className='check-basket-modal'>Переглянути корзину</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal>

                                        <div className='advantages-good'>
                                            <div className='subadvantages-good'>
                                                <div><img src={Transport}></img></div>
                                                <div><p>Безкоштовна доставка на суму понад 1000 грн</p></div>
                                            </div>
                                            <div className='subadvantages-good'>
                                                <div><img src={PriceGood}></img></div>
                                                <div><p>Щотижня нова продукція</p></div>
                                            </div>
                                            <div className='subadvantages-good'>
                                                <div><img src={Quality}></img></div>
                                                <div><p>Гарантована свіжість</p></div>
                                            </div>
                                        </div>

                                        <div className='text-good-page'>
                                            <p>{product.description}</p>
                                        </div>

                                        <div className="menu-good">
                                            <div className="tabs-good">
                                                <div>
                                                    <button onClick={() => setActiveTab('composition')} id='button-tabs-good' className={activeTab === 'composition' ? 'active' : ''}>Склад продукту</button>
                                                </div>
                                                <div>
                                                    <button onClick={() => setActiveTab('information')} id='button-tabs-good' className={activeTab === 'information' ? 'active' : ''}>Інформація</button>
                                                </div>
                                                <div>
                                                    <button onClick={() => setActiveTab('reviews')} id='button-tabs-good' className={activeTab === 'reviews' ? 'active' : ''}>Відгуки (1)</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-good-page">
                                            {renderContent()}
                                        </div>
                                    </div>
                                </>
                            )}
                        </section>
                    </main>
                </>
                <footer>
                    <Footer/>
                </footer>
            </>
        </body>
    )
}