import Course from "../Pages/Course";
import Home from "../Pages/Home";
import { computerScience } from "../mock/computerScience";
import { reactJs } from "../mock/front";
import { graphicDesign } from "../mock/graphic";
import { noCoding } from "../mock/nocoding";
import { interior } from "../mock/interior";
import { motion } from "../mock/motion";
import { foundation } from "../mock/foundation";
import { python } from "../mock/python";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/computer-science",
    element: <Course data={computerScience} />,
  },
  {
    id: 3,
    path: "/reactjs",
    element: <Course data={reactJs} />,
  },
  {
    id: 4,
    path: "/graphic-design",
    element: <Course data={graphicDesign} />,
  },
  {
    id: 5,
    path: "/no-coding",
    element: <Course data={noCoding} />,
  },
  {
    id: 6,
    path: "/in-ex-design",
    element: <Course data={interior} />,
  },
  {
    id: 7,
    path: "/motion-design",
    element: <Course data={motion} />,
  },
  {
    id: 8,
    path: "/foundation",
    element: <Course data={foundation} />,
  },
  {
    id: 9,
    path: "/python",
    element: <Course data={python} />,
  },
];
