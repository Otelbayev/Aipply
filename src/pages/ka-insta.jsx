import React from "react";
import styled from "styled-components";
import { BsArrowDown, BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

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
  border: 3px solid;
  border-image: linear-gradient(
      45deg,
      #feda75,
      #fa7e1e,
      #d62976,
      #962fbf,
      #4f5bd5
    )
    1;
  box-shadow: 0 4px 15px rgba(255, 0, 150, 0.4);
  padding: 40px 30px;
  max-width: 480px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;

  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(
    45deg,
    #feda75,
    #fa7e1e,
    #d62976,
    #962fbf,
    #4f5bd5
  );
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(
    45deg,
    #feda75,
    #fa7e1e,
    #d62976,
    #962fbf,
    #4f5bd5
  );
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Arrows = styled.div`
  font-size: 40px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 0 10px;

  .arrow-1 {
    color: #feda75;
  } /* Yellow */
  .arrow-2 {
    color: #fa7e1e;
  } /* Orange */
  .arrow-3 {
    color: #d62976;
  } /* Pink */
  .arrow-4 {
    color: #962fbf;
  } /* Purple */
  .arrow-5 {
    color: #4f5bd5;
  } /* Blue */

  & > span {
    transform: rotate(var(--rotate));
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 0 10px;
  }
`;

const Button = styled.a`
  font-family: "Inter", sans-serif;
  display: inline-flex;
  align-items: center;
  background: linear-gradient(
    45deg,
    #feda75,
    #fa7e1e,
    #d62976,
    #962fbf,
    #4f5bd5
  );
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 10px;
  text-decoration: none;

  svg {
    margin-left: 8px;
  }
`;

const SubscribeCard = () => {
  return (
    <Container>
      <Card>
        <Title>Ajoyib! Ochiq darsda ko'rishguncha!</Title>
        <Subtitle>
          Bizning rasmiy sahifamizni ko'rib chiqishingiz mumkin!
        </Subtitle>
        <Arrows>
          <BsArrowDownRight className="arrow-1" />
          <BsArrowDownRight className="arrow-2" />
          <BsArrowDown className="arrow-3" />
          <BsArrowDownLeft className="arrow-4" />
          <BsArrowDownLeft className="arrow-5" />
        </Arrows>
        <Button href="https://www.instagram.com/aipply.academy/">
          OBUNA BO‘LISH <FaInstagram size={30} />
        </Button>
      </Card>
    </Container>
  );
};

export default SubscribeCard;
