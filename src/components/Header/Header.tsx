import resources from "./resources";
import ArrowBlackDown from "../../assets/ArrowBlackDown.svg";
import { useState } from "react";
import "./../../styles/layout/_header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getTotalSumBucket,
  getBucketProducts,
  getProductsSelector,
} from "../../store/selectors";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import {
  checkValidContent,
  handleValidSearchProduct,
  filterProductsByUniqField,
} from "../../helper";

const validationSchema = Yup.object({
  searchGood: Yup.string().min(2, "min 2 symbols"),
});
const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(true);
  const totalSumBucket = useSelector(getTotalSumBucket);
  const products = useSelector(getProductsSelector);
  const productsAddedInBucket = useSelector(getBucketProducts);

  // const appleStore = filterProductsByUniqField(products, "model");
  const iPhonesList = filterProductsByUniqField(products["Iphone"], "model");
  const smartphonesList = filterProductsByUniqField(
    products["Android Smartphones"],
    "model"
  );
  const accessoriesList = filterProductsByUniqField(
    products["Accessories"],
    "model"
  );
  const formik = useFormik<{ searchGood: string }>({
    initialValues: {
      searchGood: "",
    },
    validationSchema,
    onSubmit: async (_, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      resetForm();
    },
  });
  return (
    <header className="containerHeader">
      <div className="containerInfoHeaderContext">
        <div className="containerInfoHeader">
          <div className="containerLogoAndWorkSchedule">
            <div className="logoContainer">
              <Logo />
              <button
                className="btnShowMenu"
                onClick={() => setIsShowMenu(!isShowMenu)}
              >
                &#9776;
              </button>
            </div>
            <div
              className={`addressContainer addressText ${
                !isShowMenu ? "showMenu" : "notShowMenu"
              }`}
            >
              <span>City name{"  "}</span>
              <address>st. Street name, 21</address>
            </div>

            <div
              className={`workScheduleContainer ${
                !isShowMenu ? "showMenu" : "notShowMenu"
              }`}
            >
              <div className="workSchedule">
                <span className="workScheduleDays">Mon-Fri:</span>{" "}
                <span className="workScheduleHours">10:00-19:00</span>{" "}
                <span className="workScheduleDays ">SAT:</span>
                <span className="workScheduleHours paddingLeft">
                  10:00-17:00
                </span>
              </div>
              <span className="workScheduleDays">SUN:&ensp;</span>{" "}
              <span className="workScheduleHours">Output</span>{" "}
            </div>
          </div>

          <div
            className={` containerSearchAndCallBack ${
              !isShowMenu ? "showMenu" : "notShowMenu"
            }`}
          >
            <search role="search" className="searchInputContainer">
              <form onSubmit={formik.handleSubmit}>
                <button type="submit" className="loopBtn">
                  <img src={resources.loop} alt="loop" className="loopImg" />
                </button>
                <input
                  onKeyDown={(e) =>
                    checkValidContent(e, handleValidSearchProduct)
                  }
                  onPaste={(e) => {
                    //get data from clipboard and check valid
                    const pasted = e.clipboardData.getData("text");
                    if (!handleValidSearchProduct(pasted)) e.preventDefault();
                  }}
                  onChange={formik.handleChange}
                  value={formik.values.searchGood}
                  name="searchGood"
                  className="searchInput"
                  placeholder="Search..."
                />
              </form>
            </search>

            <ContactInfo isFooter={false} />
          </div>
        </div>
      </div>

      <div
        className={`containerCategoriesHeader ${
          !isShowMenu ? "showMenu" : "notShowMenu"
        }`}
      >
        <nav className="CategoriesHeader">
          <div className="containerMenuAndDropdown">
            <div className="dropdown">
              <button className="dropBtn" title="Catalog">
                Catalog
              </button>
              <nav className="dropdown-content">
                <Link
                  to="/category/Accessories"
                  className="linksDropdownCategoriesProduct"
                >
                  Accessories
                </Link>
                <Link
                  to="/category/Android Smartphones"
                  className="linksDropdownCategoriesProduct"
                >
                  Android Smartphones
                </Link>
                <Link
                  to="/category/Apple Watch"
                  className="linksDropdownCategoriesProduct"
                >
                  Apple Watch
                </Link>
                <Link
                  to="/category/IMac"
                  className="linksDropdownCategoriesProduct"
                >
                  IMac
                </Link>
                <Link
                  to="/category/IPad"
                  className="linksDropdownCategoriesProduct"
                >
                  IPad
                </Link>
                <Link
                  to="/category/Iphone"
                  className="linksDropdownCategoriesProduct"
                >
                  Iphone
                </Link>
              </nav>
            </div>
            <div className="dropdownCategoriesProduct">
              <button className="dropdownCategoriesBtn ">iPhone</button> &nbsp;
              <img src={ArrowBlackDown} alt="" />
              <nav className="positionsDropdownIphone dropdownCategoriesProduct-content">
                {iPhonesList &&
                  iPhonesList.map((item) => (
                    <Link
                      to="/category/Iphone"
                      className="linksDropdownCategoriesProduct"
                      key={item.id}
                    >
                      iPhone {item.model}
                    </Link>
                  ))}
              </nav>
            </div>
            <div className="dropdownCategoriesProduct">
              <button className="  dropdownCategoriesBtn ">Apple Store</button>{" "}
              &nbsp;
              <img src={ArrowBlackDown} alt="" />
              <nav className="positionsDropdownAppleStore dropdownCategoriesProduct-content">
                <Link
                  to="/category/Apple Watch"
                  className="linksDropdownCategoriesProduct"
                >
                  Apple Watch
                </Link>
                <Link
                  to="/category/IMac"
                  className="linksDropdownCategoriesProduct"
                >
                  IMac
                </Link>
                <Link
                  to="/category/Iphone"
                  className="linksDropdownCategoriesProduct"
                >
                  IPhone
                </Link>
              </nav>
            </div>
            <div className="dropdownCategoriesProduct">
              <button className="  dropdownCategoriesBtn ">Smartphones</button>{" "}
              &nbsp;
              <img src={ArrowBlackDown} alt="" />
              <nav className="positionsDropdownSmartphones dropdownCategoriesProduct-content">
                {smartphonesList &&
                  smartphonesList.map((item) => (
                    <Link
                      to="/category/Android Smartphones"
                      className="linksDropdownCategoriesProduct"
                      key={item.id}
                    >
                      {item.model}
                    </Link>
                  ))}
              </nav>
            </div>
            <div className="dropdownCategoriesProduct">
              <button className=" dropdownCategoriesBtn ">
                Accessories &nbsp;
                <img src={ArrowBlackDown} alt="" />
              </button>
              <nav className="positionsDropdownAccessories dropdownCategoriesProduct-content">
                {accessoriesList &&
                  accessoriesList.map((item) => (
                    <Link
                      to="/category/Accessories"
                      className="linksDropdownCategoriesProduct"
                      key={item.id}
                    >
                      {item.model}
                    </Link>
                  ))}
              </nav>
            </div>

            <Link to="#" className="catalogMenuText">
              Contacts
            </Link>
            <Link to="/checkout" className="catalogMenuText">
              {" "}
              Shipping and payment
            </Link>
          </div>
          <div className="containerShoppingInfo">
            <img src={resources.shoppingBag} alt="shopping bag" />
            <div className="itemsInfoContainer">
              <span className="amountItems">
                {productsAddedInBucket.length ?? 0} goods
              </span>
              <span className="summaText">{totalSumBucket} usd</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
