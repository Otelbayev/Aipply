import React from "react";
import logo from "../../assets/images/img.jpg";
import icon from "../../assets/icons/right-arrow.png";
import { Container } from "./style";

const Page1 = ({ setSteps }) => {
  return (
    <Container>
      <div className="abs"></div>
      <div className="content">
        <div className="content__title">
          Zamonaviy kasblarni mukammal o'rganing!
        </div>
        <div className="content__profile">
          <img
            loading="lazy"
            className="content__profile__logo"
            src={logo}
            alt=""
          />
          <div className="content__profile__name t-dark">Aipply Academy</div>
        </div>
        <ul className="content__list">
          <li className="content__list__item">-Kasbda daromad qilish;</li>
          <li className="content__list__item">
            -Kasbda sun’iy intellektni qo‘llash;
          </li>
          <li className="content__list__item">-Kuchli mentorlar;</li>
          <li className="content__list__item">-Real loyiha va portfolio;</li>
          <li className="content__list__item">-Ish topishda yordam beramiz;</li>
          <li className="content__list__item">-Sertifikat</li>
          <li className="content__list__item">-Bepul Coworking wifi!</li>
        </ul>
        <div className="content__btns">
          <button
            className="btn content__btns--next"
            onClick={() =>
              setSteps({
                1: false,
                2: true,
                3: false,
                4: false,
                5: false,
              })
            }
          >
            Davom Etish{" "}
            <img loading="lazy" style={{ width: "30px" }} src={icon} alt="" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Page1;
