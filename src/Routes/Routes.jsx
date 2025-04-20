import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
