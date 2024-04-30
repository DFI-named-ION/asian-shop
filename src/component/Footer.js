import React from 'react'

export default function Footer() {
  return (
    <footer>
      <nav>
      <a href='#'>
          <img  src={require('../images/logo/wolf-sakura-tails.png')} alt='logo SakuraTails'></img>
        </a>
        <ul>
          <li><a href='#'>SakuraTails Sites</a></li>
          <li><a href='#'>SakuraTails Market</a></li>
          <li><a href='#'>SakuraTails Gift Boxes</a></li>
        </ul>
        <ul>
          <li><a href='#'>Shop</a></li>
          <li><a href='#'>Subscribe</a></li>
          <li><a href='#'>About Us</a></li>
        </ul>
        <ul>
          <li><a href='#'>Support</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Terms</a></li>
          <li><a href='#'>FAQ</a></li>
          <li><a href='#'>Shipping Policy</a></li>
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
            <li><a href='#'>Instagram</a></li>
            <li><a href='#'>Twitter</a></li>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>TikTok</a></li>
          </ul>
        </nav>
    </footer>
  )
}
