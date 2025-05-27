import "../../styles/layout/_loading.scss";
import { Helmet } from "react-helmet-async";
const Loading = () => {
  return (
    <div className="pageDefault containerLoading">
      <Helmet>
        <title>Store Mobile | Loading...</title>
        <meta name="description" content="Loading page for Store Mobile" />
      </Helmet>
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
