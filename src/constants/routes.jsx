import { lazy } from "react";
import Layout from "../components/Global/Layout";
import Listings from "../pages/Listings";
const Home = lazy(() => import("../pages/Home"));
const Sell = lazy(() => import("../pages/Sell"));
const Buy = lazy(() => import("../pages/Buy"));
const Rent = lazy(() => import("../pages/Rent"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));
const FindAgent = lazy(() => import("../pages/FindAgent"));

export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Layout pages={<Home />} />,
  },
  {
    title: "Buy Homes Page",
    url: "/buy",
    page: <Layout pages={<Buy />} />,
  },
  {
    title: "Sell Homes Page",
    url: "/sell",
    page: <Layout pages={<Sell />} />,
  },
  {
    title: "Rent Homes Page",
    url: "/rent",
    page: <Layout pages={<Rent />} />,
  },
  {
    title: "Rent Homes Page",
    url: "/find-agent",
    page: <Layout pages={<FindAgent />} />,
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
