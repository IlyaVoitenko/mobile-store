import Header from "../Header";
import Footer from "../Footer";
import "../../styles/components/_goodInfo.scss";
import "../../styles/components/_categoryNavProduct.scss";
import ProductCollection from "../ProductCollection";
import basketImg from "../../assets/basketImg.svg";
import { Link, redirect, useParams } from "react-router-dom";
import {
  getProductsSelector,
  getProductsByFilterSelector,
  getSelectedProductSelector,
} from "../../store/selectors";
import { CategoryType, IReviewPostValues } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { addNewReviewPost, handleValidEmail } from "../../helper";
import { addToBucket } from "../../store/slices/bucketSlice";
import {
  checkValidContent,
  handleValidClientName,
  filterProductsByUniqField,
  handleValidSearchProduct,
  handleValidClientNumber,
  handleDefiningColorBlock,
} from "../../helper";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReviewPosts from "./ReviewPosts";
import ArrowRightGrey from "../../assets/ArrowRightGrey.svg";
import iPhonesDetail from "../../assets/IPhonesDetail.svg";
import arrowDownBlue from "../../assets/ArrowBlueDownFull.svg";
import greyStar from "../../assets/greenStar.svg";
import goldStar from "../../assets/goldStar.svg";
import novaPosta from "../../assets/novaPosta.svg";
import deliveryCar from "../../assets/deliveryCar.svg";
import geoMark from "../../assets/geoMark.svg";
import moneyCash from "../../assets/moneyCash.svg";
import openBox from "../../assets/openBox.svg";
import ArrowWhiteDown from "../../assets/ArrowWhiteDown.svg";
import ArrowWhiteUp from "../../assets/ArrowWhiteUp.svg";
import visa from "../../assets/visa.svg";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const validationSchema = Yup.object({
  feedback: Yup.string()
    .min(2, "min 2 symbols")
    .matches(/^[A-Za-z\s]+$/, "Only letters")
    .required("feedback is required "),
  email: Yup.string().email().required("email is required"),
  clientName: Yup.string()
    .min(2, "min 2 symbols")
    .matches(/^[A-Za-z\s]+$/, "Only letters")
    .required("name is required "),
});
const GoodInfo = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector(getSelectedProductSelector);
  if (!selectedProduct.id) redirect("/");
  const productsSelector = useSelector(getProductsSelector);
  const productFilteredSelector = useSelector(getProductsByFilterSelector);
  const [amountsSelectedStars, setAmountsSelectedStars] = useState(0);
  const [amountItem, setAmountItem] = useState<number>(1);
  const colorsUniq =
    productFilteredSelector.length === 0
      ? filterProductsByUniqField(
          productsSelector[category as CategoryType],
          "color"
        )
      : filterProductsByUniqField(productFilteredSelector, "color");
  const [activeImgItem, setActiveImgItem] = useState(colorsUniq[0]);
  const [activeModel, setActiveModel] = useState(selectedProduct?.model);
  const modelsUniq =
    productFilteredSelector.length === 0
      ? filterProductsByUniqField(
          productsSelector[category as CategoryType],
          "model"
        )
      : filterProductsByUniqField(productFilteredSelector, "model");

  const formik = useFormik<IReviewPostValues>({
    initialValues: { email: "", feedback: "", clientName: "" },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) =>
      addNewReviewPost(
        values,
        setSubmitting,
        resetForm,
        amountsSelectedStars,
        setAmountsSelectedStars
      ),
  });
  return (
    <div className="pageDefault">
      <Helmet>
        <title>Store Mobile | Product | {selectedProduct?.name}</title>
        <meta
          name="description"
          content={`Buy ${selectedProduct?.name} in our store. Available in various colors and models. Fast delivery and secure payment options.`}
        />
        <meta property="og:image" content={selectedProduct.imgUrl} />
        <meta
          property="og:title"
          content={`Product | ${selectedProduct?.name}`}
        />
        <meta
          property="og:description"
          content={`Buy ${selectedProduct?.name} in our store. Available in various colors and models. Fast delivery and secure payment options.`}
        />
        <meta property="og:type" content={selectedProduct?.model} />
        <meta
          property="og:url"
          content={`https://mobile-store-gold.vercel.app/good/${category}/${selectedProduct?.name}`}
        />
      </Helmet>
      <Header />
      <main className="containerContentPage">
        <nav className="navProduct">
          <Link to={"/"} className="linkMainPage">
            Main
          </Link>
          <img src={ArrowRightGrey} alt="" />{" "}
          <span className="linkMainPage">{category as CategoryType}</span>
          <img src={ArrowRightGrey} alt="" />{" "}
          <span className="selectedProduct">{category as CategoryType}</span>
        </nav>

        <div className="giftMessageContainer">
          <span>buy a phone and get a</span>
          <h1>gift</h1>
        </div>
        <div className="productOptionsContainer">
          <section className="productsImgsContainer">
            <div className="productImgListContainer">
              <div className="productImgOverFlow">
                <ul className="productImgList">
                  {colorsUniq &&
                    colorsUniq.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => {
                          const index = colorsUniq.findIndex(
                            (itemList) => itemList.id === item.id
                          );
                          setActiveImgItem(colorsUniq[index]);
                        }}
                        className={`itemListImg ${
                          activeImgItem.id === item.id
                            ? "liActive"
                            : "liNotActive"
                        } `}
                      >
                        <img src={item.imgUrl} alt="" />
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => {
                    const index = colorsUniq.findIndex(
                      (item) => item.id === activeImgItem.id
                    );

                    if (index === colorsUniq.length - 1) return;
                    setActiveImgItem(colorsUniq[index + 1]);
                  }}
                  className="productImgListButton"
                  title="Scroll down"
                >
                  <img src={ArrowWhiteDown} alt="Scroll down" />
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    const index = colorsUniq.findIndex(
                      (item) => item.id === activeImgItem.id
                    );

                    if (index === 0) return;
                    setActiveImgItem(colorsUniq[index - 1]);
                  }}
                  className="productImgListButton"
                  title="Scroll up"
                >
                  <img src={ArrowWhiteUp} alt="Scroll up" />
                </button>
              </div>
            </div>
            <div className="mainProductImgContainer">
              <img
                className="mainProductImg"
                src={activeImgItem?.imgUrl}
                alt={activeImgItem?.color}
              />
            </div>
          </section>
          <section className="productInfoContainer">
            <h1 className="nameProduct">{selectedProduct?.name}</h1>
            <section className="stockAndVendorCodeContainer">
              <span
                className="spanGreyBox"
                id={
                  selectedProduct?.inStock ? "greenColorText" : "errorColorText"
                }
              >
                &nbsp; {selectedProduct?.inStock ? `In stock` : "Haven't"}{" "}
                &nbsp;
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span id="vendorCode">Vendor code:</span>&nbsp;&nbsp;
              <span className="spanGreyBox" id="greyColorText">
                {selectedProduct?.vendorCode}
              </span>
            </section>
            <section className="colorsContainer">
              <h4>Choose color:</h4>
              <ul className="colorsList">
                {colorsUniq.map((item) => (
                  <li
                    key={item?.id}
                    onClick={() => {
                      const index = colorsUniq.findIndex(
                        (itemList) => itemList?.color === item?.color
                      );
                      setActiveImgItem(colorsUniq[index]);
                    }}
                    className={
                      activeImgItem?.color === item?.color
                        ? "activeColorLi"
                        : "colorBlock"
                    }
                    style={{
                      backgroundColor:
                        activeImgItem?.color === item?.color
                          ? "white"
                          : handleDefiningColorBlock(item?.color as string),
                      border:
                        activeImgItem?.color === item?.color
                          ? `1px solid ${handleDefiningColorBlock(
                              item?.color as string
                            )}`
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor:
                          activeImgItem?.color === item?.color
                            ? handleDefiningColorBlock(item?.color as string)
                            : "",
                      }}
                      className={
                        activeImgItem?.color === item?.color
                          ? "activeColorDiv"
                          : "colorBlock"
                      }
                    ></div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="modelsContainer">
              <h4>{category} model:</h4>
              <div className="modelsList">
                {modelsUniq &&
                  modelsUniq.map((item) => (
                    <React.Fragment key={item.id}>
                      <button
                        onClick={() => {
                          setActiveModel(item?.model);
                        }}
                        className={
                          activeModel === item?.model
                            ? "btnActiveModel"
                            : "btnModel"
                        }
                      >
                        {item?.model}
                      </button>
                      &nbsp; &nbsp;
                    </React.Fragment>
                  ))}
              </div>
            </section>
            <section className="priceContainer">
              <h1>{selectedProduct?.price}</h1>
              <span>$</span>
            </section>
            <div className="btnBuyProductContainer">
              <div className="amountProductContainer">
                <button
                  onClick={() => {
                    if (amountItem === 1) return;
                    setAmountItem(amountItem - 1);
                  }}
                >
                  -
                </button>
                <span>{amountItem}</span>
                <button
                  onClick={() => {
                    if (amountItem > 99) return;
                    setAmountItem(amountItem + 1);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="basketBtn"
                onClick={() => {
                  dispatch(
                    addToBucket({
                      ...selectedProduct,
                      color: activeImgItem.color,
                      imgUrl: activeImgItem.imgUrl,
                      quantity: amountItem,
                      model: activeModel,
                    })
                  );
                }}
              >
                <span>Add to cart</span>{" "}
                <img src={basketImg} alt="Add to card button" />
              </button>{" "}
              <div className="buyOneClickContainer">
                <input
                  className="phoneNumber"
                  type="text"
                  placeholder="Phone number"
                  maxLength={11}
                  onPaste={(e) => {
                    //get data from clipboard and check valid
                    const pasted = e.clipboardData.getData("text");
                    if (!handleValidClientNumber(pasted)) e.preventDefault();
                  }}
                  onKeyDown={(e) =>
                    checkValidContent(e, handleValidClientNumber)
                  }
                />
                <button className="buyOneClick">Buy in one click</button>
              </div>
            </div>
          </section>
        </div>
        <br />
        <div className="shippingAndPaymentContainer">
          <section className="shippingAndPaymentBlock shippingBgImg">
            <div className="containerContent ">
              <h3>Shipping options</h3>
              <article className="imgAndTextContainer">
                <figure>
                  <img
                    className="imgShippingAndPayment"
                    src={deliveryCar}
                    alt=""
                  />
                </figure>
                <span>In city - for free.</span>
              </article>
              <article className="imgAndTextContainer">
                <figure>
                  <img src={geoMark} className="imgShippingAndPayment" alt="" />
                </figure>
                <span>Pickup</span>
              </article>
              <article className="imgAndTextContainer">
                <figure>
                  <img
                    className="imgShippingAndPayment"
                    src={novaPosta}
                    alt=""
                  />
                </figure>
                <span>Mail. In country 1-2 days</span>
              </article>
            </div>
          </section>
          <section className="shippingAndPaymentBlock paymentBgImg">
            <div className="containerContent ">
              <h3>Payment Methods</h3>
              <article className="imgAndTextContainer">
                <figure>
                  <img
                    src={moneyCash}
                    alt=""
                    className="imgShippingAndPayment"
                  />
                </figure>
                <span>Cash</span>
              </article>
              <article className="imgAndTextContainer">
                <figure>
                  <img src={openBox} alt="" className="imgShippingAndPayment" />
                </figure>
                <span>Payment upon receipt</span>
              </article>
              <article className="imgAndTextContainer">
                <figure>
                  <img className="imgShippingAndPayment" src={visa} alt="" />
                </figure>
                <span>Visa | MasterCard | Privat24</span>
              </article>
            </div>
          </section>
        </div>
        <br />
        <div className="infoAndReviewsContainer">
          <section className="descriptionContainer positionContainer">
            <h1 className="titleSection">Description</h1>
            <br />
            <div className="descriptionInfoContainer">
              <span>
                This case is made of high quality silicone, which provides
                reliable protection for iPhone 7 and iPhone 8.<br></br>{" "}
                <br></br> Minimalist design and high quality workmanship make
                Apple Silicone Case perfect for iPhone. The case is designed
                with high precision, taking into account all the features and
                has the best performance. Providing absolute protection for your
                phone during active daily use, this case will become a "second
                skin" for your device, and you will enjoy holding it in your
                hand.
              </span>
              <br />
              <br />
              <img className="imgDescription" src={iPhonesDetail} alt="" />
              <br />
              <br />

              <button>
                <span>Full description</span>&nbsp;{" "}
                <img src={arrowDownBlue} alt="" />{" "}
              </button>
              <br />
            </div>
          </section>
          <section className="reviewsContainer positionContainer">
            <h1 className="titleSection">Reviews</h1>
            <br />
            <div className="reviewsBlock">
              <ReviewPosts />
              <div className="formContainer">
                <div className="formTitleContainer">
                  <h1 className="formTitle">Write a review</h1>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    name="clientName"
                    placeholder="Your name"
                    className={`inputsFormNameAndEmail ${
                      formik.touched.clientName && formik.errors.clientName
                        ? "inputsFormError"
                        : "inputsForm"
                    }  `}
                    value={formik.values.clientName}
                    onChange={formik.handleChange}
                    onPaste={(e) => {
                      //get data from clipboard and check valid
                      const pasted = e.clipboardData.getData("text");
                      if (!handleValidClientName(pasted)) e.preventDefault();
                    }}
                    onKeyDown={(e) =>
                      checkValidContent(e, handleValidClientName)
                    }
                  ></input>
                  <input
                    type="email"
                    name="email"
                    className={`inputsFormNameAndEmail ${
                      formik.touched.email && formik.errors.email
                        ? "inputsFormError"
                        : "inputsForm"
                    } `}
                    onPaste={(e) => {
                      //get data from clipboard and check valid
                      const pasted = e.clipboardData.getData("text");
                      if (!handleValidEmail(pasted)) e.preventDefault();
                    }}
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  ></input>
                  <textarea
                    name="feedback"
                    placeholder="Your feedback"
                    className={`${
                      formik.touched.feedback && formik.errors.feedback
                        ? "inputsFormError"
                        : "inputsForm"
                    }  areaForm`}
                    value={formik.values.feedback}
                    onChange={formik.handleChange}
                    onPaste={(e) => {
                      //get data from clipboard and check valid
                      const pasted = e.clipboardData.getData("text");
                      if (!handleValidSearchProduct(pasted)) e.preventDefault();
                    }}
                    onKeyDown={(e) => {
                      checkValidContent(e, handleValidSearchProduct);
                    }}
                  ></textarea>

                  <div className="submitFormContainer">
                    <ul>
                      {Array.from({ length: 5 }, (_, index) => index + 1).map(
                        (star) => (
                          <li
                            key={star}
                            onClick={() => {
                              setAmountsSelectedStars(star);
                            }}
                          >
                            {amountsSelectedStars >= star ? (
                              <img className="goldStar" src={goldStar} alt="" />
                            ) : (
                              <img src={greyStar} alt="" />
                            )}
                          </li>
                        )
                      )}
                    </ul>
                    <button type="submit">
                      {formik.isSubmitting
                        ? "Loading ..."
                        : "To send the comment"}{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <section className="characteristicsContainer positionContainer">
            <h1 className="titleSection">Characteristics</h1>
            <br />
            <table>
              <tbody>
                <tr>
                  <th className="trTitle">Material</th>
                  <td className="trSubtitle">Silicon</td>
                </tr>
                <tr>
                  <th className="trTitle">Available colors</th>
                  <td className="trSubtitle">
                    red, black, blue, gray, yellow, green, purple
                  </td>
                </tr>

                <tr>
                  <th className="trTitle " id="textMove">
                    Phone model:
                  </th>
                  <td className="trSubtitle">
                    6s, 6s plus, 7, 7 plus, 8, 8 plus, X\XS, XS Max, 11, 11 Pro,
                    11 Pro Max, 12\12 Pro, 12 Mini, 12 Pro Max{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <ProductCollection
          listProduct={productsSelector}
          title={"Recommended"}
          category={category as CategoryType}
        />
      </main>

      <Footer />
    </div>
  );
};

export default GoodInfo;
