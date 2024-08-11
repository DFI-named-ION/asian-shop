import React, {useContext, useEffect, useState} from 'react';

import ChipsLeys from '../images/img/chips-good.png';
import Header from '../component/Header';
import Footer from '../component/Footer';

import { useLocation, useNavigate } from 'react-router-dom';
import { useData } from './providers/DataProvider';
import { useErrors } from './providers/ErrorProvider';

export default function Market() {

    const { handleMethod, catchedError } = useErrors();
    const { requestData, additional } = useData();
    const navigate = useNavigate();
    const location = useLocation();
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        const category = params.get('category');
        const subcategory = params.get('subcategory');
        
        const method = async () => {
            await requestData("allProducts;product:1234567;");
        };

        handleMethod(async () => {
            try {
                setPending(true);
                await method();
            } catch (err) {
                throw err;
            } finally {
                setPending(false);
            }
        });
    
    }, []);

    const handleProductClick = (article) => {
        navigate("/catalog/" + article);
    };

    return (
        <body className='market-body'>
        <><><header>
              <Header/>
          </header>
              <main>
             <div className='filter-market-div'>
                <div className='subfilter-market'>
                    <h4>
                        КАТЕГОРІЯ
                    </h4>
                    <details className='market-details'>
                                    <summary className='summary-details-market'>Показати все</summary>
                                    <div>
                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Заморожені</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Солодощі</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Закуски</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Страви</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Соуси</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Напої</p>
                                        </div>
                                        </div>
                                    </div>
                                    </details>
                </div>

                <div className='subfilter-market'>
                    <h4>
                        ПІДКАТЕГОРІЯ
                    </h4>
                    <details className='market-details'>
                                    <summary className='summary-details-market'>Показати все</summary>
                                    <div>
                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Морепродукти</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Випічка</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Шоколад</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Моті</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Печиво</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Торти</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Марпеладки</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Чипси</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Крекери</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Горіхи</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Гострі страви</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Локшина</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Каррі</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Рис</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Токкпокі</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Місо</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Гострі соуси</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Соєві</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Оцти</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Газованка</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Сік</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Фітнес</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Вода</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Чай</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Кава</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>Молоко</p>
                                        </div>
                                        </div>
                                    </div>
                                    </details>
                </div>

                <div className='subfilter-market'>
                    <h4>
                        ВАГА
                    </h4>
                    <details className='market-details'>
                                    <summary className='summary-details-market'>Показати все</summary>
                                    <div>
                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>До 100 г.</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>До 250 г.</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>До 500 г.</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>До 1 кг.</p>
                                        </div>
                                        </div>
                                    </div>
                                    </details>
                </div>

                <div className='subfilter-market'>
                    <h4>
                        ЗА РЕЙТИНГОМ
                    </h4>
                    <details className='market-details'>
                                    <summary className='summary-details-market'>Показати все</summary>
                                    <div>
                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>5 зірок</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>4 зірки</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>3 зірки</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>2 зірки</p>
                                        </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                        <div>
                                        <input type='checkbox' className='checkbox-market'></input>
                                        </div>
                                        <div>
                                        <p>1 зірка</p>
                                        </div>
                                        </div>
                                    </div>
                                    </details>
                </div>

                <div className='subfilter-market'>
                    <p className='price-range'>ЦІНА</p>
                    <input type='range'></input>
                    <div className='menu-range-market'>
                        <div>€3.99</div>
                        <div>€n</div>
                        <div>€300.99</div>
                    </div>
                </div>
             </div>

            <div className='catalog-market'>
                {pending ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {catchedError.tags.includes("critical") ? (
                            <>
                                {additional && additional.allProducts.map((product, index) => (
                                    <div className='good-catalog-market' onClick={() => { handleProductClick(product.article) }}>
                                        <img src={product.photoUrls[0]} className='img-position-good'></img>
                                        <div className='full-stars full-stars-good'>
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
                                            </div>
                                        </div>
                                        <h5>{product.title}</h5>
                                        <p className='text-position-good'>{product.inStock} шт. в наявності</p>
                                        <p className='price-position-good'><span className='span-small-pos'>€</span>{product.price} <span className='span-slash-pos'>/</span>{product.weight}<span className='span-small-pos'>г.</span></p>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                )}
                        
            </div>
              </main></>
    
              <footer>
                <Footer/>
              </footer></>
              </body>
    
    
      )
  }