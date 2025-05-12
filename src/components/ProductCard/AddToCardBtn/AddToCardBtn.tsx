import "../../../styles/components/_addToCardBtn.scss";
import basketImg from "../../../assets/basketImg.svg";
import { IProduct } from "../../../types";
import { useDispatch } from "react-redux";
import { addToBucket } from "../../../store/slices/bucketSlice";
interface AddToCardBtnProps {
  dataCard: IProduct;
  amountItem: number;
}
const AddToCardBtn = ({ dataCard, amountItem }: AddToCardBtnProps) => {
  const dispatch = useDispatch();
  return (
    <button
      className="basketBtn"
      onClick={() => {
        const res = {
          ...dataCard,
          quantity: amountItem,
        };
        dispatch(addToBucket(res));
      }}
    >
      <span>Add to cart</span> <img src={basketImg} alt="Add to card button" />
    </button>
  );
};

export default AddToCardBtn;
