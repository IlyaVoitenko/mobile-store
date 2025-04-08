import { IProduct } from "../../types";
import "../../styles/components/_productCard.scss";

import AddToCardBtn from "./AddToCardBtn";
import AmountProduct from "./AmountProduct";

type ProductCardProps = {
  card: IProduct;
  promotion?: boolean;
};

const ProductCard = ({ card, promotion = false }: ProductCardProps) => {
  const { name, description, price, imgUrl } = card || {};
  return (
    <li
      className={
        promotion
          ? "ProductCardContainer"
          : "ProductCardCategoriesPageContainer"
      }
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
        alt={description}
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
        <span className="descriptionProduct">{description || name}</span>
        <div className="priceAndCurrencyProductContainer">
          <span className="priceProduct">{price}</span>{" "}
          <span className="productCurrency">&#36;</span>{" "}
        </div>
      </div>
      <div className="addToCardBtnAndAmountProductContainer">
        <AmountProduct />
        <AddToCardBtn dataCard={card} />
      </div>
    </li>
  );
};

export default ProductCard;
