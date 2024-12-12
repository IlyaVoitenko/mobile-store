import { useState } from "react";
import "../../../styles/components/_amountProduct.scss";
const AmountProduct = () => {
  const [amountItem, setAmountItem] = useState<number>(1);
  return (
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
  );
};

export default AmountProduct;
