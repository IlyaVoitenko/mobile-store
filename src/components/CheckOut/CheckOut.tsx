import "../../styles/pages/_index.scss";
import "../../styles/components/_categoryNavProduct.scss";
import "../../styles/components/_checkOut.scss";
import "../../styles/components/_amountProduct.scss";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBucketProducts } from "../../store/selectors";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../store/slices/bucketSlice";
import Footer from "../Footer";
import Header from "../Header";

import ArrowRightGrey from "../../assets/ArrowRightGrey.svg";
import { useEffect, useState } from "react";

const CheckOut = () => {
  const dispatch = useDispatch();
  const bucketList = useSelector(getBucketProducts);
  const [totalSum, setTotalSum] = useState<number>(0);
  useEffect(() => {
    const total = bucketList.reduce((prev, current) => {
      const { quantity, price } = current;
      const res = prev + (quantity ?? 0) * price;
      return res;
    }, 0);
    setTotalSum(total);
  }, [bucketList]);
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
                      <td className="productFlex">
                        <img
                          src={item.imgUrl}
                          className="productImg"
                          alt={item.name}
                        />
                        <span className="productName">{item.name}</span>
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
          <section className="containerCheckOut"></section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CheckOut;
