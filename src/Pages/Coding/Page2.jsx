import React from "react";
import logo from "../../assets/icons/logo1.png";
import { Button } from "../../components/Form/style";
import icon from "../../assets/icons/iconnext.png";
import { Radio } from "antd";
import { NavLink } from "react-router-dom";

const Page2 = ({ setSteps, online, setOnline }) => {
  return (
    <div className="page2">
      <NavLink to="/">
        <img className="logo"  src={logo} />
      </NavLink>
      <div className="title-page">O‘qishning qaysi shakli Siz uchun qulay?</div>

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
            3: true,
            4: false,
          })
        }
      >
        Davom Etish <img style={{ width: "30px" }} src={icon} alt="" />
      </Button>
    </div>
  );
};

export default Page2;
