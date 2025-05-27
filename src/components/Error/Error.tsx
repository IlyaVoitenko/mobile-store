import "../../styles/components/_error.scss";
import Footer from "../Footer";
import Header from "../Header";
import { Helmet } from "react-helmet-async";
const Error = () => {
  return (
    <main className="pageDefault ">
      <Helmet>
        <title>Store Mobile | Error page </title>
        <meta name="robots" content="noindex" />{" "}
        <meta name="description" content="Error page for Store Mobile" />
      </Helmet>
      <Header />
      <div className="containerError">
        <span className="errorText">Something went wrong !</span>
      </div>
      <Footer />
    </main>
  );
};

export default Error;
