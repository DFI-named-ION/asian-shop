import React, {useContext, useEffect, useState} from 'react';


import Chips from '../images/img/chips-good.png';
import PriceGood from '../images/icons/price-good.svg';
import Transport from '../images/icons/transport-good.svg';
import Quality from '../images/icons/quality-good.svg';
import RedPen from '../images/icons/redPen.svg';
import StarRespose from '../images/icons/star-respose.svg';
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
                        <p>Інгридієнти: Секрет, проте не містить молока, горіхів та глютену.</p>
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