import resources from "./resources";
import { useState } from "react";
import "./../../styles/layout/_header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalSumBucket, getBucketProducts } from "../../store/selectors";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import { checkValidContent, handleValidSearchProduct } from "../../helper";

const validationSchema = Yup.object({
  searchGood: Yup.string().min(2, "min 2 symbols"),
});
const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(true);
  const [iPhoneSelect, setIPhoneSelect] = useState<string>("iPhone");
  const [appleStoreSelect, setAppleStoreSelect] =
    useState<string>("Apple Store");
  const [smartphonesSelect, setSmartphones] = useState<string>("Smartphones");
  const [accessoriesSelect, setAccessories] = useState<string>("Accessories");
  const totalSumBucket = useSelector(getTotalSumBucket);
  const bucketProducts = useSelector(getBucketProducts);
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
                <Link to="#">Link 1</Link>
                <Link to="#">Link 2</Link>
                <Link to="#">Link 3</Link>
              </nav>
            </div>
            <div className="SelectWrapper ">
              <select
                aria-label="iPhone"
                defaultValue={iPhoneSelect}
                className="SelectHeader catalogMenuText"
                onChange={({ target }) => setIPhoneSelect(target.value)}
              >
                <option value="iPhone">iPhone</option>
              </select>
              <img
                src={resources.ArrowDown}
                alt=""
                className="arrowDownSelect"
              />
            </div>

            <div className="SelectWrapper">
              <select
                aria-label="Apple Store"
                defaultValue={appleStoreSelect}
                className="SelectHeader catalogMenuText"
                onChange={({ target }) => setAppleStoreSelect(target.value)}
              >
                <option value="Apple Store">Apple Store</option>
              </select>
              <img
                src={resources.ArrowDown}
                alt=""
                className="arrowDownSelect"
              />
            </div>

            <div className="SelectWrapper">
              <select
                aria-label="Smartphones"
                defaultValue={smartphonesSelect}
                className="SelectHeader catalogMenuText"
                onChange={({ target }) => setSmartphones(target.value)}
              >
                <option value="Smartphones">Smartphones</option>
              </select>
              <img
                src={resources.ArrowDown}
                alt=""
                className="arrowDownSelect"
              />
            </div>

            <div className="SelectWrapper">
              <select
                aria-label="Accessories"
                defaultValue={accessoriesSelect}
                className="SelectHeader catalogMenuText"
                onChange={({ target }) => setAccessories(target.value)}
              >
                <option value="Accessories">Accessories</option>
              </select>
              <img
                src={resources.ArrowDown}
                alt=""
                className="arrowDownSelect"
              />
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
                {bucketProducts.length ?? 0} goods
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
