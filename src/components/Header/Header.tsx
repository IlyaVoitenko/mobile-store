import { useState } from "react";

import "./../../styles/layout/_header.scss";
import logo from "/logo.svg";
import loop from "../../assets/loop.svg";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
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
    </header>
  );
};

export default Header;
