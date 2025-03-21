import resources from "./resources";
import { useState } from "react";
import "./../../styles/layout/_header.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(true);
  const [iPhoneSelect, setIPhoneSelect] = useState<string>("iPhone");
  const [appleStoreSelect, setAppleStoreSelect] =
    useState<string>("Apple Store");
  const [smartphonesSelect, setSmartphones] = useState<string>("Smartphones");
  const [accessoriesSelect, setAccessories] = useState<string>("Accessories");

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
              <img src={resources.loop} alt="loop" className="loopImg" />
              <input className="searchInput" placeholder="Search..." />
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
            <Link to="#" className="catalogMenuText">
              {" "}
              Shipping and payment
            </Link>
          </div>
          <div className="containerShoppingInfo">
            <img src={resources.shoppingBag} alt="shopping bag" />
            <div className="itemsInfoContainer">
              <span className="amountItems">0 goods</span>
              <span className="summaText">0 usd</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
