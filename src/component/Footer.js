import React from 'react'

export default function Footer() {
  return (
    <footer>
      <nav>
      <a href='#'>
          <img  src={require('../images/logo/wolf-sakura-tails.png')} alt='logo SakuraTails'></img>
        </a>
        <ul>
          <li><a href='/'>SakuraTails Sites</a></li>
          <li><a href='https://www.figma.com/'>SakuraTails Market</a></li>
          <li><a href='https://www.figma.com/'>SakuraTails Gift Boxes</a></li>
        </ul>
        <ul>
          <li><a href='https://www.figma.com/'>Shop</a></li>
          <li><a href='#subcribtion-section'>Subscribe</a></li>
          <li><a href='https://www.figma.com/'>About Us</a></li>
        </ul>
        <ul>
          <li><a href='https://www.figma.com/'>Support</a></li>
          <li><a href='https://www.figma.com/'>Privacy Policy</a></li>
          <li><a href='https://www.figma.com/'>Terms</a></li>
          <li><a href='https://www.figma.com/'>FAQ</a></li>
          <li><a href='https://www.figma.com/'>Shipping Policy</a></li>
        </ul>
        <h3>We accept</h3>
        <img  src={require('../images/pay/amex.png')}></img>
        <img  src={require('../images/pay/apple.png')}></img>
        <img  src={require('../images/pay/f.png')}></img>
        <img  src={require('../images/pay/discover.png')}></img>
        <img  src={require('../images/pay/google.png')}></img>
        <img  src={require('../images/pay/mastercard.png')}></img>
        <img  src={require('../images/pay/paypal.png')}></img>
        <img  src={require('../images/pay/shop.png')}></img>
        <img  src={require('../images/pay/v.png')}></img>
        <img  src={require('../images/pay/visa.png')}></img>
        {/* pay */}
        </nav>
        <h3>2024 SakuraTails</h3>
        <nav>
          <ul>
          <img  src={require('../images/socials/instagram.png')}></img>
            <li><a href='https://www.figma.com/'>Instagram</a></li>
            <img  src={require('../images/socials/x.png')}></img>
            <li><a href='https://www.figma.com/'>Twitter</a></li>
            <img  src={require('../images/socials/facebook.png')}></img>
            <li><a href='https://www.figma.com/'>Facebook</a></li>
            <img  src={require('../images/socials/tiktok.png')}></img>
            <li><a href='https://www.figma.com/'>TikTok</a></li>
          </ul>
        </nav>
    </footer>
  )
}
