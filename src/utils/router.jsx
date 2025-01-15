import React from "react";

const Home = React.lazy(() => import("../pages/home"));
const Not = React.lazy(() => import("../pages/not-found"));
const Course = React.lazy(() => import("../pages/course"));
const Privacy = React.lazy(() => import("../pages/privacy"));
const Lid = React.lazy(() => import("../pages/Lid"));

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 1,
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
    element: <Lid />,
  },
  {
    id: 3,
    path: "/flyer",
    element: <Lid />,
  },
  {
    id: 4,
    path: "/xat",
    element: <Lid />,
  },
  {
    id: 6,
    path: "/hamkorlik",
    element: <Lid />,
  },
  {
    id: 5,
    path: "*",
    element: <Not />,
  },
];
