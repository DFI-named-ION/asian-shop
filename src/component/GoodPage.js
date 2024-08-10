import React, {useContext, useEffect, useState} from 'react';

import Chips from '../images/img/chips-good.png';
import PriceGood from '../images/icons/price-good.svg';
import Transport from '../images/icons/transport-good.svg';
import Quality from '../images/icons/quality-good.svg';
import RedPen from '../images/icons/redPen.svg';
import StarRespose from '../images/icons/star-respose.svg';
import Spread from '../images/icons/spread-order.svg';
import Header from '../component/Header';
import Footer from '../component/Footer';


function App() {
    return <Chips />;
    return <PriceGood />;
    return <Transport />;
    return <Quality />;
    return <RedPen />;
    return <StarRespose />;
    return <Header />;
    return <Footer />;
  }

  export default function GoodPage() {

    const [content, setContent] = useState('Склад продукту');

    const handleMouseEnter = (section) => {
        setContent(section);
    }


    return (
        <body className='good-body'>
        <><><header>
             <Header/>
          </header>
              <main>
            <section className='section-good-page'>
                <div className='left-good-page'>
                    <div className='img-good-page'>
                    <img src={Chips}></img>
                    </div>
                </div>

                <div className='right-good-page'>
                    <div className='nav-top-good'>
                        <p>Каталог<span>/</span>Снеки<span>/</span>Чипси</p>
                    </div>
                    <div className='full-stars'>
                      <div className='rating-group rating-group-good'>
                      <div className='stars-good-page'>
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
            
                    <p className='modal-reviews-text'>1 відгуки</p>

                    <button className='spread-button spread-button-good'>
                    <img src={Spread}></img>
                    </button>
                    </div>
                    </div>

                    <div className='title-good-page'>
                        <h2>
                        Картопляні чіпси Lay's: гострі раки  
                        <span>Код: 1</span>
                        </h2>
                    </div>

                    <div className='price-good-page'>
                        <p>€6.99<span><span className='crossed-out-good'>€8.99</span>22% OFF</span></p>
                    </div>

                    <div>
                        <button className='add-basket-good-button'>Додати до кошику</button>
                    </div>

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
                        <p>Додайте трохи хвилювання до вашого перекусу з цими спокусливими гострими картопляними чіпсами з раками від Lay's! Зануртеся в пакетик і відчуйте сміливий і вогненний смак морепродуктів, що вражає уяву. Смакуйте ці чіпси самі по собі або додавайте їх до супів, салатів чи інших страв.</p>
                    </div>

<div className="menu-good">
            <div className="tabs-good">
                <div 
                    className="tab-good tab-good-left" 
                    onMouseEnter={() => handleMouseEnter('Склад продукту')}
                >
                    Склад продукту
                </div>
                <div 
                    className="tab-good tab-good-center" 
                    onMouseEnter={() => handleMouseEnter('Інформація')}
                >
                    Інформація
                </div>
                <div 
                    className="tab-good tab-good-right" 
                    onMouseEnter={() => handleMouseEnter('Відгуки')}
                >
                    Відгуки (<span>1</span>)
                </div>
            </div>
            <div className="content-good-page">
                {content === 'Склад продукту' && (
                    <div>
                        <p>Склад: Картопля, рослинна олія, гостра ракова приправа, сіль, натуральні ароматизатори, антиоксиданти.</p>
                    </div>
                )}
                {content === 'Інформація' && (
                    <div>
                        <p>Алергени: Містить картоплю. Вироблено на підприємстві, що працює з молоком, соєю та пшеницею.
                            <br/><br/>
                           Поживна цінність (на одну порцію, приблизно 28 г): <br/>Калорії: 150, загальний жир: 9 г, натрій: 180 мг, білок: 2 г.</p>
                    </div>
                )}
                {content === 'Відгуки' && (
                    <div>
                        <div className='add-response-button-div'>
                            <button>Залишити відгук <img src={RedPen}></img></button>
                        </div>

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
                    </div>
                )}
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