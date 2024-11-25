import React, { useState } from "react";
import logo from "../../assets/icons/logo1.png";
import back from "../../assets/icons/left-arrow.png";
import icon from "../../assets/icons/right-arrow.png";
import { NavLink } from "react-router-dom";
import { Checkbox, message } from "antd";
import { Container } from "./style";
import axios from "axios";

const Page4 = ({ formData, setSteps }) => {
  const token = import.meta.env.VITE_APP_API_TOKEN;

  const [nameStyle, setNameStyle] = useState(null);
  const [numStyle, setNumStyle] = useState(null);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { value } }) => {
    if (value.length >= 5 && value.length < 15) {
      setNum(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (num.length === 14 && name !== "") {
        setLoading(true);
        message.loading({
          key: "key",
          content: "Malmotingiz yuborilmoqda!",
        });
        await axios
          .post(
            "https://admin.aipply.uz/api/create_order",
            { ...formData, name: name, phone: num },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              message.success({
                key: "key",
                content: "Malmotingiz muvofaqaiyatli jo'natildi!",
              });
              setName("");
              setNum("");
              setLoading(false);
              setSteps({
                1: false,
                2: false,
                3: false,
                4: false,
                5: true,
              });
            } else {
              setLoading(false);
              throw new Error();
            }
          });
      } else {
        num.length !== 14 &&
          setNumStyle({
            border: "1px solid red",
            background: "rgba(255, 0, 0, 0.1)",
          });
        name === "" &&
          setNameStyle({
            border: "1px solid red",
            background: "rgba(255, 0, 0, 0.1)",
          });
      }
    } catch (error) {
      message.error({
        key: "key",
        content: "Malmotingiz jo'natishda xatolik!",
      });
    }
  };

  return (
    <Container>
      <div className="content">
        <NavLink to="/">
          <img loading="lazy" className="content__logo" src={logo} />
        </NavLink>

        <div className="content__title">Telefon raqamingizni qoldiring!</div>
        <p className="content__min-title">
          Biz Sizga qo‘ng‘iroq qilamiz va barcha savollaringizga javob beramiz!
        </p>
        <form className="content__form">
          <input
            type="text"
            className="content__form__input"
            style={nameStyle}
            placeholder="Ismingiz"
            onFocus={() => setNameStyle(null)}
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <input
            className="content__form__input"
            style={numStyle}
            onChange={handleChange}
            type="tel"
            placeholder="Telefon raqamingiz"
            onFocus={() => {
              setNum("+998 ");
              setNumStyle(null);
            }}
            value={num}
          />
          {/* <input
            type="submit"
            className="content__form__button"
            value={"Yuborish"}
          /> */}
        </form>
        <div className="content__btns">
          <button
            onClick={() => {
              setSteps({
                1: false,
                2: false,
                3: true,
                4: false,
                5: false,
              });
            }}
            className="content__btns--back btn"
          >
            <img loading="lazy" style={{ width: "30px" }} src={back} alt="" />
          </button>
          <button onClick={handleSubmit} className="content__btns--next btn">
            Yuborish{" "}
            <img loading="lazy" style={{ width: "30px" }} src={icon} alt="" />
          </button>
        </div>
        <div className="content__checkbox-wrap">
          <Checkbox checked={true} className="content__checkbox-wrap__checkbox">
            <NavLink target="_blank" to="/privacy">
              Men shaxsiy ma’lumotlarni qayta ishlash to‘g‘isidagi Nizom va
              Maxfiylik siyosatini o‘qib chiqtim va ularga roziman!
            </NavLink>
          </Checkbox>
        </div>
      </div>
    </Container>
  );
};

export default Page4;
