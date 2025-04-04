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
import { filtersProduct, handleFilter } from "../../helper";
import { IFiltersProduct } from "../../types";
import { useEffect, useState } from "react";

const Category = () => {
  const [isShow, setIsShow] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<IFiltersProduct>({
    models: [],
    memory: [],
    color: [],
    type: [],
  });
  const { category } = useParams();
  const filters = filtersProduct(category);
  const { models, memory, color, type } = filters || {};

  useEffect(() => {
    setSelectedFilters({
      models: [],
      memory: [],
      color: [],
      type: [],
    });
    setIsShow(false);
  }, [category]);

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);
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
                            checked={selectedFilters?.models?.includes(item)}
                            onChange={({ target }) =>
                              handleFilter(target, setSelectedFilters, "models")
                            }
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
                            checked={selectedFilters?.memory.includes(item)}
                            onChange={({ target }) =>
                              handleFilter(target, setSelectedFilters, "memory")
                            }
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
                            checked={selectedFilters?.color.includes(item)}
                            onChange={({ target }) =>
                              handleFilter(target, setSelectedFilters, "color")
                            }
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
                            checked={selectedFilters?.type.includes(item)}
                            onChange={({ target }) =>
                              handleFilter(target, setSelectedFilters, "type")
                            }
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
