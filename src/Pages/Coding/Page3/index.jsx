import React from "react";
import logo from "../../../assets/icons/logo1.png";
import icon from "../../../assets/icons/iconnext.png";
import { NavLink } from "react-router-dom";
import { Radio } from "antd";
import { Container } from "../style";

const Page3 = ({ setSteps, course, setCourse }) => {
  return (
    <Container>
      <div className="content">
        <NavLink to="/">
          <img className="content__logo" src={logo} />
        </NavLink>
        <div className="content__title">
          Siz qiziqqan dasturlash kurslarini belgilashingiz mumkin!
        </div>
        <ul className="content__list">
          <Radio.Group
            defaultValue={course}
            onChange={(e) => setCourse(e.target.value)}
            buttonStyle="solid"
            value={course}
            size="large"
          >
            <div>
              <Radio value={4}>
                <li className="content__list__item">Coding foundation</li>
              </Radio>
            </div>
            <div>
              <Radio value={3}>
                <li className="content__list__item">Nocode web/mobile</li>
              </Radio>
            </div>
            <div>
              <Radio value={11}>
                <li className="content__list__item">
                  Nocode Bir oyda bir web-sayt
                </li>
              </Radio>
            </div>
            <div>
              <Radio value={7}>
                <li className="content__list__item">Frontend React.js +AI</li>
              </Radio>
            </div>
            <div>
              <Radio value={6}>
                <li className="content__list__item">
                  Python Jango TensorFlow +AI
                </li>
              </Radio>
            </div>
          </Radio.Group>
        </ul>

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
                3: false,
                4: true,
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

export default Page3;
