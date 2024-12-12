import "../../../styles/components/_addToCardBtn.scss";
import basketImg from "../../../assets/basketImg.svg";
const AddToCardBtn = () => {
  return (
    <button className="basketBtn">
      <span>Add to cart</span> <img src={basketImg} alt="Add to card button" />
    </button>
  );
};

export default AddToCardBtn;
