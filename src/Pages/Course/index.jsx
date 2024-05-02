import React, { useEffect, useRef } from "react";
import { Container } from "./style";
import FormWrap from "../../components/FormWrap";
import Showcase from "../../components/CoursesComp/ShowCase";
import Statistica from "../../components/CoursesComp/Statistica";
import About from "../../components/CoursesComp/About";
import ThenCourse from "../../components/CoursesComp/ThenCourse";
import Moduls from "../../components/CoursesComp/Moduls";
import { Helmet } from "react-helmet-async";

const Course = ({ data }) => {
  const readRef = useRef(null);
  const vebinarRef = useRef(null);

  function scrollInPage(hash) {
    const obj = {
      "#vebinar": vebinarRef,
    };

    obj[hash]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      location.hash ? scrollInPage(location.hash) : window.scrollTo(0, 0);
    }, 500);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Aipply - {data?.name}</title>
        <meta name="description" content={data?.showcase?.desc} />
        <meta name="keywords" content={data?.keywords} />
      </Helmet>
      <div className="root-container">
        <div className="root-wrapper">
          <Showcase
            img={data?.courseImg}
            readRef={readRef}
            data={data?.showcase}
          />
          <Statistica data={data?.statistics} />
          <div ref={readRef}>
            <About data={data?.about} />
          </div>
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
            {data?.video ? (
              <>
                <video autoPlay loop muted src={""} />
              </>
            ) : (
              data?.project?.length &&
              data.project.map((e, index) => (
                <img key={index} src={e} data-aos="fade-up" alt="" />
              ))
            )}
          </div>
        </div>
      </Container>
      <div className="root-container">
        <div className="root-wrapper">
          <FormWrap ref={vebinarRef} />
        </div>
      </div>
    </div>
  );
};

export default Course;
