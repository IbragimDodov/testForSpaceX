import React from 'react'
import headerLogo from '../assets/img/spacex-logo.png'
import BurgerMenu from './BurgerMenu';

function Header() {
  const [menuActive, setMenuActive] = React.useState(false);

  const headerNavArr = ['Главная', 'Технология', 'График полетов', 'Гарантии', 'О компаии', 'Контакты'];
  const burgerMenuItems = [{value: 'Главная', href: '/#'}, {value: 'Технология', href: '/#'}, {value: 'График полетов', href: '/#'}, {value: 'Гарантии', href: '/#'}, {value: 'О компаии', href: '/#'}, {value: 'Контакты', href: '/#'}, ]

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
      <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <span></span>
      </div>
      <BurgerMenu active={menuActive} setActive={setMenuActive} header={'Menu'} items={burgerMenuItems} />
    </header>
  )
}

export default Header