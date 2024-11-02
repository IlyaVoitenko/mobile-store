import { Link } from "react-router-dom";

import Header from "../../components/Header";
import "../../styles/pages/_index.scss";
import "../../styles/pages/_main.scss";

import accessoriesIcon from "../../assets/accessoriesIcon.svg";
import androidIcon from "../../assets/androidIcon.svg";
import iMac from "../../assets/iMac.svg";
import watch from "../../assets/watch.svg";
import iPad from "../../assets/iPad.svg";
import iPhone from "../../assets/iPhone.svg";

const Main = () => {
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
        </div>
      </main>
    </div>
  );
};

export default Main;
