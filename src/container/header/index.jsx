import { NavLink } from "react-router-dom";
import img__brand from "../../assets/navbar/header_menu-logo.png";
import Like from "../../assets/navbar/icon _ LIKE _.png";
import User from "../../assets/navbar/🦆 icon _person_.png";
import logo from "../../assets/navbar/Hamburger_icon.png";

import "./Header.scss";
import { useState } from "react";
const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const openHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <header>
      <div className="container">
        <div className="navbar-flex">
          <div className="nav-flex">
            <div className="nav-brand">
              <img className="nav-brand__img" src={img__brand} alt="" />
              <img
                className="nav-brand__hamburger"
                src={logo}
                alt=""
                onClick={openHamburger}
              />
            </div>
            <div className={hamburger ? `nav-menu` : `nav-menu nav-menu__none`}>
              <div className="nav-menus">
                <NavLink className="nav-link__items" to="/">
                  Мужское
                </NavLink>
                <NavLink className="nav-link__items" to="/woman">
                  Женское
                </NavLink>
                <NavLink className="nav-link__items" to="/young">
                  Детские
                </NavLink>
                <NavLink className="nav-link__items" to="/transaction">
                  Безопасная Сделка
                </NavLink>
                <NavLink className="nav-link__items" to="/rule">
                  Правило Пользование
                </NavLink>
              </div>
            </div>
            <img
              className="nav-menu__logo"
              src={logo}
              alt=""
              onClick={openHamburger}
            />
          </div>
          <div className={hamburger ? `button` : `button button__none`}>
            <div className="btn-img">
              <img src={Like} alt="" />
              <img src={User} alt="" />
            </div>
            <NavLink className="nav-link__item" to="/contactUs">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
