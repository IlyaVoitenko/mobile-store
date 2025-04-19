import Header from "../Header";
import Footer from "../Footer";
import ProductCollection from "../ProductCollection";
import { Link, useParams } from "react-router-dom";
import { getProductsSelector } from "../../store/selectors";
import { CategoryType } from "../../types";
import ArrowRightGrey from "../../assets/ArrowRightGrey.svg";
import { useSelector } from "react-redux";

const GoodInfo = () => {
  const { category } = useParams();
  const productsSelector = useSelector(getProductsSelector);

  return (
    <div className="pageDefault">
      <Header />
      <main className="containerContentPage">
        <nav className="navProduct">
          <Link to={"/"} className="linkMainPage">
            Main
          </Link>
          <img src={ArrowRightGrey} alt="" />{" "}
          <span className="linkMainPage">{category as CategoryType}</span>
          <img src={ArrowRightGrey} alt="" />{" "}
          <span className="selectedProduct">{category as CategoryType}</span>
        </nav>

        <div className="giftMessageContainer"></div>
        <div className="productOptionsContainer"></div>
        <div className="shippingAndPaymentContainer"></div>
        <div className="infoAndReviewsContainer">
          <div></div>
          <div></div>
        </div>
        <ProductCollection
          listProduct={productsSelector}
          title={"Recommended"}
          category={category as CategoryType}
        />
      </main>

      <Footer />
    </div>
  );
};

export default GoodInfo;
