import Logo from "../Header/Logo";
import "../../styles/layout/_footer.scss";
import "./../../styles/layout/_header.scss";

import sendIcon from "../../assets/sendEmail.svg";
import { Link } from "react-router-dom";
import { slidersCategory } from "../Main/constants";
import ContactInfo from "../Header/ContactInfo";
const Footer = () => {
  return (
    <footer className="containerFooter">
      <div className="containerFooterInfo">
        <div className="footerSendEmail">
          <Logo />
          <label htmlFor="email" className="emailLabel">
            Newsletter subscription
            <form className="email">
              <button
                className="emailButton"
                onClick={(e) => e.preventDefault()}
              >
                <img src={sendIcon} alt="" />
              </button>
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                id="email"
              />
            </form>
          </label>
          <span className="Copyright">New Store, 2021 Copyright ©</span>
        </div>
        <div className="footerProducts footerItemsContainer">
          <h4 className="title">IPhone</h4>
          <nav className="footerNavList">
            {slidersCategory &&
              slidersCategory.map((item) => (
                <Link to="#" key={item.id}>
                  {item.productName}
                </Link>
              ))}
            {slidersCategory &&
              slidersCategory.map((item) => (
                <Link to="#" key={item.id}>
                  {item.productName}
                </Link>
              ))}
            {slidersCategory &&
              slidersCategory.map((item) => (
                <Link to="#" key={item.id}>
                  {item.productName}
                </Link>
              ))}
            {slidersCategory &&
              slidersCategory
                .map((item) => (
                  <Link to="#" key={item.id}>
                    {item.productName}
                  </Link>
                ))
                .slice(0, 3)}
          </nav>
        </div>
        <div className="footerMenu footerItemsContainer">
          <h4 className="title">Menu</h4>
          <nav className="footerNavList">
            <Link to="#">Apple Store </Link>
            <Link to="#">Smartphones</Link>
            <Link to="#">Accessories</Link>
            <Link to="#">Contacts</Link>
            <Link to="#" id="ShippingPayment">
              {" "}
              Shipping and payment
            </Link>
          </nav>
        </div>
        <div className="footerContacts ">
          <h4 className="title">Our contacts</h4>
          <div className="footerContactsInfo">
            <ContactInfo isFooter={true} />
            <span className="addressText textRight">
              City name{" "}
              <address className="newLineText">st. Street name, 21</address>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
