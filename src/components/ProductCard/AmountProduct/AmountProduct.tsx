import { SetStateAction } from "react";
import "../../../styles/components/_amountProduct.scss";
interface AmountProductProps {
  amountItem: number;
  setAmountItem: {
    (value: SetStateAction<number>): void;
  };
}
const AmountProduct = ({ amountItem, setAmountItem }: AmountProductProps) => {
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
