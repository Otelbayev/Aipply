import React from "react";
import logo from "../../assets/icons/logo1.png";
import icon from "../../assets/icons/right-arrow.png";
import back from "../../assets/icons/left-arrow.png";
import { NavLink } from "react-router-dom";
import { Container } from "./style";

const Page3 = ({ setSteps, course, setCourse }) => {
  const data = [
    {
      id: 4,
      title: "Kompyuter Savodxonligi",
    },
    {
      id: 6,
      title: "Dasturlash Backend + AI",
    },
    {
      id: 7,
      title: "Dasturlash Frontend + AI",
    },
    {
      id: 2,
      title: "Grafik dizayn + AI",
    },
    {
      id: 8,
      title: "Interyer dizayn + AI",
    },
    {
      id: 9,
      title: "Moushn dizayn + AI",
    },
  ];

  return (
    <Container>
      <div className="content">
        <NavLink to="/">
          <img loading="lazy" className="content__logo" src={logo} />
        </NavLink>
        <div className="content__dark">Kursni tanlang!</div>

        <div className="content__course">
          {data.map((e) => (
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
              setSteps({
                1: false,
                2: true,
                3: false,
                4: false,
                5: false,
              });
            }}
            className="content__btns--back btn"
          >
            <img loading="lazy" style={{ width: "30px" }} src={back} alt="" />
          </button>
          <button
            onClick={() =>
              setSteps({
                1: false,
                2: false,
                3: false,
                4: true,
                5: false,
              })
            }
            className="content__btns--next btn"
          >
            Davom Etish{" "}
            <img loading="lazy" style={{ width: "30px" }} src={icon} alt="" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Page3;
