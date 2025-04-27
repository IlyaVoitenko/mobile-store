import { IProduct } from "../../types";
import { Link } from "react-router-dom";
import "../../styles/components/_productCard.scss";
import AddToCardBtn from "./AddToCardBtn";
import AmountProduct from "./AmountProduct";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../store/slices/productsSlice";

type ProductCardProps = {
  card: IProduct;
  promotion?: boolean;
  category?: string;
};

const ProductCard = ({
  card,
  promotion = false,
  category = "Accessories",
}: ProductCardProps) => {
  const dispatch = useDispatch();
  const { name, price, imgUrl, id } = card || {};

  return (
    <li
      className={
        promotion
          ? "ProductCardContainer"
          : "ProductCardCategoriesPageContainer"
      }
    >
      <Link
        onClick={() => {
          dispatch(setSelectedProduct(card));
        }}
        to={`/good/${encodeURIComponent(category.trim())}/${encodeURIComponent(
          id
        )}`}
        className="link"
      >
        {promotion && (
          <ul className="promotionList">
            <li className=" blueBg">
              <span className="promotionText">Delivery</span>
            </li>
            <li className=" redBg">
              <span className="promotionText">Installment plan</span>
            </li>
            <li className=" greenBg">
              <span className="promotionText">Warranty</span>
            </li>
          </ul>
        )}

        <img
          src={imgUrl}
          alt={name}
          className={
            promotion ? "ProductCardImg" : "ProductCardImgCategoriesPage"
          }
        />
        <div
          className={
            promotion
              ? "productInfoContainer"
              : "productInfoCategoriesPageContainer"
          }
        >
          <span className="descriptionProduct">{name}</span>
          <div className="priceAndCurrencyProductContainer">
            <span className="priceProduct">{price}</span>{" "}
            <span className="productCurrency">&#36;</span>{" "}
          </div>
        </div>
      </Link>
      <div className="addToCardBtnAndAmountProductContainer">
        <AmountProduct />
        <AddToCardBtn dataCard={card} />
      </div>
    </li>
  );
};

export default ProductCard;
