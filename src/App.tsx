import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    lazy: async () => ({
      Component: (await import("./pages/MainPage")).default,
    }),
  },
  {
    path: "/category/:category",
    errorElement: <ErrorPage />,
    lazy: async () => ({
      Component: (await import("./pages/CategoryPage")).default,
    }),
  },
  {
    path: "/good/:category/:goodName",
    errorElement: <ErrorPage />,
    lazy: async () => ({
      Component: (await import("./pages/GoodInfoPages")).default,
    }),
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<LoadingPage />} />;
}

export default App;
