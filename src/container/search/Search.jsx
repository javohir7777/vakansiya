import search from "../../assets/search/search-img.png";

import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="container input-group">
        <img src={search} alt="" />
        <input
          className="search-input"
          type="text"
          placeholder="Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... "
        />
      </div>
    </div>
  );
};

export default Search;
