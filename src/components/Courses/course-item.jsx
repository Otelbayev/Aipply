import React from "react";
import { useNavigate } from "react-router-dom";

const CourseItem = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="course" data-aos="zoom-in">
      <div className="course__title title">{data.title}</div>
      <img
        loading="lazy"
        effect="blur"
        src={data.img}
        className="course__icon"
        alt=""
      />
      <div className="course__desc">{data.desc}</div>
      <div className="course__month title">{data.month} oy + sertifikat</div>
      <button
        className="btn course__button btn"
        onClick={() => navigate(`/course/${data.path}`)}
      >
        Batafsil
      </button>
    </div>
  );
};

export default CourseItem;
