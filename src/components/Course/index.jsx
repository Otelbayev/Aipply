import React from "react";
import { Container } from "./style";
import { Button } from "../Form/style";
import { useNavigate } from "react-router-dom";

const Course = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Container data-aos="zoom-in">
      <div className="course-title">{data?.title}</div>
      <img className="course-img" src={data?.img} alt="" />
      <div className="course-desc">{data?.slogan}</div>
      <div className="course-date">{data?.kurs} + sertifikat</div>
      <Button onClick={() => navigate(`/${data?.path}`)}>Batafsil</Button>
    </Container>
  );
};

export default Course;
