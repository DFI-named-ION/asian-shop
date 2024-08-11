import React, { useEffect, useState, useContext, useRef } from 'react';
import Modal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';

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
import BigGoodsSeller from '../seller_comp/img_seller/big-goods-seller.svg';
import AddImage from '../seller_comp/img_seller/add-image-position-seller.svg';

import { useAuth } from '../providers/AuthProvider';
import { useData } from '../providers/DataProvider';
import { useErrors } from '../providers/ErrorProvider';
import axios from 'axios';

export default function SellerAddPosition() {

    const { user } = useAuth();
    const { requestData, uploadProductImage, removeProductImage, addProduct } = useData();
    const { catchedError, handleMethod } = useErrors();
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
            photoUrls: [],
            isDyesFree: false,
            isGMOFree: false,
            isGlutenFree: false,
            isLactoseFree: false,
            isLowCalories: false,
            isOrganic: false,
            isSugarFree: false,
            isVegan: false,
            height: 0,
            width: 0,
            lenght: 0,
            weight: 0,
            price: 0,
            title: "",
            description: "",
            category: null,
            subCategory: null,
            article: "",
            visibility: "Hidden"
        });
    const [subCategories, setSubCategories] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const handleUnload = () => {
    //         // Code to remove all photos stored in newProduct.photoUrls
    //         newProduct.photoUrls = [];
    //     };

    //     // Adding the event listener for beforeunload or unload event
    //     window.addEventListener('beforeunload', handleUnload);

    //     // Cleanup function to remove the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('beforeunload', handleUnload);
    //         // Also clear photos when the component unmounts (e.g., when navigating away in a SPA)
    //         newProduct.photoUrls = [];
    //     };
    // }, []);

    useEffect(() => {
        if (catchedError.tags.includes("overlay")) {
            setIsErrorModalOpen(true);
        }
    }, [catchedError]);

    const closeErrorModal = () => {
        setIsErrorModalOpen(false);
    };

    const handleCompanyClick = () => { navigate("/seller/company") };

    const handleProfileClick = () => { navigate("/seller/profile") };

    const handlePromotionsClick = () => { navigate("/seller/promotions") };

    const handlePositionsClick = () => { navigate("/seller/positions") };

    const handleCategoriesClick = () => { navigate("/seller/categories") };

    const handleMainClick = () => { navigate("/") };

    const handleInputChange = (event, index) => {
        const { name, value, type, checked } = event.target;
        const parsedValue = type === 'checkbox' ? checked : value;
    
        if (name === "category") {
            const updatedProduct = { ...newProduct, category: parsedValue };
            switch (parsedValue) {
                case "category1":
                    setSubCategories([
                        {key: "subCategory1", value: "Морепродукти"}, 
                        {key: "subCategory2", value: "Випічка"}
                    ]);
                    break;
                case "category2":
                    setSubCategories([
                        {key: "subCategory1", value: "Шоколад"}, 
                        {key: "subCategory2", value: "Моті"}, 
                        {key: "subCategory3", value: "Печиво"}, 
                        {key: "subCategory4", value: "Торти"}, 
                        {key: "subCategory5", value: "Мармеладки"}
                    ]);
                    break;
                case "category3":
                    setSubCategories([
                        {key: "subCategory1", value: "Чипси"}, 
                        {key: "subCategory2", value: "Крекери"}, 
                        {key: "subCategory3", value: "Горіхи"}
                    ]);
                    break;
                case "category4":
                    setSubCategories([
                        {key: "subCategory1", value: "Гострі"}, 
                        {key: "subCategory2", value: "Локшина"}, 
                        {key: "subCategory3", value: "Каррі"}, 
                        {key: "subCategory4", value: "Рис"}, 
                        {key: "subCategory5", value: "Токпоккі"}, 
                        {key: "subCategory6", value: "Місо"},
                    ]);
                    break;
                case "category5":
                    setSubCategories([
                        {key: "subCategory1", value: "Гострі"}, 
                        {key: "subCategory2", value: "Соєвий"}, 
                        {key: "subCategory3", value: "Оцти"}
                    ]);
                    break;
                case "category6":
                    setSubCategories([
                        {key: "subCategory1", value: "Газованка"}, 
                        {key: "subCategory2", value: "Сік"}, 
                        {key: "subCategory3", value: "Фітнес"}, 
                        {key: "subCategory4", value: "Вода"}, 
                        {key: "subCategory5", value: "Чай"}, 
                        {key: "subCategory6", value: "Кава"},
                        {key: "subCategory7", value: "Молоко"},
                    ]);
                    break;
                default:
                    setSubCategories([]);
                    break;
            };
    
            setNewProduct(updatedProduct);
        } else {
            setNewProduct(prevState => ({ ...prevState, [name]: parsedValue }));
        }
    };

    const handleAddImage = (e) => {
        document.getElementById('fileInput').click();
    };
    
    const handleFileChange = (e) => {
        handleMethod(async () => {
            const f = e.target.files[0];
            if (f) {
                const maxSizeInBytes = 10 * 1024 * 1024;
                if (f.size > maxSizeInBytes) { throw "image-size-error" }
        
                const validExtensions = ['jpg', 'png', 'gif', 'webp'];
                const fileExtension = f.name.split('.').pop().toLowerCase();
        
                if (!validExtensions.includes(fileExtension)) { throw "image-format-error" }

                try {
                    const result = await uploadProductImage(f);

                    setNewProduct(prev => ({
                        ...prev,
                        photoUrls: [...(prev.photoUrls || []), result.data.data]
                    }));
                } catch (err) {
                    throw err;
                }
            }
        });
    };

    const handleRemoveImage = (e, index) => {
        e.preventDefault();
    
        handleMethod(async () => {
            try {
                await removeProductImage(newProduct.photoUrls[index]);
                setNewProduct(prev => ({
                    ...prev,
                    photoUrls: prev.photoUrls.filter((_, i) => i !== index)
                }));
            } catch (err) {
                throw err;
            }
        });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        handleMethod(async () => {
            const isEmptyOrWhitespace = (str) => !str || str.trim().length === 0;
            const isValidPrice = (str) => /^([1-9]\d*|0)(\.\d{1,2})?$/.test(str) && parseFloat(str) >= 0.01;
            const isValidArticle = (str) => /^\d{6}$/.test(str) && parseInt(str) !== 0;
            const isNull = (value) => value === null;
            const isEmptyArray = (arr) => !Array.isArray(arr) || arr.length === 0;
            const isValidMeasurement = (str) => {
                const numericValue = parseFloat(str);
                return numericValue >= 0.01 && /^([1-9]\d*|0)(\.\d{1,2})?\s*[\u0400-\u04FFa-zA-Z]*$/.test(str);
            };
    
            if (isEmptyOrWhitespace(newProduct.title)) throw "title-format-error";
            console.log(newProduct.price);
            if (!isValidPrice(newProduct.price)) throw "price-format-error";
            if (isNull(newProduct.category)) throw "category-format-error";
            if (isNull(newProduct.subCategory)) throw "subcategory-format-error";
            if (!isValidArticle(newProduct.article)) throw "article-format-error";
            if (isEmptyArray(newProduct.photoUrls)) throw "photos-format-error";
    
            if (!isValidMeasurement(newProduct.height)) throw "height-format-error";
            if (!isValidMeasurement(newProduct.length)) throw "length-format-error";
            if (!isValidMeasurement(newProduct.width)) throw "width-format-error";
            if (!isValidMeasurement(newProduct.weight)) throw "weight-format-error";
    
            try {
                await addProduct(newProduct);
                window.location.reload(true);
            } catch (err) {
                throw err;
            }
        });
    };

    return (
        <body className='seller-body'>
            <Modal isOpen={isErrorModalOpen} onRequestClose={closeErrorModal} className='background-modal-div'>
                <div className='modal-link-error-div'> 
                    <button onClick={closeErrorModal} className='close-modal-button close-link-error-button'></button>
                    <p>
                        {catchedError.long}
                    </p>
                </div>
            </Modal>
            <div className='seller-div'>
                <div className='left-seller'>
                    <h1 className='logo-seller'>SakuraTails</h1>
                    <div className='name-id-seller'>
                        <h3>{user.sellerFirstName} {user.sellerLastName}</h3>
                        <p>Ваш ID: 0000001</p>
                    </div>
                    <div className='seller-search-div'>
                        <input type="search" name="seller-search" className='seller-search' placeholder="Пошук"/>
                    </div>

                    <div className='seller-buttons-div seller-buttons-option-company-div'>
                        <div onClick={handleMainClick}>
                            <button className='left-seller-button'><img src={MainSeller} className='img-seller-left'></img>Головна</button>
                        </div>
                        <div>
                            <button className='left-seller-button'><img src={OrderSeller} className='img-seller-left'></img>Замовлення</button>
                        </div>
                        <div>
                            <details className='seller-details'>
                                <summary><img src={GoodsSeller} className='img-seller-left'></img>Товари і послуги</summary>
                                <div onClick={handleCategoriesClick}>
                                    <button className='left-seller-subbutton'>Категорії</button>
                                </div>
                                <div onClick={handlePositionsClick}>
                                    <button className='left-seller-subbutton left-seller-subbutton-open'>Позиції</button>
                                </div>
                                <div onClick={handlePromotionsClick}>
                                    <button className='left-seller-subbutton'>Акції та промокоди</button>
                                </div>
                            </details>
                        </div>
                        <div>
                            <button className='left-seller-button'><img src={PenSeller} className='img-seller-left'></img>Відгуки</button>
                        </div>
                        <div>
                            <details className='seller-details'>
                                <summary><img src={OptionSeller} className='img-seller-left'></img>Налаштування</summary>
                                <div onClick={handleCompanyClick}>
                                    <button className='left-seller-subbutton'>Компанія</button>
                                </div>
                                <div onClick={handleProfileClick}>
                                    <button className='left-seller-subbutton'>Профіль</button>
                                </div>
                                <div>
                                    <button className='left-seller-subbutton'>Менеджери</button>
                                </div>
                                <div>
                                    <button className='left-seller-subbutton'>Способи доставки</button>
                                </div>
                                <div>
                                    <button className='left-seller-subbutton'>Способи оплати</button>
                                </div>
                                <div>
                                    <button className='left-seller-subbutton'>Графік роботи</button>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
                <div className='cabinet-seller-div'>
                    <div className='head-seller'>
                        <div>
                            <img src={BigGoodsSeller} className='img-seller-left'></img>
                            <p>Нова позиція</p>
                        </div>
                        <div className='save-seller-button-div'>
                            <button className='save-seller-button' onClick={handleAddProduct}>Додати товар</button>
                        </div>
                    </div>
                    <div className='right-seller'>
                        <div className='top-option-company'>
                            <div className='description-seller-option'>
                                <h3>
                                    Основна інформація про продукт
                                </h3>
                                <p>
                                    Оберіть назву продукту, встановіть ціну, визначте видимість та категорію. Перед публікацією перевірте текст на помилки, адже це важливо для клієнтів.
                                </p>
                            </div>
                            <div className='information-option'>
                                <div className='top-bottom-box-seller'>
                                    <div className='block-input-seller'>
                                        <p className='name-input-seller'>Назва позиції <span>*</span></p>
                                        <p className='text-input-seller text-input-short-seller'>
                                            <input type='text' placeholder='Назва позиції' name='title' required onChange={handleInputChange} />
                                            <div className='short-line-seller'></div>
                                        </p>
                                        <div className='block-input-seller'>
                                            <p className='name-input-seller'>Категорія</p>
                                            <p className='text-input-seller text-input-short-seller'>
                                                <select className='select-seller-option-long select-seller-option-short' name='category' required onChange={handleInputChange}>
                                                    <option disabled selected hidden value={null} defaultChecked>Виберіть зі списку</option>
                                                    <option value={"category1"}>Заморожені</option>
                                                    <option value={"category2"}>Солодощі</option>
                                                    <option value={"category3"}>Закуски</option>
                                                    <option value={"category4"}>Страви</option>
                                                    <option value={"category5"}>Соуси</option>
                                                    <option value={"category6"}>Напої</option>
                                                </select>
                                                <div className='short-line-seller'></div>
                                            </p>
                                        </div>
                                        <div className='block-input-seller'>
                                            <p className='name-input-seller'>Видимість</p>
                                            <p className='text-input-seller text-input-short-seller'>
                                                <select className='select-seller-option-long select-seller-option-short' name='visibility' required onChange={handleInputChange}>
                                                    <option value={"Hidden"} defaultChecked>Не опубліковано</option>
                                                    <option value={"Published"}>Опубліковано</option>
                                                </select>
                                                <div className='short-line-seller'></div>
                                            </p>
                                        </div>
                                    </div>

                                    <div className='right-add-position'></div>
                                    <div className='block-input-seller'>
                                        <p className='name-input-seller'>Ціна <span>*</span></p>
                                        <p className='text-input-seller text-input-short-seller'>
                                            <input type='number' placeholder="10€" name='price' required onChange={handleInputChange}/>
                                            <div className='short-line-seller'></div>
                                        </p>
                                        <div className='block-input-seller'>
                                            <p className='name-input-seller'>Підкатегорія</p>
                                            <p className='text-input-seller text-input-short-seller'>
                                                <select className='select-seller-option-long select-seller-option-short' name='subCategory' required onChange={handleInputChange}>
                                                    <option disabled selected hidden value={null} defaultChecked>Виберіть зі списку</option>
                                                    {subCategories.map(subCategory => (
                                                        <option value={subCategory.key}>{subCategory.value}</option>
                                                    ))}
                                                </select>
                                                <div className='short-line-seller'></div>
                                            </p>
                                        </div>
                                        <div className='right-add-position'></div>
                                        <div className='block-input-seller'>
                                            <p className='name-input-seller'>Код/Артикул</p>
                                            <p className='text-input-seller text-input-short-seller'>
                                                <input type='text' placeholder="#134141" name='article' required maxLength={6} onChange={handleInputChange}/>
                                                <div className='short-line-seller'></div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='top-option-company'>
                            <div className='description-seller-option'>
                                <h3>
                                    Опис позиції
                                </h3>
                                <p>
                                    Ми радимо детально описати основні характеристики та переваги вашого продукту. Перед публікацією переконайтесь у відсутності помилок в тексті, оскільки потенційні клієнти будуть звертати увагу на кожну деталь.
                                </p>
                            </div>
                            <div className='information-option information-option-text'>
                                <textarea className='big-textarea-seller' placeholder='Поле для написання тексту' name='description' required onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className='top-option-company'>
                            <div className='description-seller-option'>
                                <h3>
                                    Додайте фото товару
                                </h3>
                                <p>
                                    Вибирайте фотографії, які точно відображають реальний вигляд товару, щоб уникнути будь-яких непорозумінь у клієнтів.
                                </p>
                            </div>
                            <div className='information-option'>
                                <input 
                                    type="file" 
                                    accept=".jpg,.gif,.png,.webp" 
                                    style={{ display: 'none' }} 
                                    id="fileInput"
                                    multiple={false}
                                    onChange={handleFileChange} 
                                />
                                <a name="photoUrls" onClick={handleAddImage}>
                                    <img src={AddImage} className='img-add-image-position' />
                                    <p className='download-image-position'>
                                        Завантажте файл або додайте скопійоване зображення<br />
                                        Формати: JPG, GIF, PNG, WEBP.<br />
                                        Максимальний розмір: 10 MB.
                                    </p>
                                </a>
                                <div className='goods-position-seller-block'>
                                    {newProduct.photoUrls.map((photo, index) => (
                                        <div className='good-position-seller good-position-seller-custom'>
                                            <img src={photo} className='img-position-good' alt={index} />
                                            <button className='close-button' onClick={(e) => { handleRemoveImage(e, index) }}>&times;</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='top-option-company'>
                            <div className='description-seller-option'>
                                <h3>
                                    Оберіть теги
                                </h3>
                                <p>
                                    Оберіть відповідні теги для продукції, щоб клієнти могли легко знайти потрібний товар для свої потреб.
                                </p>
                            </div>
                            <div className='information-option checkbox-position-seller-div'>
                                <div className='left-checkbox-position-seller'>
                                    <div className='radio-goods-seller-div chekbox-position-margin'>
                                        <input className='radio-goods-seller' type="checkbox" name='isGlutenFree' onChange={handleInputChange} />
                                        <p className='radio-goods-seller-text'>Без глютену</p>
                                    </div>

                                    <div className='radio-goods-seller-div chekbox-position-margin'>
                                        <input className='radio-goods-seller' type="checkbox" name='isOrganic' onChange={handleInputChange} />
                                        <p className='radio-goods-seller-text'>Органічне</p>
                                    </div>

                                    <div className='radio-goods-seller-div chekbox-position-margin'>
                                        <input className='radio-goods-seller' type="checkbox" name='isVegan' onChange={handleInputChange} />
                                        <p className='radio-goods-seller-text'>Веганське</p>
                                    </div>

                                    <div className='radio-goods-seller-div chekbox-position-margin'>
                                        <input className='radio-goods-seller' type="checkbox" name='isGMOFree' onChange={handleInputChange} />
                                        <p className='radio-goods-seller-text'>Без ГМО</p>
                                    </div>
                                </div>
                                <div className='right-checkbox-position-seller'>
                                    <div className='radio-goods-seller-div chekbox-position-margin'>
                                        <input className='radio-goods-seller' type="checkbox" name='isLactoseFree' onChange={handleInputChange} />
                                        <p className='radio-goods-seller-text'>Без лактози</p>
                                    </div>

                                    <div className='radio-goods-seller-div chekbox-position-margin'>
                                        <input className='radio-goods-seller' type="checkbox" name='isSugarFree' onChange={handleInputChange} />
                                        <p className='radio-goods-seller-text'>Без цукру</p>
                                    </div>

                                    <div className='radio-goods-seller-div chekbox-position-margin'>
                                        <input className='radio-goods-seller' type="checkbox" name='isLowCalories' onChange={handleInputChange} />
                                        <p className='radio-goods-seller-text'>Низькокалорійне</p>
                                    </div>

                                    <div className='radio-goods-seller-div chekbox-position-margin'>
                                        <input className='radio-goods-seller' type="checkbox" name='isDyesFree' onChange={handleInputChange} />
                                        <p className='radio-goods-seller-text'>Без барвників</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='top-option-company'>
                            <div className='description-seller-option'>
                                <h3>
                                    Габаритні розміри
                                </h3>
                                <p>
                                    Спростіть розрахунок вартості доставки для вас та покупця
                                </p>
                            </div>
                            <div className='information-option'>
                                <div className='top-bottom-box-seller'>
                                    <div className='block-input-seller'>
                                        <p className='name-input-seller'>Висота</p>
                                        <p className='text-input-seller text-input-short-seller'>
                                            <input type='text' placeholder='10 см.' name='height' onChange={handleInputChange} />
                                            <div className='short-line-seller'></div>
                                        </p>
                                        <div className='block-input-seller'>
                                            <p className='name-input-seller'>Ширина</p>
                                            <p className='text-input-seller text-input-short-seller'>
                                                <input type='text' placeholder='5 см.' name='width' onChange={handleInputChange} />
                                                <div className='short-line-seller'></div>
                                            </p>
                                        </div>
                                    </div>

                                    <div className='right-add-position'></div>
                                    <div className='block-input-seller'>
                                        <p className='name-input-seller'>Довжина</p>
                                        <p className='text-input-seller text-input-short-seller'>
                                            <input type='text' placeholder="10 см." name='length' onChange={handleInputChange} />
                                            <div className='short-line-seller'></div>
                                        </p>
                                        <div className='block-input-seller'>
                                            <p className='name-input-seller'>Вага</p>
                                            <p className='text-input-seller text-input-short-seller'>
                                                <input type='text' placeholder='500 г.' name='weight' onChange={handleInputChange} />
                                                <div className='short-line-seller'></div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='save-seller-button option-seller-save-button' onClick={handleAddProduct}>Додати товар</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}