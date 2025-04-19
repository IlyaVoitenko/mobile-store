import { useState } from "react";
import { IProduct, CategoryType, ProductMap } from "../../types";
import ProductCard from "../ProductCard";
import "../../styles/components/_categorySlider.scss";
import "../../styles/components/_productCollection.scss";

import ArrowLeftBlue from "../../assets/ArrowLeftBlue.svg";
import ArrowRightBlue from "../../assets/ArrowRightBlue.svg";

type ProductCollectionProps = {
  listProduct: ProductMap;
  title: string;
  category?: CategoryType;
};
const AMOUNT_ITEMS = 4;
const ProductCollection = ({
  listProduct,
  title,
  category = "Accessories",
}: ProductCollectionProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const list = listProduct[category]?.slice(0, 8) ?? [];
  const showItems = AMOUNT_ITEMS;
  const lengthList = Math.ceil(list.length / showItems);
  const maxItems = currentPage * showItems;
  const minItems = maxItems - showItems;
  const newProductCollectionSlice = list.slice(minItems, maxItems);
  return (
    <div className="productCollectionContainer">
      <div className="titleAndAmountContainer">
        <h3 className="title">{title}</h3>
        <div className="amountProductsContainer">
          <img
            src={ArrowLeftBlue}
            alt={`Arrow left blue ${title} product`}
            onClick={() => {
              if (currentPage === 1) return;
              setCurrentPage(currentPage - 1);
            }}
          />
          <div>
            <span className="changeCurrentSlider currentProductList">
              {currentPage}
            </span>
            <span className="sliderAmount">/{lengthList}</span>
          </div>{" "}
          <img
            src={ArrowRightBlue}
            alt={`Arrow right blue ${title} product`}
            onClick={() => {
              if (currentPage === lengthList) return;
              setCurrentPage(currentPage + 1);
            }}
          />
        </div>
      </div>
      <ul className="listContainer">
        {newProductCollectionSlice &&
          newProductCollectionSlice.map((card: IProduct) => (
            <ProductCard key={card.id} card={card} promotion={true} />
          ))}
      </ul>
    </div>
  );
};

export default ProductCollection;
