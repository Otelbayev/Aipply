import React, { useRef, useState } from "react";
import logo from "../../assets/icons/logo1.png";
import back from "../../assets/icons/left-arrow.png";
import icon from "../../assets/icons/right-arrow.png";
import { NavLink } from "react-router-dom";
import { Checkbox, message } from "antd";
import { Container } from "./style";
import axios from "axios";
import ReactPixel from "react-facebook-pixel";

const Page4 = ({ formData, setCurrentStep, selectedCourse }) => {
  const token = import.meta.env.VITE_APP_API_TOKEN;
  const pathName = window.location.pathname;
  const [nameStyle, setNameStyle] = useState(null);
  const [numStyle, setNumStyle] = useState(null);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const inputRef = useRef(null);

  const handleChange = ({ target: { value } }) => {
    const cleanedValue = "+998 " + value.slice(5).replace(/\D/g, "");

    if (cleanedValue.length <= 13) {
      setNum(cleanedValue);
    }
    if (value.length >= 5 && value.length < 15) {
      setNum(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (num.length === 14 && name !== "") {
        message.loading({
          key: "key",
          content: "Malmotingiz yuborilmoqda!",
        });
        await axios
          .post(
            "https://admin.aipply.uz/api/create_order",
            {
              ...formData,
              name: name,
              phone: num,
              flyer: pathName === "/flyer" ? 1 : 0,
            },
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
              ReactPixel.track("Lead", {
                name: name,
                phone: num,
                course: selectedCourse.title,
              });
              setName("");
              setNum("");
              setCurrentStep(5);
            } else {
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

  const handleFocus = () => {
    setNumStyle(null);
    if (!num.startsWith("+998 ")) {
      setNum("+998 ");
    }

    setTimeout(() => {
      const input = inputRef.current;
      if (input) {
        input.setSelectionRange(5, 5);
      }
    }, 0);
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
          {/* <input
            className="content__form__input"
            style={numStyle}
            onChange={handleChange}
            type="tel"
            placeholder="Telefon raqamingiz"
            onFocus={() => {
              setNumStyle(null);
              setNum("+998 ");
            }}
            value={num}
          /> */}
          <input
            ref={inputRef}
            className="content__form__input"
            style={numStyle}
            type="tel"
            placeholder="Telefon raqamingiz"
            onFocus={handleFocus}
            onChange={handleChange}
            value={num}
          />
        </form>
        <div className="content__btns">
          <button
            onClick={() => {
              setCurrentStep(3);
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
          <button onClick={handleSubmit} className="content__btns--next btn">
            Yuborish{" "}
            <img
              loading="lazy"
              effect="blur"
              style={{ width: "30px" }}
              src={icon}
              alt=""
            />
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
