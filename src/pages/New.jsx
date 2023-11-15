import Card from "../container/card/Card";
import { menproducts } from "../data/menProducts";

import "./New.scss";
const New = () => {
  return (
    <div className="new">
      <h1 className="new-title">Последние поступления</h1>
      <div className="new-flex">
        <h3 className="new-flex__h3">Новые рисунки</h3>
        <div className="new-flex__sort">
          <span className="new-sort">Сортировать:</span>
          <select className="new-select">
            <option className="new-option" value="price">
              Цена повозрастанию{" "}
            </option>
          </select>
        </div>
      </div>
      <div className="row">
        {menproducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
        <button className="row-button">Показать Больше</button>
      </div>
    </div>
  );
};

export default New;
