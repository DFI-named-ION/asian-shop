import React from 'react'
import Logo from '../images/logo/SakuraTails.svg';

function App() {
  return <Logo />;
}

export default function Header() {
  return (
    <header>
      <nav className='head-nav'>
        <ul>
          <li><a className='header-link' href='https://www.figma.com/'>MARKET</a></li>
          <li><a className='header-link' href='https://www.figma.com/'>GIFT</a></li>
        </ul>
        <a href='/'>
          <img  src={Logo}></img>
        </a>
        <ul>
          <li><a className='header-link' href='https://www.figma.com/'>ABOUT</a></li>
          <li><a className='header-link' href='https://www.figma.com/'>BOXES</a></li>  
        </ul>
        <a href='#'>
          <img  src={require('../images/icons/basket.png')}></img>
        </a>
        <a href='#'>
          <img  src={require('../images/icons/profile.png')}></img>
        </a>
      </nav>
    </header>
  )
}
