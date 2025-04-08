import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import totop from "../../assets/icons/totop.svg?react";

import telegram from "../../assets/icons/media/telegram.svg?react";
import instagram from "../../assets/icons/media/instagram.svg?react";
import facebook from "../../assets/icons/media/facebook.svg?react";
import youtube from "../../assets/icons/media/youtube.svg?react";

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
  @media (max-width: 980px) {
    height: auto;
  }
  .footer-bottom {
    padding: 10px 0;
    text-align: end;
    button {
      border: none;
      background: transparent;
      cursor: pointer;
      margin: 10px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 80px;
  border-bottom: 1px solid #e2e8f0;
  .footer-cer {
    align-self: flex-end;
  }

  .footer-cer img {
    width: 150px;
  }
  .footer-cer p {
    font-size: 16px;
    font-weight: 400;
    color: white;
    padding-top: 6px;
  }
  @media (max-width: 980px) {
    gap: 30px;
    padding: 50px 0 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    gap: 20px;
    padding: 30px 0 10px;
    margin-bottom: 10px;
    .footer-cer {
      align-self: flex-start;
      order: 2;
      padding: 10px 0;
      width: 100%;
    }
  }
  @media (max-width: 760px) {
    gap: 20px;
  }
`;

Content.Left = styled.div`
  iframe {
    width: 500px;
    height: 100%;
    border: none;
    border-radius: 4px;
  }
  @media (max-width: 1160px) {
    iframe {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    order: 1;
    iframe {
      width: 100%;
      height: 300px;
    }
  }
`;
Content.Right = styled.div`
  .footer-media {
    margin-top: 50px;
    display: flex;
    gap: 10px;
  }
  .footer-tel {
    font-size: 30px;
    font-weight: 700;
    padding-top: 10px;
    a {
      text-decoration: none;
      color: #fff;
      letter-spacing: 2px;
    }
  }
  @media (max-width: 800px) {
    order: 3;
    .footer-media {
      margin-top: 20px;
    }
  }
`;

Content.Title = styled.div`
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding-top: 10px;
`;

Content.Link = styled(NavLink)`
  text-decoration: none;
  display: block;
  color: #fff;
  margin: 15px 0;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;

  &:hover {
    color: #02a5e0;
  }
`;

export const Top = styled(totop)`
  width: 35px;
  height: 35px;
  background: #fff;
  border-radius: 3px;
`;

export const Icons = styled.div``;

const iconStyle = css`
  width: 35px;
  height: 35px;
  margin: 0 10px;
  color: red;
  &:active {
    transform: scale(0.9);
  }
`;

Icons.Telegram = styled(telegram)`
  ${iconStyle}
`;
Icons.Instagram = styled(instagram)`
  ${iconStyle}
`;
Icons.Fecebook = styled(facebook)`
  ${iconStyle}
`;
Icons.Youtube = styled(youtube)`
  ${iconStyle}
`;
