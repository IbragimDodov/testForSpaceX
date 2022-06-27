import React from 'react'
import headerLogo from '../assets/img/spacex-logo.png'

function Header() {

  const headerNavArr = ['Главная', 'Технология', 'График полетов', 'Гарантии', 'О компаии', 'Контакты'];

  return (
    <header className="header">
      <a href='/#' className="header__img-block">
        <img src={headerLogo} alt="header logo" className="header__logo" />
      </a>
      <ul className="header__list">
        {
          headerNavArr.map((item, index) => (
            <li key={index} className="header__list-item"> {item} </li>
          ))
        }
      </ul>
    </header>
  )
}

export default Header