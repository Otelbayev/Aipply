import React from "react";
import Form from "../Form/form";
import { Container } from "./style";

const CourseShowcase = ({ data, icon }) => {
  return (
    <Container className="container">
      <div className="course-showcase">
        <div className="course-showcase__left">
          <div className="course-showcase__left--title title">
            {data?.title}
          </div>
          <div className="course-showcase__left--desc">{data?.desc}</div>
          <div className="course-showcase__form">
            <Form />
          </div>
        </div>
        <div className="course-showcase__right">
          <img loading="lazy" effect="blur" src={icon} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default CourseShowcase;
