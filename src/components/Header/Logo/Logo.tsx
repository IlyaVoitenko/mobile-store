import "../../../styles/layout/_header.scss";
import resources from "../resources";

const Logo = () => {
  return (
    <div className="logoTextAndImage">
      <span>Store</span>
      <img src={resources.logo} className="logoIcon" alt="logo" />
      <span>mobile</span>
    </div>
  );
};

export default Logo;
