import { useFormStatus } from "react-dom";

const NeedHelpSubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Loading ..." : "Call me back"}
    </button>
  );
};

export default NeedHelpSubmitBtn;
