import { nanoid } from "nanoid";
import { Link, useParams } from "react-router-dom";
import "../../styles/pages/_index.scss";
import Footer from "../Footer";
import Header from "../Header";
import PriceRange from "../PriceRange";
import ArrowRightGrey from "../../assets/ArrowRightGrey.svg";
import arrowDownGrey from "../../assets/arrowDownGrey.svg";
import arrowDownBlue from "../../assets/arrowDownBlue.svg";
import "../../styles/components/_categoryNavProduct.scss";
import "../../styles/components/_productNameAndCount.scss";
import "../../styles/components/_filterAndListProducts.scss";
import { filtersProduct } from "../../helper";
import { useState } from "react";
const Category = () => {
  const [isShow, setIsShow] = useState(false);
  const { category } = useParams();
  const filters = filtersProduct(category);
  const { models, memory, color, type } = filters || {};
  return (
    <div className="pageDefault">
      <Header />
      <main className="containerContentPage">
        <nav className="navProduct">
          <Link to={"/"} className="linkMainPage">
            Main
          </Link>
          <img src={ArrowRightGrey} alt="" />{" "}
          <span className="selectedProduct">{category}</span>
        </nav>
        <div className="containerProductNameAndCount">
          <div className="productNameAndCount">
            <h1 className="productName">{category}</h1>
            <span className="productCount">0 items</span>
          </div>
          <section className="containerSortProducts">
            <label className="sortProductsLabel" htmlFor="sortProducts">
              <span className="sortProductsSpan">
                Sort by &nbsp; <img src={arrowDownGrey} alt="" />
              </span>
            </label>
            <select name="sortProducts" id="sortProducts">
              <option value="Popular">Popular</option>
            </select>
          </section>
        </div>
        <section className="containerFilterAndListProducts">
          <div className="filtersProducts">
            <div className="filterPrises">
              <span className="filterTitle">Price</span>
              <PriceRange />
              {models && (
                <div className="containerFilters">
                  <span className="filterTitle">Phone models</span>
                  <ul className={isShow ? "listFilterShow" : "listFilter"}>
                    {models.map((item) => (
                      <li key={nanoid()}>
                        <label htmlFor={item} className="filterLabel">
                          <input
                            type="checkbox"
                            id={item}
                            name={item}
                            className="checkboxFilter"
                          />
                          <span className="box"></span>

                          <span className="filterSpan">{item}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="btnShowAll"
                    onClick={() => setIsShow(!isShow)}
                  >
                    <span>Show all </span>
                    <img src={arrowDownBlue} alt="" />
                  </button>
                </div>
              )}
              {memory && (
                <div className="containerFilters">
                  <span className="filterTitle">Memory</span>
                  <ul className={"listFilterShow"}>
                    {memory.map((item) => (
                      <li key={nanoid()}>
                        <label htmlFor={item} className="filterLabel">
                          <input
                            type="checkbox"
                            id={item}
                            name={item}
                            className="checkboxFilter"
                          />
                          <span className="box"></span>

                          <span className="filterSpan">{item}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {color && (
                <div className="containerFilters">
                  <span className="filterTitle">Color</span>
                  <ul className={"listFilterShow"}>
                    {color.map((item) => (
                      <li key={nanoid()}>
                        <label htmlFor={item} className="filterLabel">
                          <input
                            type="checkbox"
                            id={item}
                            name={item}
                            className="checkboxFilter"
                          />
                          <span className="box"></span>

                          <span className="filterSpan">{item}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {type && (
                <div className="containerFilters">
                  <span className="filterTitle">Type</span>
                  <ul className={"listFilterShow"}>
                    {type.map((item) => (
                      <li key={nanoid()}>
                        <label htmlFor={item} className="filterLabel">
                          <input
                            type="checkbox"
                            id={item}
                            name={item}
                            className="checkboxFilter"
                          />
                          <span className="box"></span>

                          <span className="filterSpan">{item}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <ul className="listProducts"></ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
