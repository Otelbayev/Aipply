import styled from "styled-components";
import close from "../../assets/icons/close.svg?react";

export const Container = styled.div`
  border-bottom: 1px solid #dee5ed;
  backdrop-filter: blur(3px);
  @media (max-width: 700px) {
    border-bottom: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
    gap: 25px;
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        color: #2b62af;
      }
    }
  }
  @media (max-width: 700px) {
    ul {
      display: none;
    }
  }
`;

Content.Logo = styled.img`
  width: 131px;
  height: 60px;
  @media (max-width: 700px) {
    width: 120px;
    height: 50px;
  }
`;

export const Menu = styled.img`
  display: none;
  @media (max-width: 700px) {
    display: inline;
    width: 30px;
    height: 30px;
    margin-right: 40px;
    cursor: pointer;
  }
`;

export const Close = styled(close)`
  display: none;
  @media (max-width: 700px) {
    display: inline;
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-top: 20px;
  }
`;
