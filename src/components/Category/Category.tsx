import { Link, useParams } from "react-router-dom";
import "../../styles/pages/_index.scss";
import Footer from "../Footer";
import Header from "../Header";
import PriceRange from "../PriceRange";
import ArrowRightGrey from "../../assets/ArrowRightGrey.svg";
import arrowDownGrey from "../../assets/arrowDownGrey.svg";
import "../../styles/components/_categoryNavProduct.scss";
import "../../styles/components/_productNameAndCount.scss";
import "../../styles/components/_filterAndListProducts.scss";
import { filtersProduct } from "../../helper";
const Category = () => {
  const { category } = useParams();
  console.log(category, typeof category);
  const filters = filtersProduct(category);
  console.log(filters);
  const {} = filters || {};
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
