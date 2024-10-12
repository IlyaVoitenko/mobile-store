import "./../../styles/layout/_header.scss";
import logo from "/logo.svg";
import loop from "../../assets/loop.svg";

const Header = () => {
  return (
    <header className="containerHeader">
      <div className="containerInfoHeader">
        <div className="logoContainer">
          <span>Store</span>
          <img src={logo} className="logoIcon" alt="logo" />
          <span>mobile</span>
        </div>
        <span className="addressText">City name st. Street name, 21</span>
        <div className="workScheduleContainer">
          <div className="workSchedule">
            <span className="workScheduleDays">Mon-Fri:</span>{" "}
            <span className="workScheduleHours">10:00-19:00</span>{" "}
            <span className="workScheduleDays">SAT:&emsp;&emsp;</span>
            <span className="workScheduleHours">10:00-17:00</span>
          </div>
          <span className="workScheduleDays">SUN:&ensp;</span>{" "}
          <span className="workScheduleHours">Output</span>{" "}
        </div>
        <div className="searchInputContainer">
          <img src={loop} alt="loop" className="loopImg" />
          <input className="searchInput" placeholder="Search..." />
        </div>
        <div className="contactInfoContainer">
          <span className="callBack">Call me back</span>
          <span className="contactNumber">(099) 999-99-99</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
