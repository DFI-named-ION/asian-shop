import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Collapse} from 'react-collapse';

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
import WhiteWolf from '../images/logo/white-wolf.svg';

import { useAuth } from './providers/AuthProvider';

function App() {
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

   

    export default function Header (){
        const {user} = useAuth();
        const navigate = useNavigate();
        const [isProfileModalOpen, setIsProfileModalOpen] = useState("");
    
        const handleHeadClick = (e) => {
          e.preventDefault();
          if (!user) {
            navigate('/authorization');
          } else {
            setIsProfileModalOpen(!isProfileModalOpen);
          }
        };
    
        const handleSellerProfileClick = () => {
            navigate("/seller");
        };
    
        const handleSettingsClick = () => {
            navigate("/profile-settings")
        };
    
    return (
        <><div className='footer-div'>
            <nav>
                <div className='top-footer-div'>
                    <div className='logo-footer-div'>
                        <img className='footer-wolf' href='/' src={WhiteWolf} alt='logo SakuraTails'></img>
                        <a className='head-logo footer-logo' href='/'>SakuraTails</a>
                    </div>
                    <div className='nav-footer-div'>
                        <div className='left-nav-div'>
                            <ul>
                                <li className='section-footer-bold'><a className='section-footer section-footer-bold'>Тільки на SakuraTails</a></li>
                                <li className='section-footer'><a className='section-footer' href='/'>Магазин</a></li>
                                <li className='section-footer'><a className='section-footer' href='/#subcribtion-section'>Підписка</a></li>
                                <li className='section-footer'><a className='section-footer' href='/seller/authorization'>Стати партнером</a></li>
                            </ul>
                        </div>
                        <div className='right-nav-div'>
                            <ul>
                                <li className='section-footer-bold'><a className='section-footer section-footer-bold'>Підтримка</a></li>
                                <li className='section-footer'><a className='section-footer' href='/privacy'>Політика конфіденційності</a></li>
                                <li className='section-footer'><a className='section-footer' href='/about'>Про нас</a></li>
                                <li className='section-footer'><a className='section-footer' href='/terms-of-use'>Умови</a></li>
                                <li className='section-footer'><a className='section-footer' href='/faq'>FAQ</a></li>
                                <li className='section-footer'><a className='section-footer' href='/delivery-policy'>Політика доставки</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='pay-footer-div'>
                        <div className='we-accept-div'>
                            <h3 className='we-accept'>Ми приймаємо</h3>
                        </div>
                        <div className='inline-pay-div'>
                            <div className='icon-pay-div'>
                                <img src={Mastercard}></img>
                            </div>
                            <div className='icon-pay-div'>
                                <img src={Paypal}></img>
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
        </div><div className='white-line'></div><div className='footer-div'>
                <div className='bottom-footer-div'>

                    <div>
                        <p className='sakuratails'>2024 SakuraTails</p>
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
            </div></>
    );
};