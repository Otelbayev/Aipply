import React from "react";
import CrmForm from "../pages/crm-form";

const Home = React.lazy(() => import("../pages/home"));
const Not = React.lazy(() => import("../pages/not-found"));
const Course = React.lazy(() => import("../pages/course"));
const Privacy = React.lazy(() => import("../pages/privacy"));
// const Lid = React.lazy(() => import("../pages/Lid"));
const KS = React.lazy(() => import("../pages/ks"));
const KSFORM = React.lazy(() => import("../pages/ks-form"));
const LastStep = React.lazy(() => import("../pages/last-step"));
const KSInsta = React.lazy(() => import("../pages/ka-insta"));

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
    element: <KS />,
  },
  {
    id: 9,
    path: "/ks-form",
    element: <KSFORM />,
  },
  {
    id: 10,
    path: "/last-step",
    element: <LastStep />,
  },

  {
    id: 11,
    path: "/ks-insta",
    element: <KSInsta />,
  },
];
