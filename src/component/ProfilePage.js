import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useParams, useNavigate } from 'react-router-dom';

import { useErrors } from './providers/ErrorProvider';
import { useAuth } from './providers/AuthProvider';
import { useData } from './providers/DataProvider';

import Header from '../component/Header';
import Footer from '../component/Footer';
import PenProfile from '../images/icons/pen-profile.svg';

function App() {
  return <Header />;
  return <Footer />;
  return <PenProfile />;
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
      recipients: [{lastName: "", firstName: "", middleName: "", phone: ""}],
      selectedRecipient: null,
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
        const method = async () => {
            await requestData("firstName;middleName;lastName;language;sex;phones;birthday;doPrint;addresses;recipients;selectedRecipient;");
        };

        handleMethod(async () => {
            await method();
        });
    }, []);

    useEffect(() => {
      resetUser();
    }, [user]);

    useEffect(() => {
      if (catchedError.tags.includes("profile-page") && catchedError.tags.includes("overlay")) {
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
        recipients: (user.recipients && user.recipients.filter(recipient => recipient.firstName.trim() !== '' && recipient.middleName.trim() !== '' && recipient.lastName.trim() !== '' && recipient.phone.trim() !== '').length > 0) 
        ? user.recipients.filter(recipient => recipient.firstName.trim() !== '' && recipient.middleName.trim() !== '' && recipient.lastName.trim() !== '' && recipient.phone.trim() !== '')
        : [{ firstName: '', lastName: '', middleName: '', phone: '' }],
        selectedRecipient: user.selectedRecipient || null,
        doPrint: user.doPrint || false,
        birthday: user.birthday || "",
        language: user.language || ""
      });
    };

    const handleInputChange = (event, index) => {
      const { name, value, type, checked } = event.target;
      const parsedValue = type === 'checkbox' ? checked : value;

      setNewUser(prevState => {
        if (name.startsWith('city') || name.startsWith('street') || name.startsWith('houseNumber') || name.startsWith('apartmentNumber')) {
          const updatedAddresses = [...prevState.addresses];
          const field = name.replace(/[0-9]/g, '');
          updatedAddresses[index] = { ...updatedAddresses[index], [field]: parsedValue };
    
          return { ...prevState, addresses: updatedAddresses };
        } else if (name.startsWith("recipientFirstName") || name.startsWith("recipientMiddleName") || name.startsWith("recipientLastName") || name.startsWith("recipientPhone")) {
            const updatedRecipients = [...prevState.recipients];
            const field = name.replace(/recipient(\w+)/, (match, p1) => p1.charAt(0).toLowerCase() + p1.slice(1)).replace(/\d+$/, "");
            updatedRecipients[index] = { ...updatedRecipients[index], [field]: parsedValue };
            return { ...prevState, recipients: updatedRecipients, selectedRecipient: null };
        } else if (name.startsWith('telephone')) {
          const updatedPhones = [...prevState.phones];
          updatedPhones[index] = parsedValue;
    
          const filteredPhones = updatedPhones.filter(phone => phone.trim() !== '');
          return { ...prevState, phones: filteredPhones };
        } else if (name.startsWith("selectedRecipient")) {
            const selectedRecipient = value ? JSON.parse(value) : null;
            return { ...prevState, selectedRecipient };
        } else {
          return { ...prevState, [name]: parsedValue };
        }
      });
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

    const handleAddRecipientField = () => {
        handleMethod(() => {
            const hasError = newUser.recipients.some(recipient => {
                if (!recipient.firstName.trim() || !recipient.lastName.trim() || !recipient.phone.trim()) {
                    throw "recipient-format-error";
                }
                return false;
            });

            if (!hasError && newUser.recipients.length < 3) {
                setNewUser(prevState => ({
                    ...prevState,
                    recipients: [...prevState.recipients, {firstName: "", lastName: "", middleName: "", phone: ""}]
                }));
            }
        });
    };

    const handleSave = async () => {
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
    
        const validRecipients = newUser.recipients.filter(recipient => 
            recipient.firstName.trim() !== '' ||
            recipient.middleName.trim() !== '' ||
            recipient.lastName.trim() !== ''
        );

        const hasRecipientError = validRecipients.some(recipient => 
            recipient.firstName.trim() === '' ||
            recipient.middleName.trim() === '' ||
            recipient.lastName.trim() === ''
        );

        if (hasRecipientError) {
            throw "recipient-format-error";
        }

        const hasRecipientPhoneError = validRecipients.some(recipient => 
            !/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/.test(recipient.phone)
        );
        
        if (hasRecipientPhoneError) {
            throw "phone-format-error";
        }

        setNewUser(prevState => ({
          ...prevState,
          phones: validPhones,
          addresses: validAddresses
        }));

        try {
          await updateUserInfo({ ...newUser, phones: validPhones, addresses: validAddresses, recipients: validRecipients });
          window.location.reload(true);
        } catch (err) {
          throw err;
        }
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
        handleMethod(() => {
            logout();
        });
    };

    const handleCancelChangePassword = () => {
      setOldPassword("");
      setNewPassword("");
      setNewPasswordRepeat("");
      setModalIsOpenProfilePassword(false);
    };

    const handleChangePassword = async () => {
      handleMethod(async () => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,64}$/;
        if (!passRegex.test(newPassword)) throw "password-format-error";
        if (newPassword !== newPasswordRepeat) throw "not-same-error";
        try {
          await updatePassword(oldPassword, newPassword, newPasswordRepeat);
          window.location.reload(true);
        } catch (err) {
          throw err;
        }
      });
    };

    return (
        <body className='ProfilePage-body'>
        <><><header>
             <Header/>
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
                            <div className='email-dis-profile'>
                            <p className='input-profile'>
                              <input className='line-profile' type='email' name='email' disabled placeholder='email@gmail.com' required value={newUser.email}/>
                            </p>
                            {/* NO HTML AVAILABLE */}
                            {/* <a href='#' className='icon-profile'>
                            <img src={PenProfile}></img>
                            </a> */}
                            </div>
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

                {/* PARCEL RECIPIENT PART */}
                <div className='bottom-block-div'>
                    {isEditing.section === "recipient" && isEditing.state ? (
                        <div className='top-left-block-div'>
                            <h2 className='title-profile-block title-black-profile-block'>
                                Мої отримувачі замовлень
                            </h2>
                            <div className='column-profile-div'>
                                <h4>Отримувач (за замовчуванням)</h4>
                                <p className='input-profile'>
                                    <select className='select-profile' name='selectedRecipient' value={JSON.stringify(newUser.selectedRecipient) || ''} onChange={handleInputChange}>
                                        <option value='' defaultChecked>Не обрано</option>
                                        {newUser.recipients
                                            .filter(recipient =>
                                                recipient.firstName.trim() !== '' &&
                                                recipient.lastName.trim() !== '' &&
                                                recipient.middleName.trim() !== '' &&
                                                recipient.phone.trim() !== ''
                                            )
                                            .map((recipient, index) => (
                                                <option key={index} value={JSON.stringify(recipient)}>
                                                    {recipient.lastName} {recipient.firstName} {recipient.middleName}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </p>
                            </div>
                            <p className='title-bottom-profile'>
                                Отримувач замовлень
                            </p>
                            <div className='columns-profile-div columns-bottom-profile-div custom-profile-div'>
                                <div className='column-profile-div'>
                                    <h4>Прізвище</h4>
                                    {newUser.recipients.map((recipient, index) => (
                                        <p className='input-profile'>
                                            <input className='line-profile' type='text' name={`recipientLastName${index + 1}`} value={recipient.lastName} onChange={(e) => { handleInputChange(e, index) }} required/>
                                        </p>
                                    ))}
                                    {newUser.recipients.length < 3 && (
                                        <a className='add-info-profile' href='#' onClick={handleAddRecipientField}>
                                            <p>Додати ще отримувача</p>
                                        </a>
                                    )}
                                </div>
                                <div className='column-profile-div'>
                                    <h4>Ім'я</h4>
                                    {newUser.recipients.map((recipient, index) => (
                                        <p className='input-profile'>
                                            <input className='line-profile' type='text' name={`recipientFirstName${index + 1}`} value={recipient.firstName} onChange={(e) => { handleInputChange(e, index) }} required/>
                                        </p>
                                    ))}
                                </div>
                                <div className='column-profile-div'>
                                    <h4>По батькові</h4>
                                    {newUser.recipients.map((recipient, index) => (
                                        <p className='input-profile'>
                                            <input className='line-profile' type='text' name={`recipientMiddleName${index + 1}`} value={recipient.middleName} onChange={(e) => { handleInputChange(e, index) }} required/>
                                        </p>
                                    ))}
                                </div>
                                <div className='column-profile-div'>
                                    <h4>Мобільний телефон</h4>
                                    {newUser.recipients.map((recipient, index) => (
                                        <p className='input-profile'>
                                            <input className='line-profile' type='text' name={`recipientPhone${index + 1}`} value={recipient.phone} onChange={(e) => { handleInputChange(e, index) }} required/>
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className='button-profile-div button-medium-profile-div'>
                                <input className='save-profile-button' type='button' value='Зберегти' onClick={handleSave}  />
                                <input className='cancel-profile-button' type='button' value='Скасувати' onClick={handleCancelEditing} />
                            </div>
                        </div>
                    ) : (
                        <div className='top-left-block-div'>
                            {user?.recipients?.length > 0 ? (
                                <>
                                    <h2 className='title-profile-block'>
                                        Мої отримувачі замовлень
                                    </h2>
                                    <div className='column-profile-div'>
                                        {user.recipients.map((recipient, index) => (
                                            <>
                                                <h4>{recipient.lastName} {recipient.firstName} {recipient.middleName}</h4>
                                                <p>{recipient.phone}</p>
                                            </>
                                        ))}
                                    </div>
                                    <div className='column-profile-div'>
                                        <h4>Отримувач (за замовчуванням)</h4>
                                        {user.selectedRecipient !== null ? (
                                            <>
                                                <h4>{user.selectedRecipient.lastName} {user.selectedRecipient.firstName} {user.selectedRecipient.middleName}</h4>
                                                <p>{user.selectedRecipient.phone}</p>
                                            </>
                                        ) : (
                                            <>
                                                <p>Не вказано</p>
                                            </>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>    
                                    <div className='column-profile-div'>
                                        <p>Не вказано</p>
                                    </div>
                                </>
                            )}
                            <input className='edit-profile-button' type='button' value='Редагувати' onClick={() => { handleSetEditing("recipient") }} />
                        </div>
                    )}
                </div>

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
                <Footer/>
              </footer></>
              </body>
    )
}