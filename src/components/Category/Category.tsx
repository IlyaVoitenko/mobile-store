import { Link } from "react-router-dom";
import "../../styles/pages/_index.scss";
import Footer from "../Footer";
import Header from "../Header";
import ArrowRightGrey from "../../assets/ArrowRightGrey.svg";
import arrowDownGrey from "../../assets/arrowDownGrey.svg";
import "../../styles/components/_categoryNavProduct.scss";
import "../../styles/components/_productNameAndCount.scss";
import "../../styles/components/_filterAndListProducts.scss";
const Category = () => {
  return (
    <div className="pageDefault">
      <Header />
      <main className="containerContentPage">
        <nav className="navProduct">
          <Link to={"/"} className="linkMainPage">
            Main
          </Link>
          <img src={ArrowRightGrey} alt="" />{" "}
          <span className="selectedProduct">Iphone</span>
        </nav>
        <div className="containerProductNameAndCount">
          <div className="productNameAndCount">
            <h1 className="productName">Iphone</h1>
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
