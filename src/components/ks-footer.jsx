import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #003366; /* Blue background */
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  font-family: "Inter", sans-serif;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 30px 15px;
  }
`;

const Name = styled.h1`
  font-family: "Inter", sans-serif;
  margin: 0 0 10px;
`;

const Phone = styled.h2`
  font-family: "Inter", sans-serif;
  margin: 20px 0;
`;

const Company = styled.p`
  font-family: "Inter", sans-serif;
  margin: 0;
  line-height: 1.6;
`;

const SocialIcons = styled.div`
  margin: 25px 0 10px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: #fff;
    font-size: 24px;
    transition: transform 0.3s, color 0.3s;

    &:hover {
      color: #ffcc00;
      transform: scale(1.2);
    }
  }
`;

const Copyright = styled.p`
  font-family: "Inter", sans-serif;
  margin-top: 10px;
  font-size: 0.85em;
  color: #ccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Name>Aipply Academy</Name>
      <Phone>+998 77 123 33 00</Phone>
      <Company>Toshkent, Shayxontohur tumani, Bogʻkoʻcha dahasi, 3</Company>

      <SocialIcons>
        <a
          href="https://www.instagram.com/aipply.academy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://t.me/aipplyacademy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://www.facebook.com/aipply"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.youtube.com/channel/UCzueY2lK3VYGPgC6AWy2HNQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </SocialIcons>

      <Copyright>
        © “Aipply Academy”, 2025 - Barcha huquqlar himoyalangan.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
