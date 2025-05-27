import resources from "./resources";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsSelector } from "../../store/selectors";
import Footer from "../Footer";
import ProductCollection from "../ProductCollection";
import { Helmet } from "react-helmet-async";
import {
  handleValidClientName,
  handleValidClientNumber,
  handleNextSlider,
  checkValidContent,
  handlePreSlider,
} from "../../helper";
import Header from "../../components/Header";
import {
  setProductsByFilter,
  setSelectedFilters,
  setSelectedProduct,
} from "../../store/slices/productsSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormNeedHelp } from "../../types";
import { slidersCategory } from "./constants";

const validationSchema = Yup.object({
  nameClient: Yup.string()
    .min(2, "min 2 symbols")
    .matches(/^[A-Za-z\s]+$/, "Only letters")
    .required("name is required "),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers")
    .min(10, "min 10 numbers")
    .max(15, "max 15 numbers")
    .required("number phone is required"),
});

const Main = () => {
  const dispatch = useDispatch();
  const [currentSlideNumber, setCurrentSlideNumber] = useState<number>(1);
  const productsSelector = useSelector(getProductsSelector);
  const amountSliders = slidersCategory.length;

  const formik = useFormik<FormNeedHelp>({
    initialValues: {
      nameClient: "",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: async (_, { setSubmitting, resetForm }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitting(false);
      resetForm();
    },
  });

  useEffect(() => {
    dispatch(setProductsByFilter([]));
    dispatch(
      setSelectedFilters({ model: [], storage: [], color: [], type: [] })
    );
    dispatch(
      setSelectedProduct({
        id: "",
        name: "",
        description: "",
        price: 0,
        inStock: false,
        isPopular: false,
        color: "",
        model: "",
        storage: "",
        quantity: 0,
        imgUrl: "",
        type: "",
        vendorCode: 0,
      })
    );
  }, []);
  return (
    <div className="pageDefault">
      <Helmet>
        <title>Store Mobile | Home </title>
        <meta
          name="description"
          content="Welcome to the home page of My Website."
        />
        <meta property="og:image" content={"../../assets/deliveryGoods.svg"} />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_URL}${location.pathname}`}
        />
      </Helmet>
      <Header />
      <main className="containerContentPage">
        <div className="containerCategory">
          <nav className="containerCategoryLinks">
            <Link to={"/category/Iphone"} className="categoryLinks ">
              <div className="iPhoneContextContainer">
                <img src={resources.iPhone} alt="iPhone" />
                <span>Iphone</span>
              </div>
            </Link>
            <Link to={"/category/IPad"} className="categoryLinks">
              <div className="iPadContextContainer">
                <img src={resources.iPad} alt="iPad" />
                <span>IPad</span>
              </div>
            </Link>
            <Link to={"/category/Apple Watch"} className="categoryLinks">
              <div className="appleWatchContextContainer">
                <img src={resources.watch} alt="Apple Watch" />
                <span>Apple Watch</span>
              </div>
            </Link>
            <Link to={"/category/IMac"} className="categoryLinks">
              <div className="iMacContextContainer">
                <img src={resources.iMac} alt="iMac icon" />
                <span>IMac</span>
              </div>
            </Link>
            <Link
              to={"/category/Android Smartphones"}
              className="categoryLinks"
            >
              <div className="androidSmartphonesContextContainer">
                <img src={resources.androidIcon} alt="Android icon" />
                <span>Android Smartphones</span>{" "}
              </div>
            </Link>
            <Link to={"/category/Accessories"} className="categoryLinks">
              <div className="accessoriesContextContainer">
                <img src={resources.accessoriesIcon} alt="Accessories icon" />
                <span>Accessories</span>
              </div>
            </Link>
          </nav>
          <div className="slideCategoryContainer">
            <img
              src={resources.iPhoneBg}
              alt={slidersCategory[currentSlideNumber - 1].productName}
            />
            <img
              src={resources.freeIPhone}
              alt="phones"
              className="freeIphone"
            />

            <nav className="slideCategoryInfoContainer">
              <div className="slideCategoryInfo">
                <h2 className="slideCategoryInfoTitleProduct">
                  {slidersCategory[currentSlideNumber - 1].productName}
                </h2>
                <h3 className="slideCategoryInfoDescriptionProduct">
                  {slidersCategory[currentSlideNumber - 1].productDescription}
                </h3>
              </div>
              <Link to={"/category/Iphone"} className="slideCategoryInfoLink">
                Go to the category
              </Link>
            </nav>
            <div className="changeSliderContainer">
              <button
                onClick={() =>
                  handlePreSlider(currentSlideNumber - 1, setCurrentSlideNumber)
                }
              >
                <img
                  src={resources.arrowLeft}
                  alt="arrow left slide category"
                />
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
                <img
                  src={resources.arrowRight}
                  alt="arrow right slide category"
                />
              </button>
            </div>
          </div>
        </div>
        <ProductCollection
          listProduct={productsSelector}
          title={"Recommended"}
        />
        <div className="needHelpContainer">
          <img src={resources.needHelpBg} alt="bg image need help" />
          <div className="needHelpContentContainer">
            <h3 className="titleNeedHelp">Need help?</h3>
            <h4 className="subtitleNeedHelp">
              Leave a request in the form below and we will call you back as
              soon as possible
            </h4>
            <form onSubmit={formik.handleSubmit}>
              <input
                value={formik.values.nameClient}
                onChange={formik.handleChange}
                className={
                  formik.touched.nameClient && formik.errors.nameClient
                    ? "needHelpInputError"
                    : "needHelpInput"
                }
                onPaste={(e) => {
                  //get data from clipboard and check valid
                  const pasted = e.clipboardData.getData("text");
                  if (!handleValidClientName(pasted)) e.preventDefault();
                }}
                onKeyDown={(e) => checkValidContent(e, handleValidClientName)}
                placeholder="name"
                name="nameClient"
                required
              />
              <input
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onKeyDown={(e) => checkValidContent(e, handleValidClientNumber)}
                onPaste={(e) => {
                  //get data from clipboard and check valid
                  const pasted = e.clipboardData.getData("text");
                  if (!handleValidClientNumber(pasted)) e.preventDefault();
                }}
                className={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "needHelpInputError"
                    : "needHelpInput"
                }
                placeholder="phone number"
                maxLength={11}
                name="phoneNumber"
                required
              />
              <button disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Loading..." : "Call me back"}
              </button>
            </form>
          </div>
        </div>
        <ProductCollection listProduct={productsSelector} title={"Popular"} />
        <nav className="categoriesBlocksContainer">
          <div className="blocksContainer">
            <Link to="/category/Iphone" className="categoriesBlocksLink first">
              <div className="categoriesBlockContent">
                <span className="categoriesTitle">Iphone</span>
                <span className="categoryTextLink">
                  Go to the category{" "}
                  <img src={resources.ArrowRightBlue} alt="" />
                </span>{" "}
              </div>
              <img
                src={resources.iphoneCategoryBlock}
                alt="Iphone category block"
                className="bgImageCategories"
              />
            </Link>
            <Link
              to="/category/Accessories"
              className="categoriesBlocksLink second categoriesBlocksLink "
            >
              <div className="categoriesBlockContent">
                <span className="categoriesTitle">Accessories</span>
                <span className="categoryTextLink">
                  Go to the <br />
                  category <img src={resources.ArrowRightBlue} alt="" />
                </span>
              </div>
              <img
                src={resources.CaseIphone}
                alt="Accessories category block"
                className="bgImageCategories"
              />
            </Link>
            <Link to="/category/IMac" className="categoriesBlocksLink third  ">
              <div className="categoriesBlockContent">
                <span className="categoriesTitle">iMac</span>
                <span className="categoryTextLink">
                  Go to the <br /> category{" "}
                  <img src={resources.ArrowRightBlue} alt="" />
                </span>{" "}
              </div>
              <img
                src={resources.IMacCategory}
                alt="IMac category block"
                className="bgImageCategories"
              />
            </Link>
            <Link to="/category/IPad" className="categoriesBlocksLink fourth">
              <div className="categoriesBlockContent">
                <span className="categoriesTitle">IPad</span>
                <span className="categoryTextLink">
                  Go to the category{" "}
                  <img src={resources.ArrowRightBlue} alt="" />
                </span>{" "}
              </div>
              <img
                src={resources.iPadCategory}
                alt="IPad category block"
                className="bgImageCategories"
              />
            </Link>
          </div>
          <Link
            to="/category/Apple Watch"
            className="categoriesBlocksLink fifth  "
          >
            <div className="categoriesBlockContent">
              <span className="categoriesTitle">Apple Watch</span>
              <span className="categoryTextLink">
                Go to the category <img src={resources.ArrowRightBlue} alt="" />
              </span>{" "}
            </div>
            <img
              src={resources.appleWatchCategory}
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
                  src={resources.certificateGuarantee}
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
                  src={resources.DiscountsChecked}
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
                  src={resources.Discounts}
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
                  src={resources.client}
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
                src={resources.logoSamsung}
                alt="logo Samsung"
                className="logoSamsungScroll"
              />
            </li>
            <li>
              <img
                src={resources.logoXiaomi}
                alt="logo Xiaomi"
                className="logoXiaomiScroll"
              />
            </li>
            <li>
              <img
                src={resources.logoNokia}
                alt="logo Nokia"
                className="logoNokiaScroll"
              />
            </li>
            <li>
              <img
                src={resources.logoLG}
                alt="logo LG"
                className="logoLGScroll"
              />
            </li>
            <li>
              <img
                src={resources.logoLenovo}
                alt="logo Lenovo"
                className="logoLenovoScroll"
              />
            </li>
            <li>
              <img
                src={resources.logoApple}
                alt="logo Apple"
                className="logoAppleScroll"
              />
            </li>
          </ul>
          <ul className="listLogos ">
            <li>
              <img
                src={resources.logoSamsung}
                alt="logo Samsung"
                className="logoSamsungScroll"
              />
            </li>
            <li>
              <img
                src={resources.logoXiaomi}
                alt="logo Xiaomi"
                className="logoXiaomiScroll"
              />
            </li>
            <li>
              <img
                src={resources.logoNokia}
                alt="logo Nokia"
                className="logoNokiaScroll"
              />
            </li>
            <li>
              <img
                src={resources.logoLG}
                alt="logo LG"
                className="logoLGScroll"
              />
            </li>
            <li>
              <img
                src={resources.logoLenovo}
                alt="logo Lenovo"
                className="logoLenovoScroll"
              />
            </li>
            <li>
              <img
                src={resources.logoApple}
                alt="logo Apple"
                className="logoAppleScroll"
              />
            </li>
          </ul>
        </div>
        <div className="containerDeliveryGoods">
          <img src={resources.deliveryGoods} alt="delivery goods" />
          <div className="deliveryGoodsContent">
            <h3 className="deliveryGoodsTitle">
              Delivery of goods in the store
            </h3>
            <div className="deliveryGoodsInfo">
              <h6 className="deliveryGoodsSubtitle">
                In city, all orders made in our store are delivered free of
                charge.
              </h6>
              <p className="deliveryGoodsParagraph">
                To deliver orders to other Ukrainian cities, we use the services
                of the transport company. Also, for the convenience of
                customers, we offer the possibility of self-delivery of the
                products you are interested in from our points of issue.
              </p>
              <div>
                <h6 className="deliveryGoodsSubtitle">
                  The main priority of the new-store is the comfort of our
                  customers.
                </h6>
                <p className="deliveryGoodsParagraph">
                  It is for this purpose that we guarantee our customers the
                  high quality of the products offered, reasonable prices for
                  equipment and accessories, regular updates of the assortment
                  and convenient delivery to anywhere in country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
