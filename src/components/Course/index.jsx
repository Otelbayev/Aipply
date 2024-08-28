import React from "react";
import { Container } from "./style";
import { Button } from "../Form/style";
import { useNavigate } from "react-router-dom";

const Course = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Container data-aos="zoom-in">
      <div className="course-content">
        <div>
          <div className="image-container">
            <div className="course-content__title">{data?.title}</div>
            <img className="course-content__img" src={data?.img} alt="" />
          </div>
          <div className="course-content__data">
            {/* <div className="course-content__data__item">
              <span>Kurs davomiyligi:</span>
              {data?.kurs}
            </div>
            <div
              style={{ padding: "5px 0" }}
              className="course-content__data__item"
            >
              <span>Dars davomiyligi:</span>
              {data?.dars}
            </div>
            <div className="course-content__data__item">
              <span>Nimalar o'rgatiladi:</span>
              {data?.tech}
            </div> */}
            {/* <div className="course-content__data__item">
              <span>Slogan:</span>
              {data?.slogan}
            </div> */}
            <div className="course-content__data__motiv">{data?.slogan}</div>
            <div className="course-content__data__oy">
              {data?.kurs} + sertifikat
            </div>
          </div>
        </div>
        <Button onClick={() => navigate(`/${data?.path}`)}>Batafsil</Button>
      </div>
    </Container>
  );
};

export default Course;
