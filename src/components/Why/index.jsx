import React from "react";
import { Container } from "./style";

const Why = ({ data }) => {
  return (
    <Container data-aos="zoom-in" $last={data?.last}>
      <div className="why-content">
        <img src={data?.icon} alt="" className="why-content__img" />
        <div className="why-content__title">{data?.title}</div>
        <p className="why-content__desc">{data?.desc}</p>
      </div>
    </Container>
  );
};

export default Why;
