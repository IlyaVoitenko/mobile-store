import "../../../styles/components/_addToCardBtn.scss";
import basketImg from "../../../assets/basketImg.svg";
import { IProduct } from "../../../types";

interface AddToCardBtnProps {
  dataCard: IProduct;
}
const AddToCardBtn = ({ dataCard }: AddToCardBtnProps) => {
  return (
    <button
      className="basketBtn"
      onClick={() => {
        return dataCard;
      }}
    >
      <span>Add to cart</span> <img src={basketImg} alt="Add to card button" />
    </button>
  );
};

export default AddToCardBtn;
