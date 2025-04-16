interface INeedHelpSubmitBtnProps {
  setNameClient: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}
const NeedHelpSubmitBtn = ({
  setNameClient,
  setPhoneNumber,
}: INeedHelpSubmitBtnProps) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setNameClient("");
        setPhoneNumber("");
      }}
    >
      Call me back
    </button>
  );
};

export default NeedHelpSubmitBtn;
