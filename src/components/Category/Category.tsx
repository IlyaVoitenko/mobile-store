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
  filtersProductsByCategory,
  handleIsCheckedFilter,
  handlePositionBtnApplyFilters,
  handleApplySelectedFilters,
  minAndMaxPriceListGoods,
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
  getIsPopularGoods,
  getPriceRangeSelector,
} from "../../store/selectors";
import {
  setSelectedFilters,
  setPopularGoodsOptionSelector,
  setPriceRangeGoods,
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
  const popularGoodsOptionSelector = useSelector(getIsPopularGoods);
  const priceRangeSelector = useSelector(getPriceRangeSelector);

  const containerRef = useRef<HTMLDivElement>(null);

  const [actionFilters, setActionFilters] = useState(selectedFilters);
  const [isShow, setIsShow] = useState(false);
  const [positionApplyBtn, setPositionApplyBtn] = useState(21);

  const filters = filtersProductsByCategory(category as CategoryType);
  const { model, storage, color, type } = filters || {};

  useEffect(() => {
    setIsShow(false);
    dispatch(
      setSelectedFilters({ model: [], storage: [], color: [], type: [] })
    );
  }, [category, dispatch]);

  useEffect(() => {
    dispatch(setSelectedFilters(actionFilters));
  }, [actionFilters, dispatch]);

  useEffect(() => {
    const { initialMinPrice, initialMaxPrice } =
      minAndMaxPriceListGoods(productsSelector[category] ?? []) || {};
    const { minPrice, maxPrice } = priceRangeSelector;
    const isEmptySelectedFiltersObject = Object.entries(selectedFilters).every(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, values]) => {
        if (values.length === 0) return true;
      }
    );
    if (
      isEmptySelectedFiltersObject &&
      minPrice === initialMinPrice &&
      maxPrice === initialMaxPrice
    ) {
      handleApplySelectedFilters(
        productsSelector[category] ?? [],
        selectedFilters,
        priceRangeSelector,
        dispatch
      );
    }
    if (isEmptySelectedFiltersObject) {
      dispatch(
        setPriceRangeGoods({
          minPrice: initialMinPrice,
          maxPrice: initialMaxPrice,
        })
      );
    }
  }, [selectedFilters, dispatch]);

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
          {priceRangeSelector.minPrice !== undefined && (
            <section className="containerSortProducts">
              <label className="sortProductsLabel" htmlFor="sortProducts">
                <span className="sortProductsSpan">
                  Sort by &nbsp; <img src={arrowDownGrey} alt="" />
                </span>
              </label>
              <select
                name="sortProducts"
                id="sortProducts"
                onChange={({ target }) => {
                  dispatch(setPopularGoodsOptionSelector(target.value));
                  if (target.value === "default") {
                    return handleApplySelectedFilters(
                      productsSelector[category] ?? [],
                      selectedFilters,
                      priceRangeSelector,
                      dispatch
                    );
                  }
                  if (target.value) {
                    return handleApplySelectedFilters(
                      productsSelector[category] ?? [],
                      selectedFilters,
                      priceRangeSelector,
                      dispatch,
                      target.value
                    );
                  }
                  if (!target.value) {
                    return handleApplySelectedFilters(
                      productsSelector[category] ?? [],
                      selectedFilters,
                      priceRangeSelector,
                      dispatch,
                      target.value
                    );
                  }
                }}
                value={popularGoodsOptionSelector}
              >
                <option value={"default"}>Default</option>
                <option value={"Popular"}>Popular</option>
                <option value={"Unpopular"}>Unpopular</option>
              </select>
            </section>
          )}
        </div>
        <section className="containerFilterAndListProducts">
          {priceRangeSelector.minPrice !== undefined && (
            <div className="filtersProducts" ref={containerRef}>
              <div className="filterPrises">
                <span className="filterTitle">Price</span>
                <PriceRange
                  listProducts={
                    productsByFilterSelector || productsSelector[category]
                  }
                />
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
                                handleIsCheckedFilter(
                                  target,
                                  setActionFilters,
                                  "model"
                                );
                              }}
                            />
                            <span className="box"></span>

                            <span className="filterSpan">{item}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                    {model.length > 5 && (
                      <button
                        className="btnShowAll"
                        onClick={() => setIsShow(!isShow)}
                      >
                        <span>Show all </span>
                        <img src={arrowDownBlue} alt="" />
                      </button>
                    )}
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
                                selectedFilters?.storage?.includes(item) ??
                                false
                              }
                              onChange={({ target }) => {
                                handlePositionBtnApplyFilters(
                                  target,
                                  setPositionApplyBtn,
                                  containerRef
                                );
                                handleIsCheckedFilter(
                                  target,
                                  setActionFilters,
                                  "storage"
                                );
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
                                handleIsCheckedFilter(
                                  target,
                                  setActionFilters,
                                  "color"
                                );
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
                                handleIsCheckedFilter(
                                  target,
                                  setActionFilters,
                                  "type"
                                );
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
                  onClick={() =>
                    handleApplySelectedFilters(
                      productsSelector[category] ?? [],
                      selectedFilters,
                      priceRangeSelector,
                      dispatch
                    )
                  }
                >
                  <span>Apply filter</span> <img src={successFilter} alt="" />
                </button>
              </div>
            </div>
          )}
          {priceRangeSelector.minPrice !== undefined ? (
            productsByFilterSelector?.length !== 0 ? (
              <div className="listProductsContainer">
                <ul className="listProducts">
                  {paginatedProducts?.map((item) => (
                    <ProductCard card={item} key={item.id} />
                  ))}
                </ul>
                {Array.isArray(productsByFilterSelector) && (
                  <Pagination list={productsByFilterSelector} />
                )}
              </div>
            ) : (
              <div className="listProductsContainer">
                <ul className="listProducts">
                  {paginatedProducts?.map((item) => (
                    <ProductCard card={item} key={item.id} />
                  ))}
                </ul>
                {Array.isArray(productsSelector[category]) &&
                  productsSelector[category]?.length !== 0 && (
                    <Pagination list={productsSelector[category]} />
                  )}
              </div>
            )
          ) : (
            <nav className="GoodsNotFound">
              <span>Goods not found . Iphone category is full </span>{" "}
              <Link to={"/category/Iphone"} className="GoodsNotFoundLink">
                Go to IPhone category
              </Link>
            </nav>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
