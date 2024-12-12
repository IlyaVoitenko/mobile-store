import { ProductSection } from "../../types";
import "../../styles/components/_productCard.scss";

import AddToCardBtn from "./AddToCardBtn";
import AmountProduct from "./AmountProduct";

type ProductCardProps = {
  card: ProductSection;
};

const ProductCard = ({ card }: ProductCardProps) => {
  const { priceProduct, descriptionProduct, imgProduct } = card || {};
  return (
    <li className="ProductCardContainer">
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
