import React, {useContext, useEffect, useState} from 'react';
import Modal from 'react-modal';


import Box from '../images/img/box-image.jpg';
import PriceGood from '../images/icons/price-good.svg';
import Transport from '../images/icons/transport-good.svg';
import Quality from '../images/icons/quality-good.svg';
import RedPen from '../images/icons/redPen.svg';
import StarRespose from '../images/icons/star-respose.svg';
import Attach from '../images/icons/attach.svg';
import Arrow from '../images/icons/arrowLeft.svg';
import Header from '../component/Header';
import Footer from '../component/Footer';


function App() {
    return <Box />;
    return <PriceGood />;
    return <Transport />;
    return <Quality />;
    return <RedPen />;
    return <StarRespose />;
    return <Attach />;
    return <Arrow />;
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

      const closeModal_1 = () => {
        setModalIsOpen_1(false);
      };

      const closeModal_2 = () => {
        setModalIsOpen_2(false);
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
          <p>Алергени: Містить картоплю. Вироблено на підприємстві, що працює з молоком, соєю та пшеницею.
              <br/><br/>
             Поживна цінність (на одну порцію, приблизно 28 г): <br/>Калорії: 150, загальний жир: 9 г, натрій: 180 мг, білок: 2 г.</p>
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
              <img className='img-respose' src={Box}></img>
          </div>
      </div>;
        default:
          return null;
      }
    }


    return (
        <body className='good-body'>
        <><><header>
              <Header/>
          </header>
              <main>
            <section className='section-good-page'>
                <div className='left-good-page'>
                    <div className='img-good-page img-box-page'>
                    <img src={Box}></img>
                    </div>
                </div>

                <div className='right-good-page'>
                    <div className='choose-plan-box-page'>
                        <p>Виберіть план</p>
                    </div>

                    <div className='title-box-page'>
                        <h2>
                        Підписка на коробки зі смаколиками
                        </h2>
                    </div>

                    <div className='four-plan-box-page'>
                        <div>
                        <button className='plan-box-page-button'>
                            <div>
                                <p className='plan-box-page-big-text'>12 Місяців</p>
                                </div>
                                <div className='red-box-plan'>НАЙКРАЩА ЦІНА</div>
                                <div className='plan-box-page-save-money'>
                                <p className='plan-box-page-small-text'>Збережи €120</p>
                                <p className='plan-box-page-big-text'>€39.99/міс</p>
                                </div>
                        </button>
                        </div>

                        <div>
                        <button className='plan-box-page-button'>
                            <div>
                                <p className='plan-box-page-big-text'>6 Місяців</p>
                                </div>
                                <div className='plan-box-page-save-money'>
                                <p className='plan-box-page-small-text'>Збережи €36</p>
                                <p className='plan-box-page-big-text'>€43.99/міс</p>
                                </div>
                        </button>
                        </div>

                        <div className='four-plan-box-page'>
                        <div>
                        <button className='plan-box-page-button'>
                            <div>
                                <p className='plan-box-page-big-text'>3 Місяців</p>
                                </div>
                                <div className='red-box-plan'>ПОПУЛЯРНО</div>
                                <div className='plan-box-page-save-money'>
                                <p className='plan-box-page-small-text'>Збережи €12</p>
                                <p className='plan-box-page-big-text'>€45.99/міс</p>
                                </div>
                        </button>
                        </div>
                        </div>

                        <div className='four-plan-box-page'>
                        <div>
                        <button className='plan-box-page-button'>
                            <div>
                                <p className='plan-box-page-big-text'>1 Місяць</p>
                                </div>
                                <div>
                                <p className='plan-box-page-big-text'>€49.99/міс</p>
                                </div>
                        </button>
                        </div>
                        </div>
                    </div>

                    <div className='inference-plan'>
                        <div className='inference-plan-plus'>
                        <div>
                            <p className='inference-plan-text'>ВСЬОГО:</p>
                            <p className='inference-plan-price'>€137.97</p>
                        </div>
                        <div className='inference-plan-red'>
                            <p className='inference-plan-text'>ЗБEРЕЖИ 12€</p>
                            <p className='inference-plan-price inference-plan-price-cross-out'>€149.97</p>
                        </div>
                    </div>
                        <div>
                        <button className='inference-plan-button'>ОБРАТИ ЦЕЙ ПЛАН</button>
                        </div>
                    </div>

                    <div className='PS-box-page'>
                        <p>Рахунок виставляється щоквартально, скасувати можна будь-коли.<br/>
                            <br/>
                        Сума плюс вартість доставки розраховується при оформленні замовлення. 
                        Всі ціни в євро
                        </p>
                    </div>

                    <div className='text-good-page text-box-page'>
                        <p><span>Шматочок Азії прямо на столі</span><br/>Ми доставляємо до ваших дверей досвід дегустації автентичних азіатських закусок,
цукерок та чаю, отриманих безпосередньо від багатовікових сімейних виробників. Кожна коробка, яку ви
купуєте, підтримує ці сімейні бізнеси в Азії та допомагає зберегти їхні
традиції.</p>
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
            <div className="content-good-page">
             {renderContent()}
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