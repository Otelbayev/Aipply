import React, { useState } from "react";
import { Container, Desc, Input, Title, Button, Wrap, BigTitle } from "./style";
import { message } from "antd";
import axios from "axios";

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
}) => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  const [nameStyle, setNameStyle] = useState(null);
  const [numStyle, setNumStyle] = useState(null);

  const handleChange = ({ target: { value } }) => {
    if (value.length >= 5 && value.length < 15) {
      setNum(value);
    }
  };

  const [messageApi, contextHolder] = message.useMessage();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (num.length === 14 && name !== "") {
        await axios
          .post(
            "https://admin.aipply.uz/api/create_order",
            {
              name: name,
              phone: num,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              messageApi.success("Malmotingiz muvofaqaiyatli jonatildi!");
              setName("");
              setNum("");
            } else {
              messageApi.error("Malmotingiz jonatishda xatolik!");
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
      console.error("Login failed", error);
    }
  };
  return (
    <Container
      $border={border}
      $boxShadow={boxShadow}
      width={width}
      $blur={blur}
      $background={background}
      onSubmit={handleFormSubmit}
    >
      <div>
        <Title>{data?.title && data?.title}</Title>
        <BigTitle $center={center}>{data?.big && data?.big}</BigTitle>
        <Desc>{data?.desc && data?.desc}</Desc>
      </div>
      <Wrap>
        <Input
          style={nameStyle}
          $grid={grid}
          type="text"
          placeholder="Isminginz"
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
        />
        {contextHolder}
        <Button type="submit">Yuborish</Button>
      </Wrap>
    </Container>
  );
};

export default Form;
