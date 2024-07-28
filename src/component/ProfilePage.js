import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useParams, useNavigate } from 'react-router-dom';

import { useErrors } from './providers/ErrorProvider';
import { useAuth } from './providers/AuthProvider';
import { useData } from './providers/DataProvider';

import Basket from '../images/icons/basket.svg';
import Profile from '../images/icons/profile.svg';
import WhiteWolf from '../images/logo/white-wolf.svg';
import Amex from '../images/pay/amex.png';
import Apple from '../images/pay/apple.png';
import F from '../images/pay/f.png';
import Discover from '../images/pay/discover.png';
import Google from '../images/pay/google.png';
import Mastercard from '../images/pay/mastercard.png';
import Paypal from '../images/pay/paypal.png';
import Shop from '../images/pay/shop.png';
import V from '../images/pay/v.png';
import Visa from '../images/pay/visa.png';
import Instagram from '../images/socials/instagram.svg';
import X from '../images/socials/x.svg';
import Facebook from '../images/socials/facebook.svg';
import Tiktok from '../images/socials/tiktok.svg';
import Qr from '../images/pay/qr.svg';
import HelloEmoji from '../images/icons/hello-emoji.svg';
import AddPlus from '../images/icons/add-plus.svg';
import Exit from '../images/icons/exit.svg';
import Transfer from '../images/icons/transfer.svg';
import Like from '../images/icons/like.svg';
import Pen from '../images/icons/pen.svg';
import Wallet from '../images/icons/wallet.svg';
import Procent from '../images/icons/procent.svg';
import Case from '../images/icons/case.svg';
import History from '../images/icons/history.svg';

function App() {
    return <Basket />;
    return <Profile />;
    return <WhiteWolf />;
    return <Amex />;
    return <Apple />;
    return <F />;
    return <Discover />;
    return <Google />;
    return <Mastercard />;
    return <Paypal />;
    return <Shop />;
    return <V />;
    return <Visa />;
    return <Instagram />;
    return <X />;
    return <Facebook />;
    return <Tiktok />;
    return <Qr />;
  }

export default function ProfilePage() {

  const [modalIsOpenProfile, setModalIsOpenProfile] = useState(false);
  const [modalIsOpenProfilePassword, setModalIsOpenProfilePassword] = useState(false);

  const openModalProfilePassword = () => {
    setModalIsOpenProfilePassword(true);
  };

  const closeModalProfilePassword = () => {
    setModalIsOpenProfilePassword(false);
  };

    const handleSellerProfileClick = () => {
      navigate("/seller");
    };

    const handleSettingsClick = () => {
        navigate("/profile-settings")
    };

    const { user, logout, updatePassword } = useAuth();
    const [newUser, setNewUser] = useState({
      email: user.email,
      lastName: "",
      firstName: "",
      middleName: "",
      sex: false,
      phones: [''],
      addresses: [{city: '', street: '', house: '', apartment: ''}],
      recipients: [],
      doPrint: false,
      birthday: "",
      language: ""
    });
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
    const { handleMethod, catchedError, setCatchedError } = useErrors();
    const navigate = useNavigate();
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const { requestData, updateUserInfo } = useData();
    const [isEditing, setIsEditing] = useState({state: false, section: "none"});

    useEffect(() => {
        if (!user) {
            navigate('/authorization');
        } else {
            handleMethod(() => requestData('firstName;middleName;lastName;language;sex;phones;birthday;doPrint;addresses;'));
        }
    }, []);

    useEffect(() => {
      resetUser();
    }, [user]);

    useEffect(() => {
      if (catchedError.tags.includes("profile-page")) {
        setIsErrorModalOpen(true);
      }
    }, [catchedError]);

    const closeErrorModal = () => {
      setIsErrorModalOpen(false);
    };

    const resetUser = () => {
      setNewUser({
        email: user.email,
        lastName: user.lastName || "",
        firstName: user.firstName || "",
        middleName: user.middleName || "",
        sex: user.sex || false,
        phones: (user.phones && user.phones.length > 0) ? user.phones.filter(phone => phone.trim() !== '') : [''],
        addresses: (user.addresses && user.addresses.filter(addr => addr.city.trim() !== '' && addr.street.trim() !== '' && addr.houseNumber.trim() !== '').length > 0) 
          ? user.addresses.filter(addr => addr.city.trim() !== '' && addr.street.trim() !== '' && addr.houseNumber.trim() !== '')
          : [{ city: '', street: '', houseNumber: '', apartmentNumber: '' }],
        recipients: user.recipients || [],
        doPrint: user.doPrint || false,
        birthday: user.birthday || "",
        language: user.language || ""
      });
    };

    const handleInputChange = (event, index) => {
      const { name, value } = event.target;
    
      if (name.startsWith('city') || name.startsWith('street') || name.startsWith('houseNumber') || name.startsWith('apartmentNumber')) {
        setNewUser(prevState => {
          const updatedAddresses = [...prevState.addresses];
          const field = name.replace(/[0-9]/g, '');
          updatedAddresses[index] = { ...updatedAddresses[index], [field]: value };
    
          return { ...prevState, addresses: updatedAddresses };
        });
      } else if (name.startsWith('telephone')) {
        const updatedPhones = [...newUser.phones];
        updatedPhones[index] = value;
    
        const filteredPhones = updatedPhones.filter(phone => phone.trim() !== '');
        setNewUser(prevState => ({
          ...prevState,
          phones: filteredPhones
        }));
      } else {
        setNewUser(prevState => ({
          ...prevState,
          [name]: value,
        }));
      }
    };
  
    const handleAddPhoneField = () => {
      handleMethod(() => {
        const hasError = newUser.phones.some(phone => {
          if (!/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/.test(phone)) {
            throw "phone-format-error";
          }
          return false;
        });
  
        if (!hasError && newUser.phones.length < 3) {
          setNewUser(prevState => ({
            ...prevState,
            phones: [...prevState.phones, '']
          }));
        }
      });
    };

    const handleAddAddressField = () => {
      handleMethod(() => {
        const hasError = newUser.addresses.some(address => {
          if (!address.city.trim() || !address.street.trim() || !address.houseNumber.trim()) {
            throw "address-format-error";
          }
          return false;
        });
    
        if (!hasError && newUser.addresses.length < 3) {
          setNewUser(prevState => ({
            ...prevState,
            addresses: [...prevState.addresses, { city: '', street: '', houseNumber: '', apartmentNumber: '' }]
          }));
        }
      });
    };

    const handleSave = () => {
      handleMethod(async () => {
        const validPhones = newUser.phones.filter(phone => phone.trim() !== '');
    
        const hasPhoneError = validPhones.some(phone => {
          return !/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/.test(phone);
        });
    
        if (hasPhoneError) {
          throw "phone-format-error";
        }
    
        const validAddresses = newUser.addresses.filter(address => 
          address.city.trim() !== '' || 
          address.street.trim() !== '' || 
          address.houseNumber.trim() !== ''
        );
    
        const hasAddressError = validAddresses.some(address => 
          address.city.trim() === '' || 
          address.street.trim() === '' || 
          address.houseNumber.trim() === ''
        );
    
        if (hasAddressError) {
          throw "address-format-error";
        }
    
        setNewUser(prevState => ({
          ...prevState,
          phones: validPhones,
          addresses: validAddresses
        }));
    
        await updateUserInfo({ ...newUser, phones: validPhones, addresses: validAddresses });
        window.location.reload(true);
      });
    };

    const handleCancelEditing = () => {
      setIsEditing({ state: false, section: "none" });
      console.log(newUser);
      resetUser();
    };

    const handleSetEditing = (section) => {
      if (isEditing.section !== section || !isEditing.state) {
        resetUser();
        setIsEditing({ state: true, section });
      }
    };

    const handleLogOutClick = async (e) => {
        e.preventDefault();
        logout();
    };

    const handleCancelChangePassword = () => {
      setOldPassword("");
      setNewPassword("");
      setNewPasswordRepeat("");
      setModalIsOpenProfilePassword(false);
    };

    const handleChangePassword = () => {
      handleMethod(async () => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;
        if (!passRegex.test(newPassword)) throw "password-format-error";
        if (newPassword !== newPasswordRepeat) throw "not-same-error";
        await updatePassword(oldPassword, newPassword, newPasswordRepeat);
        window.location.reload(true);
      });
    };

    return (
        <body className='ProfilePage-body'>
        <><><header>
              <section className='header-section'>
                <div className='head-div'>
                    <div className='head-left-div'>
                    <div className='head-nav-div'>
                      <a className='header-link header-link-market' href='https://www.figma.com/'>Каталог</a>
                      </div>
                      <div className='head-nav-div'>
                      <a className='header-link' href='https://www.figma.com/'>Подарунки</a>
                      </div>
                      </div>
                  <div className='head-logo-div'>
                  <a className='head-logo' href='/'>SakuraTails</a>
                  </div>
                  <div className='head-right-div'>
                  <div className='head-nav-div'>
                      <a className='header-link' href='https://www.figma.com/'>Про нас</a>
                      </div>
                      <div className='head-nav-div'>
                      <a className='header-link' href='https://www.figma.com/'>Коробки</a>
                      </div>
                  <div className='head-nav-div'>
                  <a href='#' className='icon-head'>
                      <img src={Basket}></img>
                  </a>
                  </div>
                  <div className='head-nav-div'>
                  <a href='#' className='icon-head' onClick={() => { setModalIsOpenProfile(!modalIsOpenProfile) }}>
                      <img src={Profile}></img>
                  </a>
                  <div className="dropdown-content-header" style={{ display: modalIsOpenProfile ? "block" : "none" }}>
                    <div>
                        <p className='head-email-dropdown'>{user.email}</p>
                    </div>
                    <div>
                        <p className='hello-dropdown'>Вітаємо, <span className='name-dropdown'>{user.displayName}</span> <img src={HelloEmoji} alt="Hello Emoji" /></p>
                    </div>
                    <div>
                        <details className='dropdown-details'>
                            <summary>Показати більше акаунтів</summary>
                            <div>
                                <button className='dropdown-button'><img src={AddPlus} alt="Add Plus" />Додати інший акаунт</button>
                            </div>
                            <div>
                                <button className='dropdown-border-bottom-button'><img src={Exit} alt="Exit" />Вийти зі всіх акаунтів</button>
                            </div>
                        </details>
                    </div>
                    <div>
                        <button className='dropdown-border-top-button'><img src={History} alt="History" />Історія замовлень</button>
                    </div>
                    <div>
                        <button className='dropdown-button'><img src={Transfer} alt="Transfer" />Відстеження замовлення</button>
                    </div>
                    <div>
                        <button className='dropdown-button'><img src={Like} alt="Like" />Обране</button>
                    </div>
                    <div>
                        <button className='dropdown-button'><img src={Pen} alt="Pen" />Мої відгуки</button>
                    </div>
                    <div>
                        <button className='dropdown-button'><img src={Wallet} alt="Wallet" />Мій гаманець</button>
                    </div>
                    <div>
                        <button className='dropdown-border-bottom-button'><img src={Procent} alt="Procent" />Знижки та бонуси</button>
                    </div>
                    <div>
                        <button className='dropdown-border-left-button' onClick={handleSettingsClick}>Налаштування</button>
                        <button className='dropdown-border-right-button'>Довідка</button>
                    </div>
                    <div onClick={handleSellerProfileClick}>
                        <button className='dropdown-border-bottom-button'><img src={Case} alt="Case" />Кабінет продавця</button>
                    </div>
                    <div>
                        <p className='bottom-dropdown'>
                            <a href=''>Privacy Policy</a><span className='slash-dropdown'>/</span><a href=''> Terms of Service</a>
                        </p>
                    </div>
                  </div>
                  </div>
                  <div className='language-div'>
                    <div className='language-left-div'>
                      <a className='language-link-left language-link'>
                        <p>EN</p>
                      </a>
                    </div>
                    <div className='language-right-div'>
                    <a className='language-link-right language-link'>
                        <p>UA</p>
                      </a>
                    </div>
                  </div>
                  </div>
                  </div>
              </section>
          </header>
              <main>
                <section className='profile-section'>
                  <Modal isOpen={isErrorModalOpen} onRequestClose={closeErrorModal} className='background-modal-div'>
                    <div className='modal-link-error-div'> 
                      <button onClick={closeErrorModal} className='close-modal-button close-link-error-button'></button>
                      <p>
                          {catchedError.long}
                      </p>
                    </div>
                  </Modal>
                  <div className='title-profile'>
                    <h1>Налаштування</h1>
                  </div>

                  {/* PERSONAL AND CONTACT PART */}
                  <div className='top-block-div'>
                    {isEditing.section === "personal" && isEditing.state ? (
                      <div className='top-left-block-div'>
                        <h2 className='title-profile-block title-black-profile-block'>
                          Особисті дані
                        </h2>
                        <div className='columns-profile-div columns-top-profile-div'>
                          <div className='column-profile-div'>
                            <h4>Прізвище</h4>
                            <p className='input-profile'>
                                  <input className='line-profile' type='text' name='lastName' required value={newUser.lastName} onChange={handleInputChange} />
                              </p>
                            <h4 className='top-margin-profile-title'>Дата народження</h4>
                            <p className='input-profile'>
                              <input className='date-profile' type='date' name='birthday' required value={newUser.birthday} onChange={handleInputChange} />
                            </p>
                          </div>
                          <div className='column-profile-div'>
                            <h4>Ім'я</h4>
                            <p className='input-profile'>
                              <input className='line-profile' type='text' name='firstName' required value={newUser.firstName} onChange={handleInputChange} />
                            </p>
                            <h4 className='top-margin-profile-title'>Стать</h4>
                            <select className='select-profile' name='sex' value={newUser.sex} onChange={handleInputChange}>
                              <option value={false}>Чоловік</option>
                              <option value={true}>Жінка</option>
                            </select>
                          </div>
                          <div className='column-profile-div'>
                          <h4>По батькові</h4>
                          <p className='input-profile'>
                            <input className='line-profile' type='text' name='middleName' required value={newUser.middleName} onChange={handleInputChange} />
                          </p>
                          <h4 className='top-margin-profile-title'>Мова спілкування</h4>
                          <p className='input-profile'>
                            <input className='line-profile' type='text' name='language' required value={newUser.language} onChange={handleInputChange} />
                          </p>
                          </div>
                        </div>
                        <div className='button-profile-div'>
                          <input className='save-profile-button button-top-profile-div' type='button' value='Зберегти' onClick={handleSave} />
                          <input className='cancel-profile-button button-top-profile-div' type='button' value='Скасувати' onClick={handleCancelEditing} />
                        </div>
                      </div>
                    ) : (
                      <div className='top-left-block-div'>
                        <h2 className='title-profile-block'>
                          Особисті дані
                        </h2>
                        <div className='columns-profile-div'>
                          <div className='column-profile-div'>
                            <h4>Прізвище</h4>
                            <p>{user?.lastName ? user.lastName : "Не вказано"}</p>
                            <h4>Дата народження</h4>
                            <p>{user?.birthday ? user.birthday : "Не вказано"}</p>
                          </div>
                          <div className='column-profile-div'>
                            <h4>Ім'я</h4>
                            <p>{user?.firstName ? user.firstName : "Не вказано"}</p>
                            <h4>Стать</h4>
                            <p>{user?.sex && user.sex ? "Жінка" : "Чоловік"}</p>
                          </div>
                          <div className='column-profile-div'>
                            <h4>По батькові</h4>
                            <p>{user?.middleName ? user.middleName : "Не вказано"}</p>
                            <h4>Мова спілкування</h4>
                            <p>{user?.language ? user.language : "Не вказано"}</p>
                          </div>
                        </div>
                        <input className='edit-profile-button' type='button' value='Редагувати' onClick={() => { handleSetEditing("personal") }} />
                      </div>
                    )}
                    {isEditing.section === "contact" && isEditing.state ? (
                        <div className='top-right-block-div'>
                          <h2 className='title-profile-block title-black-profile-block'>
                            Контакти
                          </h2>
                          <div className='columns-profile-div'>
                            <div className='column-profile-div'>
                              <h4>Підтверджений телефон</h4>
                              {newUser.phones.map((phone, index) => (
                                <p className='input-profile' key={index}>
                                  <input className='line-profile' type='tel' name={`telephone${index + 1}`} value={phone} onChange={(e) => handleInputChange(e, index)} required />
                                </p>
                              ))}
                              {newUser.phones.length < 3 && (
                                <a className='add-info-profile' href='#' onClick={handleAddPhoneField}>
                                  <p>Додати ще номер</p>
                                </a>
                              )}
                            </div>
                            <div className='column-profile-div'>
                            <h4>Електронна пошта</h4>
                            <p className='input-profile'>
                              <input className='line-profile' type='email' name='email' placeholder='email@gmail.com' required value={newUser.email}/>
                            </p>
                            <div className='checkbox-profile-div'>
                              <p className='input-profile'>
                                  <input className='checkbox-profile' type='checkbox' name='doPrint' required onChange={handleInputChange} checked={newUser.doPrint}/>
                              </p>
                              <h4 className='druk-paper'>Не друкувати паперові чеки та гарантійні талони</h4>
                            </div>
                            </div>
                          </div>
                          <div className='button-profile-div'>
                            <input className='save-profile-button button-top-profile-div' type='button' value='Зберегти' onClick={handleSave} />
                            <input className='cancel-profile-button button-top-profile-div' type='button' value='Скасувати' onClick={handleCancelEditing} />
                          </div>
                        </div>
                      ) : (
                        <div className='top-right-block-div'>
                          <h2 className='title-profile-block'>
                            Контакти
                          </h2>
                          <div className='columns-profile-div'>
                            <div className='column-profile-div'>
                              <h4>Підтверджений телефон</h4>
                              {user?.phones?.length > 0 ? (
                                <>
                                  <p>{user.phones[0]}</p>
                                  <p>{user.phones[1]}</p>
                                  <p>{user.phones[2]}</p>
                                </>
                              ) : (
                                <p>Не вказано</p>
                              )}
                            </div>
                            <div className='column-profile-div'>
                            <h4>Електронна пошта</h4>
                            <p>{user.email}</p>
                            <h4>Не друкувати чеки та гарантійні талони</h4>
                              <p>{user.doPrint ? "Так" : "Ні"}</p>
                            </div>
                          </div>
                          <input className='edit-profile-button' type='button' value='Редагувати' onClick={() => { handleSetEditing("contact") }} />
                        </div>
                      )}
                    </div>

                  {/* ADDRESS PART */}
                  <div className='medium-block-div'>
                    {isEditing.section === "address" && isEditing.state ? (
                      <div className='top-left-block-div'>
                        <h2 className='title-profile-block title-black-profile-block'>
                          Адреса доставки
                        </h2>
                        <div className='columns-profile-div columns-medium-profile-div custom-profile-div'>
                          <div className='column-profile-div'>
                            <h4>Місто</h4>
                            {newUser.addresses.map((address, index) => (
                              <p className='input-profile' key={index}>
                                <input className='line-profile' type='text' name={`city${index + 1}`} value={address.city} onChange={(e) => { handleInputChange(e, index) }} required />
                              </p>
                            ))}
                            {newUser.addresses.length < 3 && (
                              <a className='add-info-profile' href='#' onClick={handleAddAddressField}>
                                <p>Додати ще адресу</p>
                              </a>
                            )}
                          </div>
                          <div className='column-profile-div'>
                            <h4>Вулиця</h4>
                            {newUser.addresses.map((address, index) => (
                              <p className='input-profile' key={index}>
                                <input className='line-profile' type='text' name={`street${index + 1}`} value={address.street} onChange={(e) => { handleInputChange(e, index) }} required />
                              </p>
                            ))}
                          </div>
                          <div className='column-profile-div'>
                            <h4>Будинок</h4>
                            {newUser.addresses.map((address, index) => (
                              <p className='input-profile' key={index}>
                                <input className='line-profile line-small-profile' type='text' name={`houseNumber${index + 1}`} value={address.houseNumber} onChange={(e) => { handleInputChange(e, index) }} required />
                              </p>
                            ))}
                          </div>
                          <div className='column-profile-div'>
                            <h4>Квартира</h4>
                            {newUser.addresses.map((address, index) => (
                              <p className='input-profile' key={index}>
                                <input className='line-profile line-small-profile' type='text' name={`apartmentNumber${index + 1}`} value={address.apartmentNumber} onChange={(e) => { handleInputChange(e, index) }} />
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className='button-profile-div button-medium-profile-div'>
                          <input className='save-profile-button' type='button' value='Зберегти' onClick={handleSave} />
                          <input className='cancel-profile-button' type='button' value='Скасувати' onClick={handleCancelEditing} />
                        </div>
                      </div>
                    ) : (
                      <div className='top-left-block-div'>
                        <h2 className='title-profile-block'>
                          Адреса доставки
                        </h2>
                          <div className='column-profile-div'>
                            {user?.addresses?.length > 0 ? (
                              <>
                                {user.addresses
                                  .filter(address => address.city && address.street && address.houseNumber)
                                  .map((address, index) => (
                                    <p key={index}>
                                      {address.city}, вул. {address.street}, буд. {address.houseNumber}, кв. {address.apartmentNumber || 'Не вказано'}
                                    </p>
                                  ))}
                              </>
                            ) : (
                              <p>Не вказано</p>
                            )}
                        </div>
                        <input className='edit-profile-button' type='button' value='Редагувати' onClick={() => { handleSetEditing("address") }}/>
                      </div>
                    )}
                  </div>

                  {/* PARCEL RECIPIENT */}
                  {/* FIRST PART */}
                  <div className='bottom-block-div'>
                    <div className='top-left-block-div'>
                      <h2 className='title-profile-block'>
                        Мої отримувачі замовлень
                      </h2>
                        <div className='column-profile-div'>
                        <h4>Тестове Тестове</h4>
                          <p>+380 66 000 00 00</p>
                      </div>
                      <input className='edit-profile-button' type='button' value='Редагувати' />
                    </div>
                  </div>

                  {/* SECONT PART */}
                  {/* <div className='bottom-block-div'>
                    <div className='top-left-block-div'>
                      <h2 className='title-profile-block title-black-profile-block'>
                        Мої отримувачі замовлень
                      </h2>
                        <div className='column-profile-div'>
                        <h4>Отримувач (за замовчуванням)</h4>
                        <p className='input-profile'>
                                <input className='line-profile' type='text' name='text' required/>
                            </p>
                      </div>

                      <p className='title-bottom-profile'>
                        Отримувач замовлень
                      </p>
                      <div className='columns-profile-div columns-bottom-profile-div'>
                      <div className='column-profile-div'>
                        <h4>Прізвище</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='text' name='first name' required/>
                            </p>
                            <a className='add-info-profile' href='#'>
                            <p>Додати ще отримувача</p>
                            </a>
                      </div>
                      <div className='column-profile-div'>
                        <h4>Ім'я</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='text' name='last name' required/>
                            </p>
                      </div>
                      <div className='column-profile-div'>
                        <h4>По батькові</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='text' name='father name' required/>
                            </p>
                      </div>
                      <div className='column-profile-div'>
                        <h4>Мобільний телефон</h4>
                          <p className='input-profile'>
                                <input className='line-profile' type='tel' name='tel' required/>
                            </p>
                      </div>
                      </div>
                      <div className='button-profile-div button-medium-profile-div'>
                      <input className='save-profile-button' type='button' value='Зберегти' />
                      <input className='cancel-profile-button' type='button' value='Скасувати' />
                      </div>
                    </div>
                  </div> */}

                  <div className='footer-profile-div'>
                    <a href='#' onClick={openModalProfilePassword}>
                      <h3>Змінити пароль</h3>
                    </a>
                    <Modal isOpen={modalIsOpenProfilePassword} onRequestClose={closeModalProfilePassword} className='background-modal-div'>
                      <div className='modal-profile-password-div'> 
                        <button onClick={closeModalProfilePassword} className='close-modal-button close-modal-profile-button'/>
                        <h2 className='title-profile-modal'>
                          Зміна паролю
                        </h2>
                        <p className='subtitle-modal-profile'>Старий пароль</p>
                        <p className='input-profile'>
                          <input className='line-profile-modal' type='password' name='modal-password' value={oldPassword} required onChange={(e) => { setOldPassword(e.target.value) }}/>
                        </p>
                        <p className='subtitle-modal-profile'>Новий пароль</p>
                        <p className='input-profile'>
                          <input className='line-profile-modal' type='password' name='modal-password' value={newPassword} required onChange={(e) => { setNewPassword(e.target.value) }}/>
                        </p>
                        <p className='title-line-error-zero-margin'>
                            {catchedError.tags.includes("password-field") ? (
                                <>
                                    {catchedError.short}
                                </>
                            ) : (
                                <></>
                            )}
                        </p>
                        <p className='subtitle-modal-profile'>Повторіть новий пароль</p>
                        <p className='input-profile'>
                          <input className='line-profile-modal' type='password' name='modal-password' value={newPasswordRepeat} required onChange={(e) => { setNewPasswordRepeat(e.target.value) }}/>
                        </p>
                        <div className='button-profile-div button-profile-modal-div'>
                          <input className='save-profile-button' type='button' value='Зберегти' onClick={handleChangePassword} />
                          <input className='cancel-profile-button' type='button' value='Скасувати' onClick={handleCancelChangePassword}/>
                        </div>
                      </div>
                    </Modal>
                    <a href='#' onClick={handleLogOutClick}>
                    <h3 className='exit-profile'>Вихід</h3>
                    </a>
                  </div>
                  </section>
              </main></>
    
              <footer>
                <div className='footer-div'>
                  <nav>
                    <div className='top-footer-div'>
                    <div className='logo-footer-div'>
                          <img className='footer-wolf' href='/' src={WhiteWolf} alt='logo SakuraTails'></img>
                          <a className='head-logo footer-logo' href='/'>SakuraTails</a>
                      </div>
                      <div className='nav-footer-div'>
                        <div className='left-nav-div'>
                      <ul>
                          <li><a className='section-footer' href='/'>SakuraTails Sites</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>SakuraTails Market</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>SakuraTails Gift Boxes</a></li>
                      </ul>
                      </div>
                      <div className='center-nav-div'>
                      <ul>
                          <li><a className='section-footer' href='https://www.figma.com/'>Shop</a></li>
                          <li><a className='section-footer' href='#subcribtion-section'>Subscribe</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>About Us</a></li>
                      </ul>
                      </div>
                      <div className='right-nav-div'>
                      <ul>
                          <li><a className='section-footer' href='https://www.figma.com/'>Support</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>Privacy Policy</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>Terms</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>FAQ</a></li>
                          <li><a className='section-footer' href='https://www.figma.com/'>Shipping Policy</a></li>
                      </ul>
                      </div>
                      </div>
                      <div className='pay-footer-div'>
                        <div className='we-accept-div'>
                      <h3 className='we-accept'>We accept</h3>
                      </div>
                        <div className='inline-pay-div'>
                      <div className='icon-pay-div'>
                      <img src={Amex}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Apple}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={F}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Discover}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Google}></img>
                      </div>
                      </div>
                      <div className='inline-pay-div'>
                      <div className='icon-pay-div'>
                      <img src={Mastercard}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Paypal}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Shop}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={V}></img>
                      </div>
                      <div className='icon-pay-div'>
                      <img src={Visa}></img>
                      </div>
                      </div>
                      <div className='qr-div'>
                      <img src={Qr}></img>
                      </div>
                      </div>
                      </div>
                  </nav>
                  </div>
                  <div className='white-line'></div>
                  <div className='footer-div'>
                  <div className='bottom-footer-div'>
                  
                    <div>
                  <h3 className='sakuratails'>2024 SakuraTails</h3>
                  </div>
                      <ul>
                      <div className='social-box-div'>
                          <div className='social-div'>
                          <li><a href='https://www.instagram.com/'><img src={Instagram}></img></a></li>
                          </div>
                          <div className='social-div'>
                          <li><a href='https://twitter.com/'><img src={X}></img></a></li>
                          </div>
                          <div className='social-div'>
                          <li><a href='https://www.facebook.com/'><img src={Facebook}></img></a></li>
                          </div>
                          <div className='social-div'>
                          <li><a href='https://www.tiktok.com/'><img src={Tiktok}></img></a></li>
                          </div>
                          </div>
                      </ul>
                      </div>
                      </div>
              </footer></>
              </body>
    )
}