import Course from "../Pages/Course";
import Home from "../Pages/Home";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    id: 2,
    path: "/course/:id",
    element: <Course />,
    isPrivate: false,
  },
];
