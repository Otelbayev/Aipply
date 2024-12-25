import React from "react";
import styled from "styled-components";
import { PiDotsThree } from "react-icons/pi";

const CourseTime = ({ month }) => {
  return (
    <div className="container" data-aos="fade-up">
      <Container>
        <div className="course-time">
          <div className="course-time__icon">
            <PiDotsThree
              size={80}
              style={{
                color: "#0000B0",
              }}
            />
          </div>
          <div className="course-time__info">
            <div className="course-time__item">
              <div className="course-time__item--count title">{month} oy</div>
              <div className="course-time__item--line"></div>
              <div className="course-time__item--title">Davomiyligi</div>
            </div>
            <div className="course-time__item">
              <div className="course-time__item--count title">3 kun</div>
              <div className="course-time__item--line"></div>
              <div className="course-time__item--title">Haftada</div>
            </div>
            <div className="course-time__item">
              <div className="course-time__item--count title">2 soat</div>
              <div className="course-time__item--line"></div>
              <div className="course-time__item--title">Dars soati</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CourseTime;

const Container = styled.div`
  padding-bottom: 100px;
  .course-time {
    &__icon {
      text-align: center;
    }
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
    }
    &__item {
      text-align: center;
      width: 100%;
      &--count {
        font-size: 50px;
        font-weight: 700;
      }
      &--line {
        width: 100%;
        height: 1px;
        background-color: #9b9b9b;
        margin: 15px 0;
      }
      &--title {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 800px) {
    padding-bottom: 50px;
    .course-time {
      &__info {
        flex-direction: column;
        padding: 0 20px;

      }
      &__item {
        &--count {
          font-size: 45px;
        }
      }
    }
  }
`;
