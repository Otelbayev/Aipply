import React from "react";
import { Container } from "./style";

const About = ({ data }) => {
  return (
    <div className="container">
      <Container>
        <div className="title-dark about-title" data-aos="fade-up">
          {data?.name} qanday soha ?
        </div>
        <div className="about-head" data-aos="fade-up">
          <div className="about-head__img">
            <img src={data?.img} />
          </div>
          <div className="about-head__right">
            <div className="about-head__right__txt">{data?.title}</div>
            <div className="about-head__right__txt">{data?.desc}</div>
          </div>
        </div>
        <div className="about-body">
          {data?.projects?.map((img, index) => (
            <img key={index}  src={img} data-aos="fade-up" />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;
