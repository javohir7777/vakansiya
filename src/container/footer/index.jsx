import instagram from "../../assets/footer/🦆 icon _instagram_.png";
import facebook from "../../assets/footer/🦆 icon _facebook_.png";
import { NavLink } from "react-router-dom";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-flex">
          <div className="footer-one">
            <div className="footer-one__flex">
              <h1 className="footer-one__h1">Категории</h1>
              <ul className="footer-one__navlink">
                <NavLink className="nav-link__items" to="/">
                  Мужское
                </NavLink>
                <NavLink className="nav-link__items" to="/woman">
                  Женское
                </NavLink>
                <NavLink className="nav-link__items" to="/young">
                  Детские
                </NavLink>
              </ul>
            </div>

            <div className="footer-two__flex">
              <h1 className="footer-two__h1">О нас</h1>
              <ul>
                <li>Контакты</li>
                <li>О компании</li>
                <li>Правила пользования </li>
              </ul>
            </div>

            <div className="footer-three__flex">
              <h1 className="footer-three__h1">Мой аккаунт</h1>
              <ul>
                <li>Войти</li>
                <li>Заказы</li>
                <li>Список желаний</li>
              </ul>
            </div>
          </div>
          <div className="footer-two">
            <b>+998 ( 99 ) 280 75 76</b>
            <p>example@gmail.com</p>
            <p>example@mail.ru</p>
            <div className="instagram">
              <a href="https://www.instagram.com/javohir_zafar0vich">
                <img src={instagram} alt="" />
              </a>
              <a href="https://www.facebook.com/javohir.jumayev.7503/">
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
