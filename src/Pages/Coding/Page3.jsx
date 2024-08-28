import React from "react";
import logo from "../../assets/icons/logo1.png";
import { Button } from "../../components/Form/style";
import icon from "../../assets/icons/iconnext.png";
import { NavLink } from "react-router-dom";
import { Radio } from "antd";

const Page3 = ({ setSteps, course, setCourse }) => {
  return (
    <div className="page1">
      <NavLink to="/">
        <img className="logo" style={{ height: "100px" }} src={logo} />
      </NavLink>
      <div className="title">
        Siz qiziqqan dasturlash kurslarini belgilashingiz mumkin!
      </div>
      <ul className="list">
        <Radio.Group
          size="large"
          onChange={(e) => setCourse(e.target.value)}
          value={course}
        >
          <Radio value={4}>
            <div>
              <li>Coding foundation</li>
            </div>
          </Radio>
          <Radio value={3}>
            <div>
              <li>Nocode web/mobile</li>
            </div>
          </Radio>
          <div>
            <Radio value={11}>
              <li>Nocode Bir oyda bir web-sayt</li>
            </Radio>
          </div>
          <div>
            <Radio value={7}>
              <li>Frontend React.js +AI</li>
            </Radio>
          </div>
          <div>
            <Radio value={6}>
              <li>Python Jango TensorFlow +AI</li>
            </Radio>
          </div>
        </Radio.Group>
      </ul>

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
            2: false,
            3: false,
            4: true,
          })
        }
      >
        Davom Etish <img style={{ width: "30px" }} src={icon} alt="" />
      </Button>
    </div>
  );
};

export default Page3;
