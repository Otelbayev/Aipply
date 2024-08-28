import React from "react";
import logo from "../../assets/icons/logo1.png";
import { NavLink } from "react-router-dom";
import { Checkbox } from "antd";
import Form from "../../components/Form";

const Page4 = () => {
  return (
    <div className="page4">
      <NavLink to="/">
        <img className="logo" style={{ height: "100px" }} src={logo} />
      </NavLink>
      <div className="title">Telefon raqamingizni qoldiring!</div>
      <p className="min-title">
        Biz Sizga qo‘ng‘iroq qilamiz va barcha savollaringizga javob beramiz!
      </p>
      <div className="page4-footer">
        <Checkbox className="checkbox">
          Men shaxsiy ma’lumotlarni qayta ishlash to‘g‘isidagi Nizom va
          Maxfiylik siyosatini o‘qib chiqtim va ularga roziman!
        </Checkbox>
        <div className="page4-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Page4;
