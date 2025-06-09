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
import img1 from "../assets/images/results/dasturlash/1.jpg";
import img2 from "../assets/images/results/dasturlash/2.png";
import img3 from "../assets/images/results/dasturlash/3.png";
import img4 from "../assets/images/results/dasturlash/4.jpg";
import img5 from "../assets/images/results/grafik/1.png";
import img6 from "../assets/images/results/grafik/2.png";
import img7 from "../assets/images/results/grafik/3.png";
import img8 from "../assets/images/results/inex/1.png";
import img9 from "../assets/images/results/inex/2.png";
import img10 from "../assets/images/results/inex/3.png";
import img11 from "../assets/images/results/inex/4.png";
import img12 from "../assets/images/results/inex/5.png";
import img14 from "../assets/images/results/ks/2.jpg";
import img15 from "../assets/images/results/ks/3.jpg";

const Home = () => {
  const { showMenu } = useMenuContext();

  const slides = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    // img13,
    img14,
    img15,
  ];

  return (
    <>
      <Showcase />
      {!showMenu && <Numbers />}
      {!showMenu && <Results slides={slides} />}
      {!showMenu && <Why />}
      {!showMenu && <Banner course />}
      {!showMenu && <Comments />}
      {!showMenu && <Courses />}
      {!showMenu && <Partners />}
      {!showMenu && <Mentors />}
      {!showMenu && <Bottom />}
    </>
  );
};

export default Home;
