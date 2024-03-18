import React, { useEffect, useState } from "react";
import { Container } from "./style";
import FormWrap from "../../components/FormWrap";
import Showcase from "../../components/CoursesComp/ShowCase";
import Statistica from "../../components/CoursesComp/Statistica";
import { useParams } from "react-router-dom";
import About from "../../components/CoursesComp/About";
import ThenCourse from "../../components/CoursesComp/ThenCourse";
import Moduls from "../../components/CoursesComp/Moduls";
import { computerScience } from "../../mock/computerScience";
import { reactJs } from "../../mock/front";
import { graphicDesign } from "../../mock/graphic";
import { noCoding } from "../../mock/nocoding";
import { interior } from "../../mock/interior";
import { motion } from "../../mock/motion";
import { foundation } from "../../mock/foundation";
import { useScrollContext } from "../../context/ScrollContext";

const Course = () => {
  const param = useParams();
  const [data, setData] = useState({});
  const { contactRef } = useScrollContext();

  function scrollInPage(hash) {
    const obj = {
      "#contact": contactRef,
    };

    obj[hash]?.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollInPage(location.hash);
  }, [location.hash]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const obj = {
      "no-coding": noCoding,
      "graphic-design": graphicDesign,
      "computer-science": computerScience,
      frontend: reactJs,
      "in-ex-design": interior,
      "motion-design": motion,
      "computer-foundaion": foundation,
    };
    setData(obj[param?.id]);
  }, []);
  return (
    <div>
      <div className="root-container">
        <div className="root-wrapper">
          <Showcase data={data?.showcase} />
          <Statistica data={data?.statistics} />
          <About data={data?.about} />
          <ThenCourse data={data?.then} />
          <Moduls data={data?.module} />
        </div>
      </div>
      <Container>
        <div className="root-container">
          <div className="root-wrapper">
            <div className="title-dark tt" data-aos="fade-right">
              Kurs davomida o’quvchilarimiz qilgan ishlar
            </div>
          </div>
        </div>
        <img src={data?.project} data-aos="fade-up" alt="" />
      </Container>
      <div className="root-container">
        <div className="root-wrapper">
          <FormWrap />
        </div>
      </div>
    </div>
  );
};

export default Course;
