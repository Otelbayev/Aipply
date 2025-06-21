import React from "react";
import CrmForm from "../pages/crm-form";
import Index from "../pages/KS";
import Form from "../pages/KS/form";
import Final from "../pages/KS/final";

const Home = React.lazy(() => import("../pages/home"));
const Not = React.lazy(() => import("../pages/not-found"));
const Course = React.lazy(() => import("../pages/course"));
const Privacy = React.lazy(() => import("../pages/privacy"));
const Test = React.lazy(() => import("../pages/test"));

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/course/:path",
    element: <Course />,
  },
];

export const page = [
  {
    id: 1,
    path: "/privacy",
    element: <Privacy />,
  },
  {
    id: 2,
    path: "/lid",
    element: <CrmForm />,
  },
  {
    id: 3,
    path: "/flyer",
    element: <CrmForm />,
  },
  {
    id: 4,
    path: "/xat",
    element: <CrmForm />,
  },
  {
    id: 6,
    path: "/hamkorlik",
    element: <CrmForm />,
  },
  {
    id: 5,
    path: "*",
    element: <Not />,
  },
  {
    id: 8,
    path: "/ks",
    element: <Index />,
  },
  {
    id: 9,
    path: "/form",
    element: <Form />,
  },
  {
    id: 10,
    path: "/final",
    element: <Final />,
  },
  {
    id: 13,
    path: "/ks-test",
    element: <Test />,
  },
];
