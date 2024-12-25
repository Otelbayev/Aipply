import React from "react";
import { Container } from "./style";

const InCourse = ({ video, project }) => {
  return (
    <Container>
      <div className="container">
        <div className="title-dark tt" data-aos="fade-right">
          Kurs davomida o’quvchilarimiz qilgan ishlar
        </div>
        {video ? (
          <>
            <video autoPlay loop muted src={""} />
          </>
        ) : (
          project?.length &&
          project.map((e, index) => (
            <img
              key={index}
              loading="lazy"
              effect="blur"
              src={e}
              data-aos="fade-up"
              alt=""
              
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default InCourse;
