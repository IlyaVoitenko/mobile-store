import { IProductSection } from "../../types";
import "../../styles/components/_productCard.scss";

import AddToCardBtn from "./AddToCardBtn";
import AmountProduct from "./AmountProduct";

type ProductCardProps = {
  card: IProductSection;
  promotion?: boolean;
};

const ProductCard = ({ card, promotion = false }: ProductCardProps) => {
  const { priceProduct, descriptionProduct, imgProduct } = card || {};
  return (
    <li className="ProductCardContainer">
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
        src={imgProduct}
        alt={descriptionProduct}
        className="ProductCardImg"
      />
      <div className="productInfoContainer">
        <span className="descriptionProduct">{descriptionProduct}</span>
        <div className="priceAndCurrencyProductContainer">
          <span className="priceProduct">{priceProduct}</span>{" "}
          <span className="productCurrency">&#36;</span>{" "}
        </div>
      </div>
      <div className="addToCardBtnAndAmountProductContainer">
        <AmountProduct />
        <AddToCardBtn />
      </div>
    </li>
  );
};

export default ProductCard;
