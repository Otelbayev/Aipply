import React, { useEffect, useState } from "react";
import CourseShowcase from "../components/CourseShowcse/course-showcase";
import { graphicDesign } from "../mock/graphic";
import { interior } from "../mock/interior";
import { motion } from "../mock/motion";
import { reactJs } from "../mock/front";
import { noCoding } from "../mock/nocoding";
import { computerScience } from "../mock/computerScience";
import { birOy } from "../mock/biroy";
import { foundation } from "../mock/foundation";
import { python } from "../mock/python";
import { useParams } from "react-router-dom";
import Statistica from "../components/Statistica";
import About from "../components/About";
import ThenCourse from "../components/ThenCourse";
import InCourse from "../components/InCourse";
import { useMenuContext } from "../context/menu-context";
import Banner from "../components/Banner/bannder";
import Moduls from "../components/Moduls";

const Course = () => {
  const { path } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const obj = {
      "graphic-design": graphicDesign,
      "in-ex-design": interior,
      "motion-design": motion,
      "no-coding": noCoding,
      "computer-science": computerScience,
      "bir-oyda-bir-veb-sayt": birOy,
      foundation: foundation,
      reactjs: reactJs,
      python,
    };
    setData(obj[path]);
    window.scrollTo(0, 0);
  }, [path]);

  const { showMenu } = useMenuContext();

  return (
    <>
      <CourseShowcase data={data?.showcase} icon={data?.courseImg} />
      {!showMenu && (
        <>
          <Statistica data={data?.statistics} />
          <About data={data?.about} />
          <ThenCourse data={data?.then} />
          <Moduls data={data?.module} />
          <InCourse video={data?.video} project={data?.project} />
          <Banner course={true} />
        </>
      )}
    </>
  );
};

export default Course;
