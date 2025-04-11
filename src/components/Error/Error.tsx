import "../../styles/components/_error.scss";
import Footer from "../Footer";
import Header from "../Header";
const Error = () => {
  return (
    <main className="pageDefault ">
      <Header />
      <div className="containerError">
        <span className="errorText">Something went wrong !</span>
      </div>
      <Footer />
    </main>
  );
};

export default Error;
