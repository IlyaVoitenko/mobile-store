import { Link } from "react-router-dom";
import { arrProduct } from "../ProductCollection/constanst";

import Header from "../../components/Header";
import ProductCollection from "../ProductCollection";

import "../../styles/pages/_index.scss";
import "../../styles/pages/_main.scss";
import "../../styles/components/_categorySlider.scss";
import "../../styles/components/_needHelp.scss";
import "../../styles/components/_scrollerLogos.scss";
import "../../styles/components/_categoriesBlocks.scss";
import "../../styles/components/_onlineStoreShop.scss";

import accessoriesIcon from "../../assets/accessoriesIcon.svg";
import androidIcon from "../../assets/androidIcon.svg";
import iMac from "../../assets/iMac.svg";
import watch from "../../assets/watch.svg";
import iPad from "../../assets/iPad.svg";
import iPhone from "../../assets/iPhone.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
import ArrowRightBlue from "../../assets/ArrowRightBlue.svg";
import iphoneCategoryBlock from "../../assets/iphoneCategoryBlock.svg";
import iPadCategory from "../../assets/iPadCategory.svg";
import IMacCategory from "../../assets/IMacCategory.svg";
import CaseIphone from "../../assets/CaseIphone.svg";
import appleWatchCategory from "../../assets/appleWatchCategory.svg";

import iPhoneBg from "../../assets/Rectangle 6.svg";
import needHelpBg from "../../assets/needHelpBg.svg";

import freeIPhone from "../../assets/Free_iPhone_11_Pro_Mockup_2 1.svg";

import logoApple from "../../assets/logoApple.svg";
import logoLG from "../../assets/logoLG.svg";
import logoLenovo from "../../assets/logoLenovo.svg";
import logoNokia from "../../assets/logoNokia.svg";
import logoXiaomi from "../../assets/logoXiaomi.svg";
import logoSamsung from "../../assets/logoSamsung.svg";

import certificateGuarantee from "../../assets/certificateGuarantee.svg";
import DiscountsChecked from "../../assets/DiscountsChecked.svg";
import Discounts from "../../assets/Discounts.svg";
import client from "../../assets/client.svg";

import { slidersCategory } from "./constants";
import { SetStateAction, useState } from "react";

const handlePreSlider = (
  currentSlideNumber: number,
  setCurrentSlideNumber: {
    (value: SetStateAction<number>): void;
  }
) => {
  if (currentSlideNumber < 1) return;
  setCurrentSlideNumber(currentSlideNumber);
};
const handleNextSlider = (
  currentSlideNumber: number,
  setCurrentSlideNumber: {
    (value: SetStateAction<number>): void;
  },
  amountSliders: number
) => {
  if (currentSlideNumber > amountSliders) return;
  setCurrentSlideNumber(currentSlideNumber);
};
const clientPhoneNumberRegex = /^\+?\d{0,15}$/;
const clientNameRegex = /^[a-zA-Z]+$/;
const Main = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState<number>(1);
  const [nameClient, setNameClient] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleChangeClientNumber = (target: EventTarget & HTMLInputElement) => {
    const { value } = target;
    const isPhone = clientPhoneNumberRegex.test(value);

    if (isPhone) setPhoneNumber(value);
  };

  const handleChangeClientName = (target: EventTarget & HTMLInputElement) => {
    const { value } = target;
    if (!clientNameRegex.test(value)) return "Invalid first name.";
    setNameClient(value);
  };

  const amountSliders = slidersCategory.length;
  return (
    <div className="pageDefault">
      <Header />
      <main className="containerContentPage">
        <div className="containerCategory">
          <nav className="containerCategoryLinks">
            <Link to={"#"} className="categoryLinks ">
              <div className="iPhoneContextContainer">
                <img src={iPhone} alt="iPhone" />
                <span>Iphone</span>
              </div>
            </Link>
            <Link to={"#"} className="categoryLinks">
              <div className="iPadContextContainer">
                <img src={iPad} alt="iPad" />
                <span>IPad</span>
              </div>
            </Link>
            <Link to={"#"} className="categoryLinks">
              <div className="appleWatchContextContainer">
                <img src={watch} alt="Apple Watch" />
                <span>Apple Watch</span>
              </div>
            </Link>
            <Link to={"#"} className="categoryLinks">
              <div className="iMacContextContainer">
                <img src={iMac} alt="iMac icon" />
                <span>IMac</span>
              </div>
            </Link>
            <Link to={"#"} className="categoryLinks">
              <div className="androidSmartphonesContextContainer">
                <img src={androidIcon} alt="Android icon" />
                <span>Android Smartphones</span>{" "}
              </div>
            </Link>
            <Link to={"#"} className="categoryLinks">
              <div className="accessoriesContextContainer">
                <img src={accessoriesIcon} alt="Accessories icon" />
                <span>Accessories</span>
              </div>
            </Link>
          </nav>
          <div className="slideCategoryContainer">
            <img
              // src={slidersCategory[currentSlideNumber - 1].slideImg}
              src={iPhoneBg}
              alt={slidersCategory[currentSlideNumber - 1].productName}
            />
            <img src={freeIPhone} alt="phones" className="freeIphone" />

            <nav className="slideCategoryInfoContainer">
              <div className="slideCategoryInfo">
                <h2 className="slideCategoryInfoTitleProduct">
                  {slidersCategory[currentSlideNumber - 1].productName}
                </h2>
                <h3 className="slideCategoryInfoDescriptionProduct">
                  {slidersCategory[currentSlideNumber - 1].productDescription}
                </h3>
              </div>
              <Link to={"#"} className="slideCategoryInfoLink">
                Go to the category
              </Link>
            </nav>
            <div className="changeSliderContainer">
              <button
                onClick={() =>
                  handlePreSlider(currentSlideNumber - 1, setCurrentSlideNumber)
                }
              >
                <img src={arrowLeft} alt="arrow left slide category" />
              </button>
              <div>
                <span className="changeCurrentSlider colorCurrentItem">
                  {currentSlideNumber}
                </span>
                <span className="sliderAmount">/{amountSliders}</span>
              </div>
              <button
                onClick={() =>
                  handleNextSlider(
                    currentSlideNumber + 1,
                    setCurrentSlideNumber,
                    amountSliders
                  )
                }
              >
                <img src={arrowRight} alt="arrow right slide category" />
              </button>
            </div>
          </div>
        </div>
        <ProductCollection
          listProduct={arrProduct}
          title={"Recommended"}
          amountItems={4}
        />
        <div className="needHelpContainer">
          <img src={needHelpBg} alt="bg image need help" />
          <div className="needHelpContentContainer">
            <h3 className="titleNeedHelp">Need help?</h3>
            <h4 className="subtitleNeedHelp">
              Leave a request in the form below and we will call you back as
              soon as possible
            </h4>
            <form>
              <input
                value={nameClient}
                onChange={({ target }) => handleChangeClientName(target)}
                placeholder="name"
                required
              />
              <input
                value={phoneNumber}
                onChange={({ target }) => handleChangeClientNumber(target)}
                placeholder="phone number"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Call me back
              </button>
            </form>
          </div>
        </div>
        <ProductCollection
          listProduct={arrProduct}
          title={"Popular"}
          amountItems={4}
        />
        <nav className="categoriesBlocksContainer">
          <div className="blocksContainer">
            <Link to="#" className="categoriesBlocksLink first">
              <div className="categoriesBlockContent">
                <span className="categoriesTitle">Iphone</span>
                <span className="categoryTextLink">
                  Go to the category <img src={ArrowRightBlue} alt="" />
                </span>{" "}
              </div>
              <img
                src={iphoneCategoryBlock}
                alt="Iphone category block"
                className="bgImageCategories"
              />
            </Link>
            <Link
              to="#"
              className="categoriesBlocksLink second categoriesBlocksLink "
            >
              <div className="categoriesBlockContent">
                <span className="categoriesTitle">Accessories</span>
                <span className="categoryTextLink">
                  Go to the category <img src={ArrowRightBlue} alt="" />
                </span>
              </div>
              <img
                src={CaseIphone}
                alt="Accessories category block"
                className="bgImageCategories"
              />
            </Link>
            <Link to="#" className="categoriesBlocksLink third  ">
              <div className="categoriesBlockContent">
                <span className="categoriesTitle">iMac</span>
                <span className="categoryTextLink">
                  Go to the category <img src={ArrowRightBlue} alt="" />
                </span>{" "}
              </div>
              <img
                src={IMacCategory}
                alt="IMac category block"
                className="bgImageCategories"
              />
            </Link>
            <Link to="#" className="categoriesBlocksLink fourth">
              <div className="categoriesBlockContent">
                <span className="categoriesTitle">IPad</span>
                <span className="categoryTextLink">
                  Go to the category <img src={ArrowRightBlue} alt="" />
                </span>{" "}
              </div>
              <img
                src={iPadCategory}
                alt="IPad category block"
                className="bgImageCategories"
              />
            </Link>
          </div>
          <Link to="#" className="categoriesBlocksLink fifth  ">
            <div className="categoriesBlockContent">
              <span className="categoriesTitle">Apple Watch</span>
              <span className="categoryTextLink">
                Go to the category <img src={ArrowRightBlue} alt="" />
              </span>{" "}
            </div>
            <img
              src={appleWatchCategory}
              alt="apple watch category block"
              className="bgImageCategories"
            />
          </Link>
        </nav>
        <div className="containerOnlineStore">
          <div className="onlineStoreDescription">
            <h1 className="onlineStoreTitle">Online store new shop</h1>
            <p className="onlineStoreParagraph">
              In the catalog of our store - only proven equipment from reliable,
              well-established manufacturers in the market. In addition to the
              gadgets themselves, we offer a wide range of related accessories:
              speakers, headphones, cases, memory cards and other useful
              devices.
              <br />
              <br />
              To make shopping with us easier and faster, we left the
              possibility of ordering without registration. We are sure that
              this news will delight you with the opportunity to save your own
              time.
            </p>
          </div>
          <div className="onlineStoreAdvantages">
            <span>
              New store is your reliable supplier of proven gadgets and branded
              accessories. We have only the best:
            </span>
            <ul className="advantagesList">
              <li className="advantagesItem">
                <img
                  src={certificateGuarantee}
                  className="advantagesIcon"
                  alt="No fakes certificate guarantee!"
                />

                <div className="advantagesInfo">
                  <span>No fakes!</span>
                  <p>
                    Only 100% original equipment and accessories (iPhones,
                    MacBooks, headphones, cases).
                  </p>
                </div>
              </li>
              <li className="advantagesItem">
                <img
                  src={DiscountsChecked}
                  className="advantagesIcon"
                  alt="Adequate prices"
                />
                <div className="advantagesInfo">
                  <span>Adequate prices</span>
                  <p>
                    We have a reasonable pricing policy and offer one of the
                    most affordable rates.
                  </p>
                </div>
              </li>{" "}
              <li className="advantagesItem">
                <img
                  src={Discounts}
                  className="advantagesIcon"
                  alt="Maximum advantage"
                />
                <div className="advantagesInfo">
                  <span>Maximum advantage</span>
                  <p>
                    Only 100% original equipment We have regular promotions and
                    special promotions for regular and new customers.
                  </p>
                </div>
              </li>
              <li className="advantagesItem">
                <img
                  src={client}
                  className="advantagesIcon"
                  alt="Professional service"
                />
                <div className="advantagesInfo">
                  <span>Professional service</span>
                  <p>
                    We guarantee constant information support and operational
                    service.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="scrollerLogosContainer">
          <ul className="listLogos ">
            <li>
              <img
                src={logoSamsung}
                alt="logo Samsung"
                className="logoSamsungScroll"
              />
            </li>
            <li>
              <img
                src={logoXiaomi}
                alt="logo Xiaomi"
                className="logoXiaomiScroll"
              />
            </li>
            <li>
              <img
                src={logoNokia}
                alt="logo Nokia"
                className="logoNokiaScroll"
              />
            </li>
            <li>
              <img src={logoLG} alt="logo LG" className="logoLGScroll" />
            </li>
            <li>
              <img
                src={logoLenovo}
                alt="logo Lenovo"
                className="logoLenovoScroll"
              />
            </li>
            <li>
              <img
                src={logoApple}
                alt="logo Apple"
                className="logoAppleScroll"
              />
            </li>
          </ul>
          <ul className="listLogos ">
            <li>
              <img
                src={logoSamsung}
                alt="logo Samsung"
                className="logoSamsungScroll"
              />
            </li>
            <li>
              <img
                src={logoXiaomi}
                alt="logo Xiaomi"
                className="logoXiaomiScroll"
              />
            </li>
            <li>
              <img
                src={logoNokia}
                alt="logo Nokia"
                className="logoNokiaScroll"
              />
            </li>
            <li>
              <img src={logoLG} alt="logo LG" className="logoLGScroll" />
            </li>
            <li>
              <img
                src={logoLenovo}
                alt="logo Lenovo"
                className="logoLenovoScroll"
              />
            </li>
            <li>
              <img
                src={logoApple}
                alt="logo Apple"
                className="logoAppleScroll"
              />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Main;
