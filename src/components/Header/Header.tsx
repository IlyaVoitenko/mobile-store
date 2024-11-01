import { useState } from "react";

import "./../../styles/layout/_header.scss";
import logo from "/logo.svg";
import loop from "../../assets/loop.svg";
import shoppingBag from "../../assets/shopping-bag.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [iPhoneSelect, setIPhoneSelect] = useState<string>("iPhone");
  const [appleStoreSelect, setAppleStoreSelect] =
    useState<string>("Apple Store");
  const [smartphonesSelect, setSmartphones] = useState<string>("Smartphones");
  const [accessoriesSelect, setAccessories] = useState<string>("Accessories");

  return (
    <header className="containerHeader">
      <div className="containerInfoHeader">
        <div className="containerLogoAndWorkSchedule">
          <div className="logoContainer">
            <div className="logoTextAndImage">
              <span>Store</span>
              <img src={logo} className="logoIcon" alt="logo" />
              <span>mobile</span>
            </div>
            <button
              className="btnShowMenu"
              onClick={() => setIsShowMenu(!isShowMenu)}
            >
              &#9776;
            </button>
          </div>
          <span
            className={`addressText ${
              !isShowMenu ? "showMenu" : "notShowMenu"
            }`}
          >
            City name st. Street name, 21
          </span>
          <div
            className={`workScheduleContainer ${
              !isShowMenu ? "showMenu" : "notShowMenu"
            }`}
          >
            <div className="workSchedule">
              <span className="workScheduleDays">Mon-Fri:</span>{" "}
              <span className="workScheduleHours">10:00-19:00</span>{" "}
              <span className="workScheduleDays ">SAT:</span>
              <span className="workScheduleHours paddingLeft">10:00-17:00</span>
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
          <div className="searchInputContainer">
            <img src={loop} alt="loop" className="loopImg" />
            <input className="searchInput" placeholder="Search..." />
          </div>
          <div className="contactInfoContainer">
            <a href="tel:(099) 999-99-99" className="callBack">
              Call me back
            </a>
            <span className="contactNumber">(099) 999-99-99</span>
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
              <button className="dropBtn">Catalog</button>
              <nav className="dropdown-content">
                <Link to="#">Link 1</Link>
                <Link to="#">Link 2</Link>
                <Link to="#">Link 3</Link>
              </nav>
            </div>
            <select
              defaultValue={iPhoneSelect}
              className="SelectHeader catalogMenuText"
              onChange={({ target }) => setIPhoneSelect(target.value)}
            >
              <option value="iPhone">iPhone</option>
            </select>
            <select
              defaultValue={appleStoreSelect}
              className="SelectHeader catalogMenuText"
              onChange={({ target }) => setAppleStoreSelect(target.value)}
            >
              <option value="Apple Store">Apple Store</option>
            </select>
            <select
              defaultValue={smartphonesSelect}
              className="SelectHeader catalogMenuText"
              onChange={({ target }) => setSmartphones(target.value)}
            >
              <option value="Smartphones">Smartphones</option>
            </select>
            <select
              defaultValue={accessoriesSelect}
              className="SelectHeader catalogMenuText"
              onChange={({ target }) => setAccessories(target.value)}
            >
              <option value="Accessories">Accessories</option>
            </select>
            <Link to="#" className="catalogMenuText">
              Contacts
            </Link>
            <Link to="#" className="catalogMenuText">
              {" "}
              Shipping and payment
            </Link>
          </div>
          <div className="containerShoppingInfo">
            <img src={shoppingBag} alt="shopping bag" />
            <div className="itemsInfoContainer">
              <span className="amountItems">0 товаров</span>
              <span className="summaText">0 грн</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
