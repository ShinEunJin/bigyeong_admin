import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
