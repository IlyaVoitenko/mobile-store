import { nanoid } from "nanoid";
import { Link, useParams } from "react-router-dom";
import "../../styles/pages/_index.scss";
import Footer from "../Footer";
import Header from "../Header";
import PriceRange from "../PriceRange";
import { Helmet } from "react-helmet-async";
import deliveryGoods from "../../assets/deliveryGoods.svg";
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
  handleShowDefaultListGoods,
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
  const productFilteredSelector = useSelector(
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
  const { model, storage, color } = filters || {};

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

    const isEmptySelectedFiltersObject = Object.entries(selectedFilters).every(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, values]) => {
        if (values.length === 0) return true;
      }
    );

    if (isEmptySelectedFiltersObject) {
      handleShowDefaultListGoods(
        productsSelector[category] ?? [],
        selectedFilters,
        dispatch
      );
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
      <Helmet>
        <title>Store Mobile | Categories of products</title>
        <meta
          name="description"
          content={`Explore our ${category} category with ${productsSelector[category]?.length} items. Find the best deals on mobile phones, accessories, and more.`}
        />
        <meta property="og:image" content={deliveryGoods} />
        <meta
          property="og:title"
          content={`Store Mobile | ${category} Category`}
        />
        <meta
          property="og:description"
          content={`Explore our ${category} category with ${productsSelector[category]?.length} items. Find the best deals on mobile phones, accessories, and more.`}
        />
        <meta
          property="og:url"
          content={`https://mobile-store-gold.vercel.app/category/${category} `}
        />
      </Helmet>
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
              {productFilteredSelector?.length ||
                productsSelector[category]?.length}{" "}
              items
            </span>
          </div>
          {productFilteredSelector?.length !== 0 ||
            (productsSelector[category] !== undefined && (
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
            ))}
        </div>
        <section className="containerFilterAndListProducts">
          {productFilteredSelector?.length !== 0 ||
          productsSelector[category] !== undefined ? (
            <div className="filtersProducts" ref={containerRef}>
              <div className="filterPrises">
                <span className="filterTitle">Price</span>
                <PriceRange
                  listProducts={
                    productFilteredSelector || productsSelector[category]
                  }
                />
                {model && (
                  <div className="containerFilters">
                    <span className="filterTitle">
                      {category === "Accessories" ? " Type" : "Phone models"}{" "}
                    </span>
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
                        onClick={() => setIsShow((isShow) => !isShow)}
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
          ) : null}
          {productFilteredSelector?.length ||
          productsSelector[category]?.length ? (
            productFilteredSelector?.length !== 0 ? (
              <div className="listProductsContainer">
                <ul className="listProducts">
                  {paginatedProducts?.map((item) => (
                    <ProductCard
                      card={item}
                      category={category}
                      key={item.id}
                    />
                  ))}
                </ul>
                {Array.isArray(productFilteredSelector) && (
                  <Pagination list={productFilteredSelector} />
                )}
              </div>
            ) : (
              <div className="listProductsContainer">
                <ul className="listProducts">
                  {paginatedProducts?.map((item) => (
                    <ProductCard
                      card={item}
                      category={category}
                      key={item.id}
                    />
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
