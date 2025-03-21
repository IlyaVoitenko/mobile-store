import "../../../styles/layout/_header.scss";
import resources from "../resources";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="logoTextAndImage">
      <span>Store</span>
      <img src={resources.logo} className="logoIcon" alt="logo" />
      <span>mobile</span>
    </Link>
  );
};

export default Logo;
