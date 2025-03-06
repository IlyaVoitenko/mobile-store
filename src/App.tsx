import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
