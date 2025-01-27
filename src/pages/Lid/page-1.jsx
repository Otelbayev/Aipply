import React from "react";
import logo from "../../assets/icons/logo1.png";
import icon from "../../assets/icons/right-arrow.png";
import { Container } from "./style";
import { NavLink } from "react-router-dom";

const Page1 = ({ setCurrentStep }) => {
  return (
    <Container>
      <div className="abs"></div>
      <div className="content">
        <NavLink to="/">
          <img
            loading="lazy"
            effect="blur"
            className="content__logo"
            src={logo}
          />
        </NavLink>
        <div className="content__title">
       
          Daromadli kelajak sari qadam tashlang!
        </div>

        <ul className="content__list">
          <li className="content__list__item">
            -Sun’iy intellektni professional qo‘llash!
          </li>
          <li className="content__list__item">-Daromad qilish sirlari!</li>
          <li className="content__list__item">-Real loyiha va portfolio!</li>
          <li className="content__list__item">-Kuchli mentorlar!</li>
          <li className="content__list__item">-Ish topishda yordam beramiz!</li>
          <li className="content__list__item">-Sertifikat!</li>
          <li className="content__list__item">-Bepul Coworking wifi!</li>
        </ul>
        <div className="content__btns">
          <button
            className="btn content__btns--next"
            onClick={() => setCurrentStep(3)}
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

export default Page1;
