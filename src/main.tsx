import "./assets/styles/global.scss";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store, { persistor } from "./store";
import App from "./App.tsx";
import "./index.scss";
import LoadingPage from "./pages/LoadingPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingPage />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
