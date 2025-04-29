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
const FinishOn = React.lazy(() => import("../pages/finishon"));
const FinishOff = React.lazy(() => import("../pages/finishoff"));

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
    path: "/formaks",
    element: <KSFORM />,
  },
  {
    id: 10,
    path: "/last-step",
    element: <LastStep />,
  },
  {
    id: 11,
    path: "/finishon",
    element: <FinishOn />,
  },
  {
    id: 12,
    path: "/finishoff",
    element: <FinishOff />,
  },
];
