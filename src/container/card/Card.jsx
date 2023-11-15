import PropTypes from "prop-types";
import ptichka from "../../assets/men/🦆 icon _shield tick_ (1).png";
import heard from "../../assets/men/🦆 icon _heart add_.png";
import shopping from "../../assets/men/🦆 icon _shopping cart_.png";

import "./Card.scss";
import { Link } from "react-router-dom";
const Card = (product) => {
  console.log(product.img);
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
        <img src={product.img} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <div className="card-flex">
            <img className="card-flex__img" src={ptichka} alt="" />
            <p className="card-flex__text">
              {product.name}{" "}
              <span className="card-flex__span">{product.price} </span> - сум
            </p>
          </div>
          <hr className="card-hr" />
          <div className="card-icons">
            <div className="two-icon">
              <img src={heard} alt="" />
              <img src={shopping} alt="" />
            </div>
            <Link className="btn-button">
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.array,
};

export default Card;
