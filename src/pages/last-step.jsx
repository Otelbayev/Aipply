import React from "react";
import styled from "styled-components";
import { BsArrowDown, BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Container = styled.div`
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0f8ff 0%, #f0f8ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  @media (max-width: 768px) {
    background: linear-gradient(135deg, #d2e6f5, #c0d5e8);
  }
`;

const Card = styled.div`
  background: white;
  border: 3px solid #4a90e2;
  border-radius: 20px;
  padding: 40px 30px;
  max-width: 480px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #0b3d91;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #3a6ea5;
  line-height: 1.5;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Arrows = styled.div`
  font-size: 40px;
  color: #4a90e2;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 0 10px;

  & > span {
    transform: rotate(var(--rotate));
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 0 10px;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  background: #4a90e2;
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #357abd;
  }

  svg {
    margin-left: 8px;
  }
`;

const SubscribeCard = () => {
  return (
    <Container>
      <Card>
        <Title>Oxirgi qadam qoldi!</Title>
        <Subtitle>
          Ochiq darsda qatanashish uchun quyidagi tugmani bosib yopiq kanalga
          obuna bo‘ling!
        </Subtitle>
        <Arrows>
          <BsArrowDownRight />
          <BsArrowDownRight />
          <BsArrowDown />
          <BsArrowDownLeft />
          <BsArrowDownLeft />
        </Arrows>
        <Button href="https://t.me/aipplyacademy">
          OBUNA BO‘LISH <FaTelegramPlane size={30} />
        </Button>
      </Card>
    </Container>
  );
};

export default SubscribeCard;
