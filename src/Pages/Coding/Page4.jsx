import React, { useState } from "react";
import logo from "../../assets/icons/logo1.png";
import { NavLink } from "react-router-dom";
import { Checkbox } from "antd";
import Form from "../../components/Form";

const Page4 = ({ formData }) => {
  const [confirm, setConfirm] = useState(false);
  return (
    <div className="page4">
      <NavLink to="/">
        <img className="logo" src={logo} />
      </NavLink>

      <div className="title-page">Telefon raqamingizni qoldiring!</div>
      <p className="min-title">
        Biz Sizga qo‘ng‘iroq qilamiz va barcha savollaringizga javob beramiz!
      </p>
      <div className="checkbox-wrap">
        <Checkbox
          onChange={(e) => setConfirm(e.target.checked)}
          className="checkbox"
        >
          Men shaxsiy ma’lumotlarni qayta ishlash to‘g‘isidagi Nizom va
          Maxfiylik siyosatini o‘qib chiqtim va ularga roziman!
        </Checkbox>
      </div>
      <div className="footer-form">
        <Form
          confirm={confirm}
          formData={formData}
          border={"rgba(0,0,255,0.2)"}
        />
      </div>
    </div>
  );
};

export default Page4;
