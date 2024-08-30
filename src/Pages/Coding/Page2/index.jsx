import React from "react";
import logo from "../../../assets/icons/logo1.png";
import icon from "../../../assets/icons/iconnext.png";
import { Radio } from "antd";
import { NavLink } from "react-router-dom";
import { Container } from "../style";

const Page2 = ({ setSteps, online, setOnline }) => {
  return (
    <Container>
      <div className="content">
        <NavLink to="/">
          <img className="content__logo" src={logo} />
        </NavLink>
        <div className="content__title">
          O‘qishning qaysi shakli Siz uchun qulay?
        </div>

        <Radio.Group
          defaultValue={online}
          onChange={(e) => setOnline(e.target.value)}
          buttonStyle="solid"
          value={online}
          style={{ margin: "30px 0" }}
          size="large"
        >
          <Radio.Button value={1}>Offline (Toshkent)</Radio.Button>
          <Radio.Button value={2}>Online</Radio.Button>
        </Radio.Group>
        <div className="content__btns">
          <button
            onClick={() => {
              setSteps({
                1: true,
                2: false,
                3: false,
                4: false,
                5: false,
              });
            }}
            className="content__btns--back btn"
          >
            <img
              style={{ width: "30px", transform: "rotate(180deg)" }}
              src={icon}
              alt=""
            />{" "}
            Orqaga
          </button>
          <button
            onClick={() =>
              setSteps({
                1: false,
                2: false,
                3: true,
                4: false,
                5: false,
              })
            }
            className="content__btns--next btn"
          >
            Davom Etish <img style={{ width: "30px" }} src={icon} alt="" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Page2;
