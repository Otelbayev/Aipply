import React from "react";
import styled from "styled-components";
import arrow from "../assets/images/arrow.png";
import { FaTelegramPlane } from "react-icons/fa";
import KsFooter from "../components/ks-footer";

const Container = styled.div`
  min-height: 100dvh;
  background: linear-gradient(180deg, #f0f8ff 0%, #f0f8ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 80%;
  }

  @media (max-width: 768px) {
    background: linear-gradient(135deg, #d2e6f5, #c0d5e8);
  }
`;

const Card = styled.div`
  background: white;
  border: 3px solid #4a90e2;
  border-radius: 45px;
  padding: 40px;
  max-width: 850px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 480px) {
    padding: 50px 30px;
  }
`;

const Title = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 60px;
  font-weight: 700;
  color: #0b3d91;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  text-align: center;
  width: 80%;
  color: #3a6ea5;
  line-height: 1.5;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 15px;
    width: 100%;
  }
`;

const Button = styled.a`
  font-family: "Inter", sans-serif;
  display: inline-flex;
  align-items: center;
  background: #4a90e2;
  color: white;
  font-weight: 600;
  padding: 15px 70px;
  font-size: 18px;
  border-radius: 20px;
  text-decoration: none;
  transition: background 0.3s ease;
  box-shadow: 3px 3px 10px #4a90e2;
  margin-top: 20px;
  &:hover {
    background: #357abd;
  }

  svg {
    margin-left: 8px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 40px;
  }
`;

const SubscribeCard = () => {
  return (
    <>
      <Container>
        <Card>
          <Title>Oxirgi qadam qoldi!</Title>
          <Subtitle>
            Ochiq darsda qatanashish uchun quyidagi tugmani bosib yopiq kanalga
            obuna bo‘ling!
          </Subtitle>
          <div className="arrow">
            <img src={arrow} alt="" />
          </div>
          <Button href={"https://t.me/+H9RDHyooSOM5NGE6"}>
            OBUNA BO‘LISH <FaTelegramPlane size={35} />
          </Button>
        </Card>
      </Container>
      <KsFooter />
    </>
  );
};

export default SubscribeCard;
