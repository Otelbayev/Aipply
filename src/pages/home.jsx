import React from "react";
import { useMenuContext } from "../context/menu-context";
import Showcase from "../components/Showcase/showcase.jsx";
import Why from "../components/Why/why.jsx";
import Courses from "../components/Courses/courses.jsx";
import Banner from "../components/Banner/bannder.jsx";
import Partners from "../components/Partners/partners.jsx";
import Mentors from "../components/Mentors/mentors.jsx";
import Comments from "../components/Comments/comments.jsx";
import Bottom from "../components/Bottom/bottom.jsx";
import Numbers from "../components/Statistica/numbers.jsx";
import Results from "../components/Results/index.jsx";

const Home = () => {
  const { showMenu } = useMenuContext();

  return (
    <>
      <Showcase />
      {!showMenu && <Numbers />}
      {!showMenu && <Results />}
      {!showMenu && <Why />}
      {!showMenu && <Comments />}
      {!showMenu && <Banner course />}
      {!showMenu && <Courses />}
      {!showMenu && <Partners />}
      {!showMenu && <Mentors />}
      {!showMenu && <Bottom />}
    </>
  );
};

export default Home;
