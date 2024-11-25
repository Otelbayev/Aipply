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
  // {
  //   id: 2,
  //   path: "/computer-science",
  //   element: <Course data={computerScience} />,
  // },
  // {
  //   id: 3,
  //   path: "/reactjs",
  //   element: <Course data={reactJs} />,
  // },
  // {
  //   id: 4,
  //   path: "/graphic-design",
  //   element: <Course data={graphicDesign} />,
  // },
  // {
  //   id: 5,
  //   path: "/no-coding",
  //   element: <Course data={noCoding} />,
  // },
  // {
  //   id: 6,
  //   path: "/in-ex-design",
  //   element: <Course data={interior} />,
  // },
  // {
  //   id: 7,
  //   path: "/motion-design",
  //   element: <Course data={motion} />,
  // },
  // {
  //   id: 8,
  //   path: "/foundation",
  //   element: <Course data={foundation} />,
  // },
  // {
  //   id: 9,
  //   path: "/python",
  //   element: <Course data={python} />,
  // },
  // {
  //   id: 10,
  //   path: "/bir-oyda-bir-veb-sayt",
  //   element: <Course data={birOy} />,
  // },
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
    path: "*",
    element: <Not />,
  },
];
