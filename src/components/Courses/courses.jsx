import React from "react";
import { Container } from "./courses.style";
import { courseData } from "../../mock/course";
import CourseItem from "./course-item";
import { useScrollContext } from "../../context/scroll-context";

const Courses = () => {
  const { courseRef } = useScrollContext();
  return (
    <Container className="container">
      <div className="courses-title title">Mavjud kurslar</div>
      <div className="courses" ref={courseRef}>
        {courseData.map((e, index) => (
          <CourseItem data={e} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Courses;
