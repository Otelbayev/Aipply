import React, { useState } from "react";
import logo from "../../assets/icons/logo1.png";
import icon from "../../assets/icons/right-arrow.png";
import back from "../../assets/icons/left-arrow.png";
import { Radio } from "antd";
import { NavLink } from "react-router-dom";
import { Container } from "./style";

const Page2 = ({ setSteps, online, setOnline }) => {
  const [redStyle, setRedStyle] = useState({ margin: "30px 0" });
  const handleClick = () => {
    if (!online) {
      setRedStyle({
        margin: "30px 0",
        boxShadow: "0 4px 8px rgba(255, 0, 0, 0.5)",
        borderRadius: "10px",
      });
    } else {
      setSteps({
        1: false,
        2: false,
        3: true,
        4: false,
        5: false,
      });
    }
  };

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
        <div className="content__dark">O'qish shaklini tanlang!</div>

        <Radio.Group
          defaultValue={online}
          onChange={(e) => {
            setOnline(e.target.value);
            setRedStyle({
              margin: "30px 0",
            });
          }}
          buttonStyle="solid"
          value={online}
          style={redStyle}
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
              setRedStyle({
                margin: "30px 0",
              });
              setOnline(null);
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
          <button onClick={handleClick} className="content__btns--next btn">
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

export default Page2;
