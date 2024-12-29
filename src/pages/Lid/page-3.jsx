import React from "react";
import logo from "../../assets/icons/logo1.png";
import icon from "../../assets/icons/right-arrow.png";
import back from "../../assets/icons/left-arrow.png";
import { NavLink } from "react-router-dom";
import { Container } from "./style";

const Page3 = ({ setCurrentStep, course, setCourse, courseData }) => {
  return (
    <Container>
      <div className="content">
        <NavLink to="/">
          <img
            loading="lazy"
            effect="blur"
            className="content__logo"
            src={logo}
          />
        </NavLink>
        <div className="content__dark">
          Toshkentdagi offline kursni tanlang!
        </div>

        <div className="content__course">
          {courseData.map((e) => (
            <button
              key={e.id}
              onClick={() => setCourse(e.id)}
              className={`content__course__item ${e.id === course && "active"}`}
            >
              {e.title}
            </button>
          ))}
        </div>

        <div className="content__btns">
          <button
            onClick={() => {
              setCurrentStep(1);
            }}
            className="content__btns--back btn"
          >
            <img
              loading="lazy"
              effect="blur"
              style={{ width: "30px" }}
              src={back}
              alt=""
            />
          </button>
          <button
            onClick={() => setCurrentStep(4)}
            className="content__btns--next btn"
          >
            Davom Etish{" "}
            <img
              loading="lazy"
              effect="blur"
              style={{ width: "30px" }}
              src={icon}
              alt=""
            />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Page3;
