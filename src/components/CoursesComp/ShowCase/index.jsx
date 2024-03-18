import React from "react";
import { Container } from "./style";
import showcaseAI from "../../../assets/images/showcaseAI.png";
import { Button } from "../../../components/Generics";
const Showcase = ({ data }) => {
  return (
    <Container>
      <div className="course-showcase">
        <div className="course-showcase__left" data-aos="fade-right">
          <div className="course-showcase__left__title">{data?.title}</div>
          <div className="course-showcase__left__desc">{data?.desc}</div>
          <Button $borderRadius="30px">Hoziroq o’qish</Button>
        </div>
        <div className="course-showcase__right" data-aos="fade-left">
          <img src={showcaseAI} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
