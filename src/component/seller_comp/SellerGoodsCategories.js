import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import MainSeller from '../seller_comp/img_seller/main-seller.svg';
import OrderSeller from '../seller_comp/img_seller/order-seller.svg';
import GoodsSeller from '../seller_comp/img_seller/goods-seller.svg';
import MessageSeller from '../seller_comp/img_seller/message-seller.svg';
import PenSeller from '../seller_comp/img_seller/pen-seller.svg';
import ClientSeller from '../seller_comp/img_seller/client-seller.svg';
import AnaliticSeller from '../seller_comp/img_seller/analitic-seller.svg';
import WalletSeller from '../seller_comp/img_seller/wallet-seller.svg';
import OptionSeller from '../seller_comp/img_seller/option-seller.svg';
import WolfSeller from '../seller_comp/img_seller/white-trans-wolf.svg';
import BigOptionSeller from '../seller_comp/img_seller/big-option-seller.svg';
import SakuraSeller from '../seller_comp/img_seller/sakura-seller.svg';
import BigGoodsSeller from '../seller_comp/img_seller/big-goods-seller.svg';
import AddGoods from '../seller_comp/img_seller//add-goods-box-seller.svg';
import ChipsLeys from '../seller_comp/img_seller/chips-leys.jpg';
import HeaderSeller from '../seller_comp/HeaderSeller';
// import RedX from '../seller_comp/img_seller//X-red-seller.svg';

// function App() {
//     return <RedX />;
// }

import { useAuth } from '../providers/AuthProvider';
import { useData } from '../providers/DataProvider';
import { useErrors } from '../providers/ErrorProvider';

export default function SellerGoodsCategories() {

    const { requestFields } = useData();
    const { catchedError, handleMethod } = useErrors();
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const method = async () => {
            await requestFields("email;isSeller;displayName;products;");
        };

        handleMethod(async () => {
            await method();
        });
    }, []);

    useEffect(() => {
        if (selectedCategory && selectedSubCategory) {
            // setFilteredProducts(user.products.filter(p => p.category === selectedCategory && p.subCategory === selectedSubCategory));
        } else {
            setFilteredProducts([]);
        }
    }, [selectedCategory, selectedSubCategory]);

    const [openDetails, setOpenDetails] = useState(null);

    const handleToggle = (category, event) => {
        event.preventDefault();
        if (openDetails === category) {
          setOpenDetails(null);
          setSelectedCategory(null);
          setSelectedSubCategory(null);
        } else {
          setOpenDetails(category);
          setSelectedCategory(category);
          setSelectedSubCategory(null);
        }
    };

    const handleSubcategoryChange = (subCategory, event) => {
        event.preventDefault();
        setSelectedSubCategory(subCategory);
    };

    const handleAddProductClick = () => { navigate("/seller/positions/add") };

    const handleCompanyClick = () => { navigate("/seller/company") };

    const handleProfileClick = () => { navigate("/seller/profile") };

    const handlePromotionsClick = () => { navigate("/seller/promotions") };

    const handlePositionsClick = () => { navigate("/seller/positions") };

    const handleCategoriesClick = () => { navigate("/seller/categories") };

    const handleMainClick = () => { navigate("/") };

    return (
        <body className='seller-body'>
            <div className='seller-div'>
            <div className='left-seller'>
                <h1 className='logo-seller'>SakuraTails</h1>
                <div className='name-id-seller'>
                    <h3>{user.sellerFirstName} {user.sellerLastName}</h3>
                    <p>Ваш ID: {user.sellerId}</p>
                </div>
                <div className='seller-search-div'>
                <input type="search" name="seller-search" className='seller-search' placeholder="Пошук"/>
                </div>

                <HeaderSeller />

            </div>
            <div className='cabinet-seller-div'>
            <div className='head-seller'>
                <div>
            <img src={BigGoodsSeller} className='img-seller-left'></img>
            <p>Управління категоріями товарів</p>
            </div>
            </div>
                    <div className='right-seller'>
                        <div className='top-option-company'>
                            <div>
                                <div className='categories-title-seller'>
                                    <h3>Категорії</h3>
                                </div>
                                <div className='list-categories-seller'>
                                    <details className='seller-categories-details' open={openDetails === 'category1'}>
                                        <summary data-category="Заморожені" onClick={(e) => handleToggle('category1', e)}>Заморожені</summary>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Морепродукти" onClick={(e) => handleSubcategoryChange('subCategory1', e)}>Морепродукти</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Випічка" onClick={(e) => handleSubcategoryChange('subCategory2', e)}>Випічка</button>
                                        </div>
                                    </details>

                                    <details className='seller-categories-details' open={openDetails === 'category2'}>
                                        <summary data-category="Солодощі" onClick={(e) => handleToggle('category2', e)}>Солодощі</summary>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Шоколад" onClick={(e) => handleSubcategoryChange('subCategory1', e)}>Шоколад</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Моті" onClick={(e) => handleSubcategoryChange('subCategory2', e)}>Моті</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Печиво" onClick={(e) => handleSubcategoryChange('subCategory3', e)}>Печиво</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Торти" onClick={(e) => handleSubcategoryChange('subCategory4', e)}>Торти</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Мармеладки" onClick={(e) => handleSubcategoryChange('subCategory5', e)}>Мармеладки</button>
                                        </div>
                                    </details>

                                    <details className='seller-categories-details' open={openDetails === 'category3'}>
                                        <summary data-category="Закуски" onClick={(e) => handleToggle('category3', e)}>Закуски</summary>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Чипси" onClick={(e) => handleSubcategoryChange('subCategory1', e)}>Чипси</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Крекери" onClick={(e) => handleSubcategoryChange('subCategory2', e)}>Крекери</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Горіхи" onClick={(e) => handleSubcategoryChange('subCategory3', e)}>Горіхи</button>
                                        </div>
                                    </details>

                                    <details className='seller-categories-details' open={openDetails === 'category4'}>
                                        <summary data-category="Страви" onClick={(e) => handleToggle('category4', e)}>Страви</summary>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Гострі" onClick={(e) => handleSubcategoryChange('subCategory1', e)}>Гострі</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Локшина" onClick={(e) => handleSubcategoryChange('subCategory2', e)}>Локшина</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Каррі" onClick={(e) => handleSubcategoryChange('subCategory3', e)}>Каррі</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Рис" onClick={(e) => handleSubcategoryChange('subCategory4', e)}>Рис</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Токпоккі" onClick={(e) => handleSubcategoryChange('subCategory5', e)}>Токпоккі</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Місо" onClick={(e) => handleSubcategoryChange('subCategory6', e)}>Місо</button>
                                        </div>
                                    </details>

                                    <details className='seller-categories-details' open={openDetails === 'category5'}>
                                        <summary data-category="Соуси" onClick={(e) => handleToggle('category5', e)}>Соуси</summary>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Гострі" onClick={(e) => handleSubcategoryChange('subCategory1', e)}>Гострі</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Соєвий" onClick={(e) => handleSubcategoryChange('subCategory2', e)}>Соєвий</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Оцти" onClick={(e) => handleSubcategoryChange('subCategory3', e)}>Оцти</button>
                                        </div>
                                    </details>

                                    <details className='seller-categories-details' open={openDetails === 'category6'}>
                                        <summary data-category="Напої" onClick={(e) => handleToggle('category6', e)}>Напої</summary>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Газованка" onClick={(e) => handleSubcategoryChange('subCategory1', e)}>Газованка</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Сік" onClick={(e) => handleSubcategoryChange('subCategory2', e)}>Сік</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Фітнес" onClick={(e) => handleSubcategoryChange('subCategory3', e)}>Фітнес</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Вода" onClick={(e) => handleSubcategoryChange('subCategory4', e)}>Вода</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Чай" onClick={(e) => handleSubcategoryChange('subCategory5', e)}>Чай</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Кава" onClick={(e) => handleSubcategoryChange('subCategory6', e)}>Кава</button>
                                        </div>
                                        <div>
                                            <button className='list-buttons-categories-seller' data-subcategory="Молоко" onClick={(e) => handleSubcategoryChange('subCategory7', e)}>Молоко</button>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            <div className='information-categories'>
                                {/* Виберіть категорію */}
                                { !selectedCategory && (<p className='select-category-seller'>Виберіть категорію</p>)}

                                {/* Виберіть підкатегорію */}
                                { selectedCategory && !selectedSubCategory && (<p className='select-subcategory-seller'>Виберіть підкатегорію</p>)}

                                {/* Додати товар */}
                                { selectedCategory && selectedSubCategory && (
                                    filteredProducts.length === 0 ? (
                                        <a onClick={handleAddProductClick}>
                                            <img src={AddGoods} className='img-goods-categories'/>
                                            <p className='add-goods-categories-seller'>Додати товар</p>
                                        </a>
                                    ) : (
                                        <div className='goods-position-seller-block'>
                                            {filteredProducts.map((product, index) => (
                                                <div key={index} className='good-position-seller'>
                                                    {/* <img src={RedX} className='img-del-good'></img> */}
                                                    <img src={product.photoUrls[0]} className='img-position-good' alt={product.title} />
                                                    <h5>{product.title}</h5>
                                                    <p className='text-position-good'>{product.inStock} шт. в наявності</p>
                                                    <p className='price-position-good'>
                                                        <span className='span-small-pos'>$</span>{product.price} <span className='span-slash-pos'>/</span>{product.weight}<span className='span-small-pos'>г.</span>
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}