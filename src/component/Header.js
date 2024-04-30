import React from 'react'

export default function Header() {
  return (
    <header>
      <nav>
        {/* logo and menu */}
        <ul>
          <li><a href='#'>MARKET</a></li>
          <li><a href='#'>GIFT</a></li>
        </ul>
        <a href='#'>
          <img  src={require('../images/logo/SakuraTails.png')} alt='food'></img>
        </a>
        <ul>
          <li><a href='#'>ABOUT</a></li>
          <li><a href='#'>PAST</a></li>
          <li><a href='#'>BOXES</a></li>  
        </ul>
        <a href='#'>
          <img  src={require('../images/icons/basket.png')}></img>
        </a>
        <a href='#'>
          <img  src={require('../images/icons/profile.png')}></img>
        </a>
      </nav>
      {/* shopping cart and profile */}
    </header>
  )
}
