import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
    <ul>
        <li>  Перший пункт </li>
        <li>  Другий пункт </li>
  </ul>
        </div>
        <div>
            <span className = 'logo'>SakuraTails</span>
        </div>
        <div>
    <ul>
        <li>  Перший пункт </li>
        <li>  Другий пункт </li>
        <li>  Третій пункт </li>
  </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
