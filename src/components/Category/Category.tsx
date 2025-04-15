import { nanoid } from "nanoid";
import { Link, useParams } from "react-router-dom";
import "../../styles/pages/_index.scss";
import Footer from "../Footer";
import Header from "../Header";
import PriceRange from "../PriceRange";
import ArrowRightGrey from "../../assets/ArrowRightGrey.svg";
import arrowDownGrey from "../../assets/arrowDownGrey.svg";
import arrowDownBlue from "../../assets/arrowDownBlue.svg";
import successFilter from "../../assets/successFilter.svg";
import "../../styles/components/_categoryNavProduct.scss";
import "../../styles/components/_productNameAndCount.scss";
import "../../styles/components/_filterAndListProducts.scss";
import {
  filtersProductByCategory,
  handleFilter,
  handlePositionBtnApplyFilters,
  handleApplyFilters,
} from "../../helper";
import { IProduct, CategoryType, ProductMap } from "../../types";
import { useEffect, useState, useRef } from "react";
import ProductCard from "../ProductCard";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsSelector,
  getPaginatedProductsSelector,
  getProductsByFilterSelector,
  getSelectedFiltersSelector,
} from "../../store/selectors";
import {
  setSelectedFilters,
  setProductsByFilter,
} from "../../store/slices/productsSlice";
const Category = () => {
  const { category } = useParams() as { category: CategoryType };

  const dispatch = useDispatch();
  const productsSelector = useSelector(getProductsSelector) as ProductMap;
  const productsByFilterSelector = useSelector(
    getProductsByFilterSelector
  ) as IProduct[];
  const paginatedProducts = useSelector(
    getPaginatedProductsSelector
  ) as IProduct[];
  const selectedFilters = useSelector(getSelectedFiltersSelector);

  const containerRef = useRef<HTMLDivElement>(null);

  const [actionFilters, setActionFilters] = useState(selectedFilters);
  const [isShow, setIsShow] = useState(false);
  const [positionApplyBtn, setPositionApplyBtn] = useState(21);

  const filters = filtersProductByCategory(category as CategoryType);
  const { model, storage, color, type } = filters || {};

  useEffect(() => {
    setIsShow(false);
  }, [category, dispatch]);

  useEffect(() => {
    dispatch(setSelectedFilters(actionFilters));
  }, [actionFilters, dispatch]);

  return (
    <div className="pageDefault">
      <Header />
      <main className="containerContentPage">
        <nav className="navProduct">
          <Link to={"/"} className="linkMainPage">
            Main
          </Link>
          <img src={ArrowRightGrey} alt="" />{" "}
          <span className="selectedProduct">{category as CategoryType}</span>
        </nav>
        <div className="containerProductNameAndCount">
          <div className="productNameAndCount">
            <h1 className="productName">{category as CategoryType}</h1>
            <span className="productCount">
              {productsByFilterSelector?.length ||
                productsSelector[category]?.length}{" "}
              items
            </span>
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
          <div className="filtersProducts" ref={containerRef}>
            <div className="filterPrises">
              <span className="filterTitle">Price</span>
              <PriceRange />
              {model && (
                <div className="containerFilters">
                  <span className="filterTitle">Phone models</span>
                  <ul className={isShow ? "listFilterShow" : "listFilter"}>
                    {model.map((item: string) => (
                      <li key={nanoid()}>
                        <label htmlFor={item} className="filterLabel">
                          <input
                            type="checkbox"
                            id={item}
                            name={item}
                            className="checkboxFilter"
                            checked={
                              selectedFilters?.model?.includes(item) ?? false
                            }
                            onChange={({ target }) => {
                              handlePositionBtnApplyFilters(
                                target,
                                setPositionApplyBtn,
                                containerRef
                              );
                              handleFilter(target, setActionFilters, "model");
                            }}
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
              {storage && (
                <div className="containerFilters">
                  <span className="filterTitle">Memory</span>
                  <ul className={"listFilterShow"}>
                    {storage.map((item: string) => (
                      <li key={nanoid()}>
                        <label htmlFor={item} className="filterLabel">
                          <input
                            type="checkbox"
                            id={item}
                            name={item}
                            className="checkboxFilter"
                            checked={
                              selectedFilters?.storage?.includes(item) ?? false
                            }
                            onChange={({ target }) => {
                              handlePositionBtnApplyFilters(
                                target,
                                setPositionApplyBtn,
                                containerRef
                              );
                              handleFilter(target, setActionFilters, "storage");
                            }}
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
                    {color.map((item: string) => (
                      <li key={nanoid()}>
                        <label htmlFor={item} className="filterLabel">
                          <input
                            type="checkbox"
                            id={item}
                            name={item}
                            className="checkboxFilter"
                            checked={
                              selectedFilters?.color?.includes(item) ?? false
                            }
                            onChange={({ target }) => {
                              handlePositionBtnApplyFilters(
                                target,
                                setPositionApplyBtn,
                                containerRef
                              );
                              handleFilter(target, setActionFilters, "color");
                            }}
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
                    {type.map((item: string) => (
                      <li key={nanoid()}>
                        <label htmlFor={item} className="filterLabel">
                          <input
                            type="checkbox"
                            id={item}
                            name={item}
                            className="checkboxFilter"
                            checked={
                              selectedFilters?.type?.includes(item) ?? false
                            }
                            onChange={({ target }) => {
                              handlePositionBtnApplyFilters(
                                target,
                                setPositionApplyBtn,
                                containerRef
                              );
                              handleFilter(target, setActionFilters, "type");
                            }}
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
            <div
              className="applyFilterBtnContainer"
              style={{
                top: `${positionApplyBtn}%`,
              }}
            >
              <div className="triangle"></div>
              <button
                className="applyFilterBtn"
                onClick={() => {
                  const products: IProduct[] = productsSelector[category] ?? [];
                  const res = handleApplyFilters(products, selectedFilters);
                  dispatch(setProductsByFilter(res));
                }}
              >
                <span>Apply filter</span> <img src={successFilter} alt="" />
              </button>
            </div>
          </div>
          {productsByFilterSelector?.length !== 0 ? (
            <div className="listProductsContainer">
              <ul className="listProducts">
                {paginatedProducts &&
                  paginatedProducts?.map((item) => (
                    <ProductCard card={item} key={item.id} />
                  ))}
              </ul>
              {productsByFilterSelector?.length !== 0 &&
                Array.isArray(productsByFilterSelector) && (
                  <Pagination list={productsByFilterSelector} />
                )}
            </div>
          ) : (
            <div className="listProductsContainer">
              <ul className="listProducts">
                {paginatedProducts &&
                  paginatedProducts?.map((item) => (
                    <ProductCard card={item} key={item.id} />
                  ))}
              </ul>
              {productsSelector[category]?.length &&
                Array.isArray(productsSelector[category]) && (
                  <Pagination list={productsSelector[category]} />
                )}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
