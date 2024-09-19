import React, {useEffect, useState} from 'react';

import Header from '../component/Header';
import Footer from '../component/Footer';

import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function Market() {

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const getArrayParam = (key) => {
        const param = params.get(key);
        return param ? param.split(',') : [];
      };
    const getSingleParam = (key) => params.get(key) || "";

    const [selectedCategory, setSelectedCategory] = useState(getArrayParam('category'));
    const [selectedSubCategory, setSelectedSubCategory] = useState(getArrayParam('subcategory'));
    const [selectedWeight, setSelectedWeight] = useState(getSingleParam('weight'));
    const [selectedRating, setSelectedRating] = useState(getArrayParam('rating'));
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [selectedPriceTop, setSelectedPriceTop] = useState(getSingleParam('top'));

    useEffect(() => {
        const allFilters = {
            category: selectedCategory,
            subcategory: selectedSubCategory,
            weight: selectedWeight,
            rating: selectedRating,
            bottom: minPrice,
            top: selectedPriceTop,
        };

        Object.entries(allFilters).forEach(([key, value]) => {
            if (Array.isArray(value) ? value.length > 0 : value) {
                params.set(key, Array.isArray(value) ? value.join(',') : value);
            } else {
                params.delete(key);
            }
        });

        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState({}, '', newUrl);
        
        setProductsPortions([{ pending: true, products: [] }]);
        setPageNumber(1);
        setTotalCount(0);
    }, [selectedCategory, selectedSubCategory, selectedWeight, selectedRating, selectedPriceTop]);

    const [productsPortions, setProductsPortions] = useState([{ pending: true, products: [] }]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const pageSize = 8;
    
    useEffect(() => {
        let filter = {
            categories: selectedCategory.length > 0 ? selectedCategory : null,
            subCategories: selectedSubCategory.length > 0 ? selectedSubCategory : null,
            bottomPrice: null,
            topPrice: selectedPriceTop || null,
            ratings: selectedRating.length > 0 ? selectedRating : null,
            weight: selectedWeight.length > 0 ? selectedWeight : null
        };

        axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/getProducts`, filter, {
            params: {
                pageNumber,
                pageSize
            }
        })
        .then((response) => {
            setProductsPortions(prevPortions => 
                prevPortions.map((portion, index) =>
                    index === pageNumber - 1
                        ? { pending: false, products: response.data.products }
                        : portion
                )
            );
            setTotalCount(response.data.totalCount);
        })
        .catch((err) => {
            if (err.response.status === 400) {
                console.log(err.response.data);
            } else {
                console.log("error", err);
            }
        });
    }, [selectedCategory, selectedSubCategory, selectedPriceTop, selectedRating, selectedWeight, pageNumber]);
    
    const loadMoreProducts = () => {
        setProductsPortions(prevPortions => [...prevPortions, { pending: true, products: [] }]);
        setPageNumber(prevPageNumber => prevPageNumber + 1);
    };

    const handleFilterChange = (e, val, selectedValues, setState) => {
        const updatedValues = e.target.checked
            ? [...selectedValues, val]
            : selectedValues.filter((item) => item !== val);

        setState(updatedValues);
    };

    const createFilterHandler = (selectedValues, setState) => (e, val) => handleFilterChange(e, val, selectedValues, setState);

    const handleCategoryChange = createFilterHandler(selectedCategory, setSelectedCategory);
    const handleSubCategoryChange = createFilterHandler(selectedSubCategory, setSelectedSubCategory);
    const handleWeightChange = (e, val) => {
        if (e.target.checked) {
            setSelectedWeight(val);
        } else {
            setSelectedWeight('');
        }
    };
    const handleRatingChange = createFilterHandler(selectedRating, setSelectedRating);
    const handlePriceChange = (e) => { setSelectedPriceTop(e.target.value) };
    
    const handleProductClick = (article) => {
        navigate("/catalog/" + article);
    };

    return (
        <body className='market-body'>
            <>
                <>
                    <header>
                        <Header/>
                    </header>
                    <main>
                        <div className='filter-market-div'>
                            <div className='subfilter-market'>
                                <h4>КАТЕГОРІЯ</h4>
                                <details className='market-details'>
                                    <summary className='summary-details-market'>Показати все</summary>
                                    <div>
                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleCategoryChange(e, "category1")} checked={selectedCategory.includes("category1")}></input>
                                            </div>
                                            <div>
                                                <p>Заморожені</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleCategoryChange(e, "category2")} checked={selectedCategory.includes("category2")}></input>
                                            </div>
                                            <div>
                                                <p>Солодощі</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleCategoryChange(e, "category3")} checked={selectedCategory.includes("category3")}></input>
                                            </div>
                                            <div>
                                                <p>Закуски</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleCategoryChange(e, "category4")} checked={selectedCategory.includes("category4")}></input>
                                            </div>
                                            <div>
                                                <p>Страви</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleCategoryChange(e, "category5")} checked={selectedCategory.includes("category5")}></input>
                                            </div>
                                            <div>
                                                <p>Соуси</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleCategoryChange(e, "category6")} checked={selectedCategory.includes("category6")}></input>
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
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory1")} checked={selectedSubCategory.includes("subCategory1")}></input>
                                            </div>
                                            <div>
                                                <p>Морепродукти</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory2")} checked={selectedSubCategory.includes("subCategory2")}></input>
                                            </div>
                                            <div>
                                                <p>Випічка</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory3")} checked={selectedSubCategory.includes("subCategory3")}></input>
                                            </div>
                                            <div>
                                                <p>Шоколад</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory4")} checked={selectedSubCategory.includes("subCategory4")}></input>
                                            </div>
                                            <div>
                                                <p>Моті</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory5")} checked={selectedSubCategory.includes("subCategory5")}></input>
                                            </div>
                                            <div>
                                                <p>Печиво</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory6")} checked={selectedSubCategory.includes("subCategory6")}></input>
                                            </div>
                                            <div>
                                                <p>Торти</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory7")} checked={selectedSubCategory.includes("subCategory7")}></input>
                                            </div>
                                            <div>
                                                <p>Марпеладки</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory8")} checked={selectedSubCategory.includes("subCategory8")}></input>
                                            </div>
                                            <div>
                                                <p>Чипси</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory9")} checked={selectedSubCategory.includes("subCategory9")}></input>
                                            </div>
                                            <div>
                                                <p>Крекери</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory10")} checked={selectedSubCategory.includes("subCategory10")}></input>
                                            </div>
                                            <div>
                                                <p>Горіхи</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory11")} checked={selectedSubCategory.includes("subCategory11")}></input>
                                            </div>
                                            <div>
                                                <p>Гострі страви</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory12")} checked={selectedSubCategory.includes("subCategory12")}></input>
                                            </div>
                                            <div>
                                                <p>Локшина</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory13")} checked={selectedSubCategory.includes("subCategory13")}></input>
                                            </div>
                                            <div>
                                                <p>Каррі</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory14")} checked={selectedSubCategory.includes("subCategory14")}></input>
                                            </div>
                                            <div>
                                                <p>Рис</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory15")} checked={selectedSubCategory.includes("subCategory15")}></input>
                                            </div>
                                            <div>
                                                <p>Токкпокі</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory16")} checked={selectedSubCategory.includes("subCategory16")}></input>
                                            </div>
                                            <div>
                                                <p>Місо</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory17")} checked={selectedSubCategory.includes("subCategory17")}></input>
                                            </div>
                                            <div>
                                                <p>Гострі соуси</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory18")} checked={selectedSubCategory.includes("subCategory18")}></input>
                                            </div>
                                            <div>
                                                <p>Соєві</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory19")} checked={selectedSubCategory.includes("subCategory19")}></input>
                                            </div>
                                            <div>
                                                <p>Оцти</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory20")} checked={selectedSubCategory.includes("subCategory20")}></input>
                                            </div>
                                            <div>
                                                <p>Газованка</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory21")} checked={selectedSubCategory.includes("subCategory21")}></input>
                                            </div>
                                            <div>
                                                <p>Сік</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory22")} checked={selectedSubCategory.includes("subCategory22")}></input>
                                            </div>
                                            <div>
                                                <p>Фітнес</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory23")} checked={selectedSubCategory.includes("subCategory23")}></input>
                                            </div>
                                            <div>
                                                <p>Вода</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory24")} checked={selectedSubCategory.includes("subCategory24")}></input>
                                            </div>
                                            <div>
                                                <p>Чай</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory25")} checked={selectedSubCategory.includes("subCategory25")}></input>
                                            </div>
                                            <div>
                                                <p>Кава</p>
                                            </div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input type='checkbox' className='checkbox-market' onChange={(e) => handleSubCategoryChange(e, "subCategory26")} checked={selectedSubCategory.includes("subCategory26")}></input>
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
                                                <input 
                                                    type='checkbox' 
                                                    className='checkbox-market' 
                                                    onChange={(e) => handleWeightChange(e, "option1")} 
                                                    checked={selectedWeight === "option1"} />
                                            </div>
                                            <div><p>До 100 г.</p></div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input 
                                                    type='checkbox' 
                                                    className='checkbox-market' 
                                                    onChange={(e) => handleWeightChange(e, "option2")} 
                                                    checked={selectedWeight === "option2"} />
                                            </div>
                                            <div><p>До 250 г.</p></div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input 
                                                    type='checkbox' 
                                                    className='checkbox-market' 
                                                    onChange={(e) => handleWeightChange(e, "option3")} 
                                                    checked={selectedWeight === "option3"} />
                                            </div>
                                            <div><p>До 500 г.</p></div>
                                        </div>

                                        <div className='checkbox-market-block'>
                                            <div>
                                                <input 
                                                    type='checkbox' 
                                                    className='checkbox-market' 
                                                    onChange={(e) => handleWeightChange(e, "option4")} 
                                                    checked={selectedWeight === "option4"} />
                                            </div>
                                            <div><p>До 1 кг.</p></div>
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
                                                    <input type='checkbox' className='checkbox-market' onChange={(e) => handleRatingChange(e, "option5")} checked={selectedRating.includes("option5")}></input>
                                                </div>
                                                <div>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                </div>
                                            </div>

                                            <div className='checkbox-market-block'>
                                                <div>
                                                    <input type='checkbox' className='checkbox-market' onChange={(e) => handleRatingChange(e, "option4")} checked={selectedRating.includes("option4")}></input>
                                                </div>
                                                <div>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                </div>
                                            </div>

                                            <div className='checkbox-market-block'>
                                                <div>
                                                    <input type='checkbox' className='checkbox-market' onChange={(e) => handleRatingChange(e, "option3")} checked={selectedRating.includes("option3")}></input>
                                                </div>
                                                <div>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                </div>
                                            </div>

                                            <div className='checkbox-market-block'>
                                                <div>
                                                    <input type='checkbox' className='checkbox-market' onChange={(e) => handleRatingChange(e, "option2")} checked={selectedRating.includes("option2")}></input>
                                                </div>
                                                <div>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                </div>
                                            </div>

                                            <div className='checkbox-market-block'>
                                                <div>
                                                    <input type='checkbox' className='checkbox-market' onChange={(e) => handleRatingChange(e, "option1")} checked={selectedRating.includes("option1")}></input>
                                                </div>
                                                <div>
                                                <svg className='star-rating-market' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><title>black-star</title><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                </details>
                            </div>

                            {/* <div className='subfilter-market'>
                                <p className='price-range'>ЦІНА</p>
                                <input type='range' className="slider-market" min={minPrice} max={maxPrice} onChange={handlePriceChange} value={selectedPriceTop}></input>
                                <div className='menu-range-market'>
                                    <div>€{minPrice}</div>
                                    <div>€{selectedPriceTop}</div>
                                    <div>€{maxPrice}</div>
                                </div>
                            </div> */}
                        </div>

                        <div className='catalog-market'>
                            {productsPortions.flatMap((portion, portionIndex) => 
                                portion.pending && portionIndex === 0 ? (
                                    <div className='mx-auto text-center' style={{marginTop: "100px"}} key={`loading-${portionIndex}`}>
                                        <p>Loading...</p>
                                    </div>
                                ) : (
                                    portion.products.map((product, index) => (
                                        <div className='good-catalog-market' key={`product-${portionIndex}-${index}`} onClick={() => { handleProductClick(product.article) }}>
                                            <img src={product.photoUrls[0]} className='img-position-good'></img>
                                            <div className='full-stars full-stars-good'>
                                                <div className='rating-group-market rating-group-good'>
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
                                                                    <label htmlFor={`fst-${portionIndex}-${index}-${star}`}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke="#182531" strokeWidth="30">
                                                                            <defs>
                                                                                <clipPath id={`clip-${portionIndex}-${index}-${star}`}>
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
                                                                                clipPath={`url(#clip-${portionIndex}-${index}-${star})`}
                                                                            />
                                                                        </svg>
                                                                    </label>
                                                                    <input name={`fst-${portionIndex}-${index}`} id={`fst-${portionIndex}-${index}-${star}`} value={star} type="radio" />
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <h5>{product.title}</h5>
                                            <p className='text-position-good'>{product.inStock} шт. в наявності</p>
                                            <p className='price-position-good'><span className='span-small-pos'>€</span>{product.price} <span className='span-slash-pos'>/</span>{product.weight}<span className='span-small-pos'>г.</span></p>
                                        </div>
                                    ))
                                )
                            )}
                        </div>

                    </main>
                    {productsPortions.reduce((total, portion) => total + portion.products.length, 0) < totalCount && (
                        productsPortions.some(portion => portion.pending) ? (
                            <div className='mx-auto text-center' style={{marginBottom: "100px"}}>
                                <p>Loading more products...</p>
                            </div>
                        ) : (
                            <div className='mx-auto text-center' style={{marginBottom: "100px"}}>
                                <button className='loading-good-button' onClick={loadMoreProducts}>Завантажити ще</button>
                            </div>
                        )
                    )}
                </>
                <footer>
                    <Footer/>
                </footer>
            </>
        </body>
    )
}