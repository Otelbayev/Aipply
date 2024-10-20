import React, { useEffect, useState } from "react";
import {
  Container,
  Desc,
  Input,
  Title,
  Button,
  Wrap,
  BigTitle,
  ModalContent,
  IconTelegram,
} from "./style";
import { Modal, message } from "antd";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import telegram from "../../assets/icons/telegram.svg";

const token = import.meta.env.VITE_APP_API_TOKEN;

const Form = ({
  border,
  data,
  boxShadow,
  width,
  blur,
  background,
  grid,
  center,
  telegramImg,
  telegramName,
  telegramLink,
  telegramDesc,
  style,
  confirm,
  formData,
  color,
}) => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [course_id, setCourseId] = useState();

  const [nameStyle, setNameStyle] = useState(null);
  const [numStyle, setNumStyle] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { value } }) => {
    if (value.length >= 5 && value.length < 15) {
      setNum(value);
    }
  };

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  function getId(path) {
    const obj = {
      "/": 1,
      "/graphic-design": 2,
      "/no-coding": 3,
      "/computer-science": 4,
      "/foundation": 5,
      "/python": 6,
      "/reactjs": 7,
      "/in-ex-design": 8,
      "/motion-design": 9,
      "/bir-oyda-bir-veb-sayt": 11,
    };
    return obj[path];
  }

  useEffect(() => {
    setCourseId(getId(window.location.pathname));
  }, [window.location.pathname]);

  const handleFormSubmit = async (e) => {
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
            formData
              ? { ...formData, name: name, phone: num }
              : {
                  name: name,
                  phone: num,
                  course_id,
                  form_study_id: 1,
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
                content: "Malmotingiz muvofaqaiyatli jonatildi!",
              });
              setName("");
              setNum("");
              setLoading(false);
              setIsModalOpen(true);
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
        content: "Malmotingiz jonatishda xatolik!",
      });
    }
  };
  return (
    <React.Fragment>
      <Container
        $border={border}
        $boxShadow={boxShadow}
        width={width}
        $blur={blur}
        $background={background}
        onSubmit={handleFormSubmit}
        style={style}
      >
        <div>
          {data?.title && <Title color={color}>{data?.title}</Title>}
          {data?.big && (
            <BigTitle color={color} $center={center}>
              {data?.big}
            </BigTitle>
          )}
          {data?.desc && <Desc color={color}>{data?.desc}</Desc>}
        </div>
        <Wrap>
          {/* <Input
            style={nameStyle}
            $grid={grid}
            type="text"
            placeholder="Ismingiz"
            onFocus={() => setNameStyle(null)}
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <Input
            style={numStyle}
            onChange={handleChange}
            $grid={grid}
            type="tel"
            placeholder="Telefon raqamingiz"
            onFocus={() => {
              setNum("+998 ");
              setNumStyle(null);
            }}
            value={num}
          /> */}
          <Button
            // disabled={loading || confirm?.toString() ? !confirm : false}
            // $loading={loading}
            // style={
            //   confirm?.toString()
            //     ? !confirm
            //       ? { opacity: 0.5, cursor: "not-allowed" }
            //       : {}
            //     : {}
            // }
            // type="submit"
            onClick={() => navigate("/lid")}
          >
            {/* {loading ? "Yuborilmoqda..." : "Yuborish"} */}
            Bepul birinchi darsga yoziling
          </Button>
        </Wrap>
      </Container>
      <Modal
        centered
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <ModalContent>
          {telegramImg ? (
            <img src={telegramImg} alt="noimg" />
          ) : (
            <img src={telegram} alt="noimg" />
          )}
          <p>{telegramName || "Aipply Academy"}</p>
          <div className="desc">
            {telegramDesc ||
              "Aipply Academy - sun'iy intellektga ixtisoslashtirilgan zamonaviy kasblar o`quv markazi"}
          </div>
          <Button style={{ padding: 0 }}>
            <NavLink
              target="_blank"
              to={telegramLink || "https://t.me/aipplyacademy"}
            >
              Kanalga a'zo bolish! <IconTelegram />
            </NavLink>
          </Button>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default Form;
