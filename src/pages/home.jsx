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

const Home = () => {
  const { showMenu } = useMenuContext();

  return (
    <>
      jasurbek
      <Showcase />
      {!showMenu && <Why />}
      {!showMenu && <Courses />}
      {!showMenu && <Banner />}
      {!showMenu && <Partners />}
      {!showMenu && <Mentors />}
      {!showMenu && <Comments />}
      {!showMenu && <Bottom />}
    </>
  );
};

export default Home;
