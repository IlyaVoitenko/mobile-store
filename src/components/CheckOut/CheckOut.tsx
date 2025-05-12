import "../../styles/pages/_index.scss";
import "../../styles/components/_categoryNavProduct.scss";
import "../../styles/components/_checkOut.scss";
import "../../styles/components/_amountProduct.scss";
import CourierDelivery from "../../assets/CourierDelivery.svg";
import CourierDeliveryGrey from "../../assets/CourierDeliveryGrey.svg";
import PickUpDelivery from "../../assets/PickUpDelivery.svg";
import PickUpDeliveryWhite from "../../assets/PickUpDeliveryWhite.svg";
import novaPostaGrey from "../../assets/novaPostaGrey.svg";
import novaPostaWhite from "../../assets/novaPostaWhite.svg";

import { Link } from "react-router-dom";
import { CheckOutForm } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { getBucketProducts } from "../../store/selectors";
import {
  checkValidContent,
  handleValidSearchProduct,
  handleValidClientName,
  handleValidClientNumber,
} from "../../helper";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../store/slices/bucketSlice";
import Footer from "../Footer";
import Header from "../Header";

import ArrowRightGrey from "../../assets/ArrowRightGrey.svg";
import { useEffect, useState } from "react";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "min 3 symbols").required(),
  surname: Yup.string().min(3, "min 3 symbols").required(),
  numberPhone: Yup.string().min(10, "min 10 numbers").required(),
  address: Yup.string().min(10, "min 3 symbols").required(),
});
const CheckOut = () => {
  const dispatch = useDispatch();
  const bucketList = useSelector(getBucketProducts);
  const [totalSum, setTotalSum] = useState<number>(0);
  const [deliveryType, setDeliveryType] = useState({
    courierType: true,
    pickUpType: false,
    postalType: false,
  });
  useEffect(() => {
    const total = bucketList.reduce((prev, current) => {
      const { quantity, price } = current;
      const res = prev + (quantity ?? 0) * price;
      return res;
    }, 0);
    setTotalSum(total);
  }, [bucketList]);

  const formik = useFormik<CheckOutForm>({
    initialValues: {
      name: "",
      surname: "",
      numberPhone: "",
      address: "",
    },
    validationSchema,
    onSubmit: async (_, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      resetForm();
    },
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
          <span className="selectedProduct">CheckOut</span>
        </nav>

        <section className="containerContent">
          <section className="containerCard">
            <h1>Cart</h1>
            <div className="tableContainer">
              <table>
                <thead>
                  <tr>
                    <th className="thHead">Item</th>
                    <th className="thHead">Price</th>
                    <th className="thHead">Quantity</th>
                    <th className="thHead">Sum</th>
                  </tr>
                </thead>
                <tbody>
                  {bucketList &&
                    bucketList.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="productFlex">
                            <img
                              src={item.imgUrl}
                              className="productImg"
                              alt={item.name}
                            />
                            <span className="productName">{item.name}</span>
                          </div>
                        </td>
                        <td className="priceProduct">{item.price} $</td>
                        <td className="quantityProduct">
                          <div className="amountProductContainer border">
                            <button
                              onClick={() => {
                                if (item.quantity === 1) return;
                                dispatch(decreaseQuantity(item.id));
                              }}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => {
                                if ((item.quantity ?? 0) > 99) return;
                                dispatch(increaseQuantity(item.id));
                              }}
                            >
                              +
                            </button>
                          </div>{" "}
                        </td>
                        <td className="sumProduct">
                          <span className="sum">
                            {item.price * (item.quantity ?? 0)}
                          </span>
                          &nbsp;
                          <span className="dollarChar">$</span>{" "}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <nav className="sumContainer">
              <Link to={"/"} className="linkContinueShopping">
                Continue Shopping
              </Link>

              <div className="totalSumContainer">
                <span className="totalText">Total:</span>
                <span className="sumText"> &nbsp;{totalSum}$</span>
              </div>
            </nav>
          </section>
          <section className="containerCheckOut">
            <h1>Checkout</h1>
            <form className="formCheckout" onSubmit={formik.handleSubmit}>
              <input
                onKeyDown={(e) => checkValidContent(e, handleValidClientName)}
                onPaste={(e) => {
                  //get data from clipboard and check valid
                  const pasted = e.clipboardData.getData("text");
                  if (!handleValidClientName(pasted)) e.preventDefault();
                }}
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                className={`checkoutInput ${
                  formik.touched.name && formik.errors.name
                    ? "inputsError"
                    : "inputsForm"
                } `}
                placeholder="Name"
              />
              <input
                onKeyDown={(e) => checkValidContent(e, handleValidClientName)}
                onPaste={(e) => {
                  //get data from clipboard and check valid
                  const pasted = e.clipboardData.getData("text");
                  if (!handleValidClientName(pasted)) e.preventDefault();
                }}
                onChange={formik.handleChange}
                value={formik.values.surname}
                name="surname"
                className={`checkoutInput ${
                  formik.touched.surname && formik.errors.surname
                    ? "inputsError"
                    : "inputsForm"
                } `}
                placeholder="Surname"
              />
              <input
                onKeyDown={(e) => checkValidContent(e, handleValidClientNumber)}
                onPaste={(e) => {
                  //get data from clipboard and check valid
                  const pasted = e.clipboardData.getData("text");
                  if (!handleValidClientNumber(pasted)) e.preventDefault();
                }}
                onChange={formik.handleChange}
                value={formik.values.numberPhone}
                name="numberPhone"
                className={`checkoutInput ${
                  formik.touched.numberPhone && formik.errors.numberPhone
                    ? "inputsError"
                    : "inputsForm"
                } `}
                placeholder="Number phone"
                maxLength={11}
              />

              <section className="typesDeliveryContainer">
                <div className="typesDeliveryHeadingAndTwoTypes">
                  <h5 className="typesDeliveryHeading">Type delivery</h5>

                  <div className="twoTypesDelivers">
                    <button
                      type="button"
                      className={`buttonDeliveryType ${
                        deliveryType.courierType
                          ? "buttonDeliveryTypeActive"
                          : "buttonDeliveryTypeNotActive"
                      }`}
                      onClick={() => {
                        setDeliveryType({
                          pickUpType: false,
                          postalType: false,
                          courierType: true,
                        });
                      }}
                    >
                      <figure>
                        <img
                          className="imgsTypesDelivery"
                          src={
                            deliveryType.courierType
                              ? CourierDelivery
                              : CourierDeliveryGrey
                          }
                          alt="Courier delivery"
                        />
                      </figure>
                      <span className="spansButtonDeliveryType buttonDeliveryTypeSmallText">
                        Courier delivery
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`buttonDeliveryType ${
                        deliveryType.pickUpType
                          ? "buttonDeliveryTypeActive"
                          : "buttonDeliveryTypeNotActive"
                      }`}
                      onClick={() => {
                        setDeliveryType({
                          pickUpType: true,
                          postalType: false,
                          courierType: false,
                        });
                      }}
                    >
                      <figure>
                        <img
                          className="imgsTypesDelivery"
                          src={
                            deliveryType.pickUpType
                              ? PickUpDeliveryWhite
                              : PickUpDelivery
                          }
                          alt=""
                        />
                      </figure>
                      <span className="spansButtonDeliveryType buttonDeliveryTypeSmallText">
                        Pickup in City{" "}
                      </span>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className={`buttonDeliveryTypeFullBlock ${
                    deliveryType.postalType
                      ? "buttonDeliveryTypeActive"
                      : "buttonDeliveryTypeNotActive"
                  }`}
                  onClick={() => {
                    setDeliveryType({
                      pickUpType: false,
                      postalType: true,
                      courierType: false,
                    });
                  }}
                >
                  <figure>
                    <img
                      className="imgsTypesDelivery"
                      src={
                        deliveryType.postalType ? novaPostaWhite : novaPostaGrey
                      }
                      alt=""
                    />
                  </figure>
                  <span className="spansButtonDeliveryType buttonDeliveryTypeFullText">
                    Postal company
                  </span>
                </button>
              </section>
              <input
                onKeyDown={(e) =>
                  checkValidContent(e, handleValidSearchProduct)
                }
                onPaste={(e) => {
                  //get data from clipboard and check valid
                  const pasted = e.clipboardData.getData("text");
                  if (!handleValidSearchProduct(pasted)) e.preventDefault();
                }}
                onChange={formik.handleChange}
                value={formik.values.address}
                name="address"
                className={`checkoutInput ${
                  formik.touched.address && formik.errors.address
                    ? "inputsError"
                    : "inputsForm"
                } `}
                placeholder="Address"
              />
              <button type="submit" className="submitBtn">
                <span className="submitBtnText"> Checkout</span>
              </button>
            </form>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CheckOut;
