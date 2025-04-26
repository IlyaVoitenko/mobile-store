import Header from "../Header";
import Footer from "../Footer";
import "../../styles/components/_goodInfo.scss";
import "../../styles/components/_categoryNavProduct.scss";
import ProductCollection from "../ProductCollection";
import { Link, useParams } from "react-router-dom";
import { getProductsSelector } from "../../store/selectors";
import { CategoryType, IReviewPostValues } from "../../types";
import { useSelector } from "react-redux";
import { addNewReviewPost } from "../../helper";
import {
  checkValidContent,
  handleValidClientName,
  handleValidSearchProduct,
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
import visa from "../../assets/visa.svg";

import { useState } from "react";

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
  const productsSelector = useSelector(getProductsSelector);
  const [amountsSelectedStars, setAmountsSelectedStars] = useState(0);
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
        <div className="productOptionsContainer"></div>
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
                    className={`${
                      formik.touched.clientName && formik.errors.clientName
                        ? "inputsFormError"
                        : "inputsForm"
                    }  inputsFormNameAndEmail`}
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
                    className={`${
                      formik.touched.email && formik.errors.email
                        ? "inputsFormError"
                        : "inputsForm"
                    } inputsFormNameAndEmail`}
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
                              console.log(star);
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
