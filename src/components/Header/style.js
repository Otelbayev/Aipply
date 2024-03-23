import styled from "styled-components";
import close from "../../assets/icons/close.svg?react";
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
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      width: 100%;
      height: 100dvh;
      flex-direction: column;
      justify-content: center;
      background-color: #2b62af;
      transition: 0.5s;
      transform: ${({ $isOpen }) =>
        $isOpen === "true" ? "translateY(0)" : "translateY(-150%)"};
      li {
        a {
          color: #fff;
        }
      }
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

export const Container = styled.div`
  border-bottom: 1px solid #dee5ed;
  backdrop-filter: blur(3px);
  padding: 10px 0;
  position: relative;
  @media (max-width: 700px) {
    border-bottom: none;
  }
`;
