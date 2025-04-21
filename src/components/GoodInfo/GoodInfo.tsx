import Header from "../Header";
import Footer from "../Footer";
import "../../styles/components/_goodInfo.scss";
import "../../styles/components/_categoryNavProduct.scss";
import ProductCollection from "../ProductCollection";
import { Link, useParams } from "react-router-dom";
import { getProductsSelector } from "../../store/selectors";
import { CategoryType } from "../../types";
import { useSelector } from "react-redux";

// import { handleValidClientName } from "../../helper";
import ReviewPosts from "./ReviewPosts";
import ArrowRightGrey from "../../assets/ArrowRightGrey.svg";
import iPhonesDetail from "../../assets/IPhonesDetail.svg";
import arrowDownBlue from "../../assets/ArrowBlueDownFull.svg";
import greyStar from "../../assets/greenStar.svg";
import goldStar from "../../assets/goldStar.svg";

import { useState } from "react";
const GoodInfo = () => {
  const { category } = useParams();
  const productsSelector = useSelector(getProductsSelector);
  const [amountsSelectedStars, setAmountsSelectedStars] = useState(0);
  const [clientName, setClientName] = useState({ isError: false, message: "" });
  const [email, setEmail] = useState({ isError: false, message: "" });
  const [feedback, setFeedback] = useState({ isError: false, message: "" });
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

        <div className="giftMessageContainer"></div>
        <div className="productOptionsContainer"></div>
        <div className="shippingAndPaymentContainer"></div>
        <div className="infoAndReviewsContainer">
          <section className="descriptionContainer">
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
              <img src={iPhonesDetail} alt="" />
              <br />
              <br />

              <button>
                <span>Full description</span> <img src={arrowDownBlue} alt="" />{" "}
              </button>
              <br />
            </div>
          </section>
          <section className="reviewsContainer">
            <h1 className="titleSection">Reviews</h1>
            <br />
            <div className="reviewsBlock">
              <ReviewPosts />
              <div className="formContainer">
                <div className="formTitleContainer">
                  <h1 className="formTitle">Write a review</h1>
                </div>
                <form
                  onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    if (!clientName.message) {
                      return setClientName({
                        message: clientName.message,
                        isError: true,
                      });
                    }
                    if (!email.message) {
                      return setEmail({
                        message: email.message,
                        isError: true,
                      });
                    }
                    if (!feedback.message) {
                      return setFeedback({
                        message: feedback.message,
                        isError: true,
                      });
                    }
                    setFeedback({
                      message: feedback.message,
                      isError: false,
                    });
                    setEmail({
                      message: email.message,
                      isError: false,
                    });
                    setClientName({
                      message: clientName.message,
                      isError: false,
                    });
                    console.log(clientName, email, feedback);

                    setAmountsSelectedStars(0);
                  }}
                >
                  <input
                    type="text"
                    name="clientName"
                    placeholder="Your name"
                    className="inputsForm inputsFormNameAndEmail"
                    value={clientName.message}
                    onChange={({ target }) =>
                      setClientName({
                        isError: email.isError,
                        message: target.value,
                      })
                    }
                  ></input>
                  <input
                    type="email"
                    name="email"
                    className="inputsForm inputsFormNameAndEmail"
                    placeholder="Email"
                    value={email.message}
                    onChange={({ target }) =>
                      setEmail({
                        isError: email.isError,
                        message: target.value,
                      })
                    }
                  ></input>
                  <textarea
                    name="feedback"
                    placeholder="Your feedback"
                    className="inputsForm areaForm"
                    value={feedback.message}
                    onChange={({ target }) =>
                      setFeedback({
                        isError: email.isError,
                        message: target.value,
                      })
                    }
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
                    <button onClick={() => setAmountsSelectedStars(0)}>
                      To send the comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section className="characteristicsContainer">
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
                  <th className="trTitle titleTop">Phone model:</th>
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
