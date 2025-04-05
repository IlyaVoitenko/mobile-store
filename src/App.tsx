import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("./pages/MainPage")).default,
    }),
  },
  {
    path: "/category/:category",
    lazy: async () => ({
      Component: (await import("./pages/CategoryPage")).default,
    }),
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<LoadingPage />} />;
}

export default App;
