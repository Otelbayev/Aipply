import React from "react";
import { Container } from "./style";

const Mentor = ({ data }) => {
  return (
    <Container data-aos="zoom-in">
      <div className="mentor-content">
        <div className="mentor-content__top">
          <div className="mentor-content__top__img">
            <img src={data?.img} alt="" />
          </div>
          <div>
            <div className="mentor-content__top__name">{data?.name}</div>
            <div className="mentor-content__top__job">Mentor: {data?.job}</div>
          </div>
        </div>
        <div className="mentor-content__desc">{data?.desc}</div>
      </div>
    </Container>
  );
};

export default Mentor;
