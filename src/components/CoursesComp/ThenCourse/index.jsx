import React from "react";
import { Container } from "./style";

const ThenCourse = ({ data }) => {
  return (
    <Container>
      <div className="title-dark then" data-aos="fade-right">
        Kursni tugatib qayerlarda ishlashingiz mumkin
      </div>
      <div className="then-body">
        {data?.length &&
          data.map(({ icon, id, title }) => (
            <div key={id} className="then-body__item" data-aos={`fade-left`}>
              <img src={icon} alt="" className="then-body__item__img" />
              <div className="then-body__item__title">{title}</div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default ThenCourse;
