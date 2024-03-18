import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import totop from "../../assets/icons/totop.svg?react";

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
  align-items: flex-start;
  gap: 80px;
  padding: 80px;
  border-bottom: 1px solid #e2e8f0;
  @media (max-width: 980px) {
    gap: 30px;
    padding: 50px 0 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 760px) {
    gap: 20px;
  }
  @media (max-width: 650px) {
    flex-direction: column-reverse;
    gap: 10px;
    padding: 30px 0 10px;
    margin-bottom: 10px;
  }
`;

Content.Left = styled.div`
  @media (max-width: 650px) {
    width: 100%;
  }
`;
Content.Right = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 80px;
  @media (max-width: 980px) {
    gap: 30px;
  }
`;

Content.WrapMap = styled(YMaps)``;

Content.Map = styled(Map)`
  width: 500px;
  height: 300px;
  @media (max-width: 980px) {
    width: 400px;
  }
  @media (max-width: 760px) {
    width: 300px;
    height: 250px;
  }
  @media (max-width: 650px) {
    width: 85%;
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
`;
