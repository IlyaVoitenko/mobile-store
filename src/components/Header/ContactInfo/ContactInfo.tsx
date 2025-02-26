import "../../../styles/components/_contactInfo.scss";

interface Props {
  isFooter: boolean;
}
const ContactInfo = ({ isFooter = false }: Props) => {
  return (
    <div className={`contactInfoContainer  ${isFooter ? "marginTop" : ""}`}>
      <a href="tel:(099) 999-99-99" className="callBack">
        Call me back
      </a>
      <span className="contactNumber">(099) 999-99-99</span>
    </div>
  );
};

export default ContactInfo;
