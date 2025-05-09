import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../components/HomeLayout/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);

export default router;
