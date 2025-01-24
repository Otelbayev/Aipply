import React from "react";
import logo from "../../assets/icons/logo1.png";
import { NavLink } from "react-router-dom";
import { Container } from "./style";
import ins from "../../assets/icons/ins.png";
import web from "../../assets/icons/web.png";

const Page5 = () => {
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
        <div className="content__title">
          Siz muvaffaqiyatli ro'yxatdan o'tdingiz!
        </div>

        <div className="content__min-title">
          Bizning rasmiy sahifalarimiz orqali zamonaviy kasblar bo'yicha
          qiziqarli va foydali ma'lumotlarni olishingiz mumkin!
        </div>
        <br />
        <br />
        <NavLink to="/" className="content__link">
          <img
            loading="lazy"
            effect="blur"
            src={web}
            alt=""
            className="content__link__icon"
          />
          <span className="content__link__title">Rasmiy web sahifamiz</span>
        </NavLink>
        <NavLink
          to="https://www.instagram.com/aipply.academy/"
          className="content__link"
        >
          <img
            loading="lazy"
            effect="blur"
            src={ins}
            alt=""
            className="content__link__icon"
          />
          <span className="content__link__title">Instagram sahifamiz</span>
        </NavLink>
      </div>
    </Container>
  );
};

export default Page5;
