// import { NavLink, Outlet } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import menImg from "../assets/men/men.png";

import "./Men.scss";
import New from "./New";
import Popular from "./Popular";
import Edit from "./Edit";
const Men = () => {
  return (
    <div className="container men-container">
      <div className="men-card">
        <img className="men-img" src={menImg} alt="" />
        <div className="men-texts">
          <h1 className="men-h1">
            Универсальное решение для ваших нужд в одежде
          </h1>
          <p className="men-p">
            Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в
            Lode X. Мы предлагаем одежду ведущих брендов и редактирование
            изображений на ней.
          </p>
          <a href="#" className="men-chitat">
            <li className="men-chitat__li">читать далее</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="8"
              viewBox="0 0 22 8"
              fill="none"
            >
              <path
                d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM21.3536 4.35355C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464466C17.9763 0.269204 17.6597 0.269204 17.4645 0.464466C17.2692 0.659728 17.2692 0.976311 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53553C17.6597 7.7308 17.9763 7.7308 18.1716 7.53553L21.3536 4.35355ZM1 4.5H21V3.5H1V4.5Z"
                fill="#33CAFF"
              />
            </svg>
          </a>
        </div>
      </div>

      <Tabs
        defaultActiveKey="new"
        id="uncontrolled-tab-example"
        className="mb-3 my-5"
      >
        <Tab eventKey="new" title="Новинки">
          <New />
        </Tab>
        <Tab eventKey="popular" title="Популярние">
          <Popular />
        </Tab>
        <Tab eventKey="edit" title="Редактировать">
          <Edit />
        </Tab>
      </Tabs>

      <div className="carusel-basis">
        <hr className="carusel-hr" />
        <div className="carusel-flex">
          <h2 className="carusel-title">Популярные бренды</h2>
          <p className="carusel-p">Все бренды</p>
        </div>
      </div>
    </div>
  );
};

export default Men;
