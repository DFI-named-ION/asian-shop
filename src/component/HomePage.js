import React from 'react';
import Logo from '../images/logo/SakuraTails.svg';
import Basket from '../images/icons/basket.svg';
import Profile from '../images/icons/profile.svg';
import Noodle from '../images/icons/noodle.svg';
import Book from '../images/icons/book.svg';
import Group from '../images/icons/group.svg';
import Medal from '../images/icons/medal.svg';
import Click from '../images/icons/click.svg';
import Car from '../images/icons/car.svg';
import Box from '../images/icons/box.svg';
import LogoFooter from '../images/logo/logo-footer.svg';
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

function App() {
    return <Logo />;
    return <Basket />;
    return <Profile />;
    return <Noodle />;
    return <Book />;
    return <Group />;
    return <Medal />;
    return <Click />;
    return <Car />;
    return <Box />;
    return <LogoFooter />;
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


export default function HomePage() {
  return (
    <body className='homePage-body'>
    <><><header>
          <section className='header-section'>
            <div className='head-div'>
                <div className='head-left-div'>
                <div className='head-nav-div'>
                  <a className='header-link' href='https://www.figma.com/'>MARKET</a>
                  </div>
                  <div className='head-nav-div'>
                  <a className='header-link' href='https://www.figma.com/'>GIFT</a>
                  </div>
                  </div>
              <div className='head-logo-div'>
              <a className='head-logo' href='/'>SakuraTails</a>
              </div>
              <div className='head-right-div'>
              <div className='head-nav-div'>
                  <a className='header-link' href='https://www.figma.com/'>ABOUT</a>
                  </div>
                  <div className='head-nav-div'>
                  <a className='header-link' href='https://www.figma.com/'>BOXES</a>
                  </div>
              <div className='head-nav-div'>
              <a href='#' className='icon-head'>
                  <img src={Basket}></img>
              </a>
              </div>
              <div className='head-nav-div'>
              <a href='#' className='icon-head'>
                  <img src={Profile}></img>
              </a>
              </div>
              </div>
              </div>
          </section>
      </header>

          <main>
              <section id='new-box-section'>
                <div className='container-div'>
                <div className='left-box-div'>
                <div className='subtitle-div'>
                  <h3 className='subtitle'>A NEW BOX FROM SAKURATAILS</h3>
                  </div>
                  <h2 className='new-box-title'>Enjoy unbelievable snacks & surprises.</h2>
                  <div className='text-block-div'>
                  <p className='text-basis'>Experience the SakuraTails box, packed with a variety of treats to delight your senses. Subscribe now to enjoy these exceptional offerings while supplies last!</p>
                  </div>
                  <a href='#subcribtion-section'>
                      <input className='subscribe-button' type='button' value='Subscribe' />
                  </a>
                  </div>
                  <div className='right-box-div'>
                  <img src={require('../images/img/tea.jpg')} alt='tea'></img>
                  </div>
                  </div>
              </section>
              <section id='promocode-section'>
                <div className='promocode-div'>
                  <h2 className='promocode-banner'>Use code PICNIC24 to get FREE exclusive gifts!</h2>
                  </div>
              </section>
              <section id='description-box-section'>
                  <h3 className='subtitle'>EACH BOX IS BURSTING WITH</h3>
                  <h2 className='title-basis'>Snacks, smiles, and more.</h2>
                  <img src={Noodle} id='noodle'></img>
                  <h4 className='title-description'>13+ SNACKS</h4>
                  <p className='text-basis'>Taste premium Japanese treats and amazing snacks</p>
                  <img src={Book} id='book'></img>
                  <h4 className='title-description'>GUIDE</h4>
                  <p className='text-basis'>Learn about your snacks with a booklet of stories, allergen info, games, and more.</p>
                  <img src={Group} id='group'></img>
                  <h4 className='title-description'>SAKURATAILS KEEPSAKES</h4>
                  <p className='text-basis'>Get new items each box, such as cups, coasters, stickers, and more.</p>
                  <img src={Medal} alt='medal'></img>
                  <h4 className='title-description'>SAKURATAILS EXLUSIVES</h4>
                  <p className='text-basis'>Enjoy unique treats and items crafted exclusively for SakuraTails members.</p>
              </section>
              <section id='explanation-section'>
                <div className='explanation-div'>
                  <div className='title-explanation-div'>
                  <h2 className='main-title-explanation'>How it works?</h2>
                  </div>
                  <div className='container-explanation-div'>
                  <div className='block-explanation-div'>
                  <div className='img-explanation-div'>
                  <img src={Click} id='click'></img>
                  </div>
                  <div className='subtitle-explanation-div'>
                  <h2 className='title-explanation'>Subscribe</h2>
                  </div>
                  <div className='text-explanation-div'>
                  <p className='text-explanation'>and get a box deliverd monthly filled with snakcs, tea, rewards, and more.</p>
                  </div>
                  </div>
                  <div className='block-explanation-div'>
                  <div className='img-explanation-div'>
                  <img src={Car} id='car'></img>
                  </div>
                  <div className='subtitle-explanation-div'>
                  <h2 className='title-explanation'>Recieve</h2>
                  </div>
                  <div className='text-explanation-div'>
                  <p className='text-explanation'>authentic treats like cakes, mochi, chips packed with care and delivered to your door.</p>
                  </div>
                  </div>
                  <div className='block-explanation-div'>
                  <div className='img-explanation-div'>
                  <img src={Box} id='box'></img>
                  </div>
                  <div className='subtitle-explanation-div'>
                  <h2 className='title-explanation'>Exparience</h2>
                  </div>
                  <div className='text-explanation-div'>
                  <p className='text-explanation'>new curated themes each month around festivals, prefectures, and holidays!</p>
                  </div>
                  </div>
                  </div>
                  </div>
              </section>
              <section id='woman-section'>
                <div className='container-div'>
                    <div className='left-box-div'>
                    <div className='subtitle-div'>
                  <h3 className='subtitle'>MORE THAN JUST SNACKS</h3>
                  </div>
                  <h2 className='title-basis'>Experience Asia from Home</h2>
                  <div className='text-block-div'>
                  <p className='text-basis'>SakuraTails offers a unique way to learn, taste, and experience Asia and its vibrant culture from your home.</p>
                  </div>
                  <a href='#subcribtion-section'>
                      <input className='subscribe-button' type='button' value='Subscribe' />
                  </a>
                  <div className='gift-div'>
                  <a className='gift' href='#'>Gift</a>
                  </div>
                  </div>
                  <div className='right-box-div'>
                  <img src={require('../images/img/japanese.jpg')} alt='woman'></img>
                  </div>
                  </div>
              </section>
              <section id='partners-section'>
                <div className='partners-div'>
                <div className='title-partners-div'>
                  <h2 className='title-basis'>Partners</h2>
                  </div>
                  <div className='img-partners-div'>
                  <img src={require('../images/partners/one.jpg')} alt='partners'></img>
                  <img src={require('../images/partners/two.jpg')} alt='partners'></img>
                  <img src={require('../images/partners/three.jpg')} alt='partners'></img>
                  <img src={require('../images/partners/four.jpg')} alt='partners'></img>
                  </div>
                  </div>
              </section>
              <section id='goods-section'>
              </section>
              <section id='subcribtion-section'>
                  <h3 className='subcribtion-subtitle'>Snack On This, Not That</h3>
                  <h2 className='title-basis'>Choose your subcribtion plan</h2>
                  <article>
                      <p className='selected-plan'>SELECTED PLAN</p>
                      <h2 className='block-month'>6 - MONTH</h2>
                      <h3 className='text-title-block'>RECEIVE 3 BOXES AND SAVE 30$</h3>
                      <h2 className='best-value'>BEST VALUE</h2>
                      <h3 className='text-title-block'><span className='price-block'>$49.99</span> USD PER BOX</h3>
                      <h4 className='description-subcribtion-block'>You will be billed $149.97 every 6 months.</h4>
                      <input className='button-subcribtion' type='button' value='SELECT THIS PLAN' />
                  </article>
                  <article>
                      <p className='selected-plan'>SELECTED PLAN</p>
                      <h2 className='block-month'>1 - MONTH</h2>
                      <h3 className='text-title-block'>PAY PER BOX</h3>
                      <h3 className='text-title-block'><span className='price-block'>$59.99</span> USD PER BOX</h3>
                      <h4 className='description-subcribtion-block'>You will be billed $59.99 every 6 months.</h4>
                      <input className='button-subcribtion' type='button' value='SELECT THIS PLAN' />
                  </article>
              </section>
          </main></>

          <footer>
              <nav>
                  <a href='#'>
                      <img src={LogoFooter} alt='logo SakuraTails'></img>
                  </a>
                  <ul>
                      <li><a className='section-footer' href='/'>SakuraTails Sites</a></li>
                      <li><a className='section-footer' href='https://www.figma.com/'>SakuraTails Market</a></li>
                      <li><a className='section-footer' href='https://www.figma.com/'>SakuraTails Gift Boxes</a></li>
                  </ul>
                  <ul>
                      <li><a className='section-footer' href='https://www.figma.com/'>Shop</a></li>
                      <li><a className='section-footer' href='#subcribtion-section'>Subscribe</a></li>
                      <li><a className='section-footer' href='https://www.figma.com/'>About Us</a></li>
                  </ul>
                  <ul>
                      <li><a className='section-footer' href='https://www.figma.com/'>Support</a></li>
                      <li><a className='section-footer' href='https://www.figma.com/'>Privacy Policy</a></li>
                      <li><a className='section-footer' href='https://www.figma.com/'>Terms</a></li>
                      <li><a className='section-footer' href='https://www.figma.com/'>FAQ</a></li>
                      <li><a className='section-footer' href='https://www.figma.com/'>Shipping Policy</a></li>
                  </ul>
                  <h3 className='we-accept'>We accept</h3>
                  <img src={Amex}></img>
                  <img src={Apple}></img>
                  <img src={F}></img>
                  <img src={Discover}></img>
                  <img src={Google}></img>
                  <img src={Mastercard}></img>
                  <img src={Paypal}></img>
                  <img src={Shop}></img>
                  <img src={V}></img>
                  <img src={Visa}></img>
              </nav>
              <img src={Qr}></img>
              <h3 className='sakuratails'>2024 SakuraTails</h3>
              <nav>
                  <ul>
                      <li><a href='https://www.instagram.com/'><img src={Instagram}></img></a></li>
                      <li><a href='https://twitter.com/'><img src={X}></img></a></li>
                      <li><a href='https://www.facebook.com/'><img src={Facebook}></img></a></li>
                      <li><a href='https://www.tiktok.com/'><img src={Tiktok}></img></a></li>
                  </ul>
                  </nav>
          </footer></>
          </body>


  )
}