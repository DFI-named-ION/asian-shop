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
    <><><header>
          <section className='header-section'>
              <ul>
                  <li><a className='header-link' href='https://www.figma.com/'>MARKET</a></li>
                  <li><a className='header-link' href='https://www.figma.com/'>GIFT</a></li>
              </ul>

              <ul>
                  <li><a className='header-link' href='https://www.figma.com/'>MARKET</a></li>
                  <li><a className='header-link' href='https://www.figma.com/'>GIFT</a></li>
              </ul>
              <a href='/'>
                  <img src={Logo}></img>
              </a>
              <ul>
                  <li><a className='header-link' href='https://www.figma.com/'>ABOUT</a></li>
                  <li><a className='header-link' href='https://www.figma.com/'>BOXES</a></li>
              </ul>
              <a href='#'>
                  <img src={Basket}></img>
              </a>
              <a href='#'>
                  <img src={Profile}></img>
              </a>
          </section>

      </header>

          <main>
              <section id='new-box-section'>

                  <h3 className='subtitle'>A NEW BOX FROM SAKURATAILS</h3>
                  <h2 className='new-box-title'>Enjoy unbelievable snacks & surprises.</h2>
                  <p className='text-basis'>Experience the SakuraTails box, packed with a variety of treats to delight your senses. Subscribe now to enjoy these exceptional offerings while supplies last!</p>
                  <a href='#subcribtion-section'>
                      <input className='subscribe-button' type='button' value='Subscribe' />
                  </a>
                  <img src={require('../images/img/tea.jpg')} alt='tea'></img>
              </section>
              <section id='promocode-section'>
                  <h2 className='promocode-banner'>Use code PICNIC24 to get FREE exclusive gifts!</h2>
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
                  <h2 className='title-basis'>How it works?</h2>
                  <img src={Click} id='click'></img>
                  <h2 className='title-explanation'>Subscribe</h2>
                  <p className='text-explanation'>and get a box deliverd monthly filled with snakcs, tea, rewards, and more.</p>
                  <img src={Car} id='car'></img>
                  <h2 className='title-explanation'>Recieve</h2>
                  <p className='text-explanation'>authentic treats like cakes, mochi, chips packed with care and delivered to your door.</p>
                  <img src={Box} id='box'></img>
                  <h2 className='title-explanation'>Exparience</h2>
                  <p className='text-explanation'>new curated themes each month around festivals, prefectures, and holidays!</p>
              </section>
              <section id='woman-section'>
                  <h3 className='subtitle'>MORE THAN JUST SNACKS</h3>
                  <h2 className='title-basis'>Experience Asia from Home</h2>
                  <p className='text-basis'>SakuraTails offers a unique way to learn, taste, and experience Asia and its vibrant culture from your home.</p>
                  <a href='#subcribtion-section'>
                      <input className='subscribe-button' type='button' value='Subscribe' />
                  </a>
                  <a href='#'>Gift</a>
                  <img src={require('../images/img/japanese.jpg')} alt='woman'></img>
              </section>
              <section id='partners-section'>
                  <h2 className='title-basis'>Partners</h2>
                  <img src={require('../images/partners/one.jpg')} alt='partners'></img>
                  <img src={require('../images/partners/two.jpg')} alt='partners'></img>
                  <img src={require('../images/partners/three.jpg')} alt='partners'></img>
                  <img src={require('../images/partners/four.jpg')} alt='partners'></img>
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


  )
}