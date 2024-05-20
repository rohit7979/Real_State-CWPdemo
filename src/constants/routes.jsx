import { lazy } from "react";
import Layout from "../components/Global/Layout";
import Listings from "../pages/Listings";
const Home = lazy(() => import("../pages/Home"));
const Buy = lazy(() => import("../pages/Buy"));
const Rent = lazy(() => import("../pages/Rent"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Layout pages={<Home />} />,
  },
  {
    title: "Buy Page",
    url: "/buy",
    page: <Layout pages={<Buy />} />,
  },
  {
    title: "Rent Page",
    url: "/rent",
    page: <Layout pages={<Rent />} />,
  },
  // {
  //   title: "Login Page",
  //   url: "/login",
  //   page: <Login />,
  // },
  {
    title: "Home Page",
    url: "/register",
    page: <Register />,
  },
  {
    title: "Home Page",
    url: "/listings",
    page: <Layout pages={<Listings />} />,
  },
  {
    title: "Not Found Page",
    url: "/:xyz",
    page: <Layout pages={<NotFound />} />,
  },
];
