import React from "react";
import logo from "../../assets/icons/logo1.png";
import { Button } from "../../components/Form/style";
import icon from "../../assets/icons/iconnext.png";
import { NavLink } from "react-router-dom";

const Page1 = ({ setSteps }) => {
  return (
    <div className="page1">
      <NavLink to="/">
        <img className="logo" style={{ height: "100px" }} src={logo} />
      </NavLink>
      <div className="title">
        Dasturlash sohasini mukammal o‘rganishni xohlaysizmi?
      </div>
      <ul className="list">
        <li>10 yil tajriba ega kuchli mentorlar </li>
        <li>90% amaliyot</li>
        <li>kurs davomida real loyihalar</li>
        <li>sun’iy intellektni qo‘llash</li>
        <li>sun’iy intellekt yaratish</li>
        <li>daromad qilish ko’nikmalari</li>
        <li>shaxsiy portfolio</li>
        <li>sertifikat</li>
      </ul>
      <div className="title">To’liq kursga 40% chegirma!</div>
      <Button
        style={{
          width: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
        onClick={() =>
          setSteps({
            1: false,
            2: true,
            3: false,
            4: false,
          })
        }
      >
        Davom Etish <img style={{ width: "30px" }} src={icon} alt="" />
      </Button>
    </div>
  );
};

export default Page1;
