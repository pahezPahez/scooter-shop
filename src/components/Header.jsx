import React, { useContext } from "react";
import './Header.css';
import phoneIcon from '../assets/icons/phone.svg'
import envelopeIcon from '../assets/icons/envelope.svg'
import { Link } from "react-scroll";
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header role="header" className={`header ${theme}`}>
      <div className="header__container">
        <a href="" className="header__container-title">ScooterShop</a>

        <div className="header-info">
          <Link className="header-info__product" to="productList" smooth={true} duration={500}>Товар</Link>
          <Link className="header-info__product" to="teamMembers" smooth={true} duration={500}>Команда</Link>
          <Link className="header-info__product" to="contacts" smooth={true} duration={500}>Контакты</Link>
          <Link className="header-info__product" to="serviceList" smooth={true} duration={500}>Услуги</Link>
        </div>

        <div className="header-box">
          <img className="header-box__phone" src={phoneIcon} alt="телефон" />
          <p className="header-box__number">+7 994-002-20-99</p>
          <img className="header-box__mail" src={envelopeIcon} alt="почта" />
          <p className="header-box__pochta">scootershop123@gmail.com</p>
        </div>

        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Темная' : 'Светлая'}
        </button>
      </div>
    </header>
  );
};

export default Header;