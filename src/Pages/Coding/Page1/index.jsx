import React from "react";
import logo from "../../../assets/icons/logo1.png";
import icon from "../../../assets/icons/iconnext.png";
import { NavLink } from "react-router-dom";
import { Container } from "../style";

const Page1 = ({ setSteps }) => {
  return (
    <Container>
      <div className="content">
        <NavLink to="/">
          <img className="content__logo" src={logo} />
        </NavLink>
        <div className="content__title">
          Dasturlash sohasini mukammal o‘rganishni xohlaysizmi?
        </div>
        <ul className="content__list">
          <div className="content__list__title">Bizda:</div>
          <li className="content__list__item">
            10 yil tajriba ega kuchli mentorlar
          </li>
          <li className="content__list__item">90% amaliyot</li>
          <li className="content__list__item">kurs davomida real loyihalar</li>
          <li className="content__list__item">sun’iy intellektni qo‘llash</li>
          <li className="content__list__item">sun’iy intellekt yaratish</li>
          <li className="content__list__item">daromad qilish ko’nikmalari</li>
          <li className="content__list__item">shaxsiy portfolio</li>
          <li className="content__list__item">sertifikat</li>
        </ul>
        <div className="content__title">To’liq kursga 40% chegirma!</div>
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
            Davom Etish <img style={{ width: "30px" }} src={icon} alt="" />
          </button>
        </div>
        <p className="content__call">Bizga qo'ng'iroq qiling.</p>
        <a className="content__phone" href="tel:+998771233300">
          +998771233300
        </a>
      </div>
    </Container>
  );
};

export default Page1;
