import { Link } from "react-router-dom";

import Header from "../../components/Header";

import "../../styles/pages/_index.scss";
import "../../styles/pages/_main.scss";
import "../../styles/components/_categorySlider.scss";

import accessoriesIcon from "../../assets/accessoriesIcon.svg";
import androidIcon from "../../assets/androidIcon.svg";
import iMac from "../../assets/iMac.svg";
import watch from "../../assets/watch.svg";
import iPad from "../../assets/iPad.svg";
import iPhone from "../../assets/iPhone.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

import test from "../../assets/Rectangle 6.svg";
import freeIPhone from "../../assets/Free_iPhone_11_Pro_Mockup_2 1.svg";

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
const Main = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
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
              src={test}
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
                <span className="changeCurrentSlider">
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
      </main>
    </div>
  );
};

export default Main;
