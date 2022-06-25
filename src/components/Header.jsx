import React from 'react'
import headerLogo from '../assets/img/spacex-logo.png'

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="header logo" className="header__logo" />
      <ul className="header__list">
        <li className="header__list-item">Главная</li>
        <li className="header__list-item">Технология</li>
        <li className="header__list-item">График полетов</li>
        <li className="header__list-item">Гарантии</li>
        <li className="header__list-item">О компаии</li>
        <li className="header__list-item">Контакты</li>
      </ul>
    </header>
  )
}

export default Header