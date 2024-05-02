import React, { useState } from "react";
import Footer from "./../Footer";
import Header from "./../Header";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Close } from "../Header/style";
import { useMenuContext } from "../../context/MenuContext";

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const Ul = styled.ul`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
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
      list-style-type: none;
      a {
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        color: #fff;
      }
    }
  }
`;

const Universal = () => {
  const [isOpen, setIsOpen] = useMenuContext();
  return (
    <Container>
      <Ul $isOpen={isOpen.toString()}>
        <li>
          <NavLink
            onClick={() => {
              setIsOpen(false);
            }}
            to="/#about"
          >
            Biz haqimizda
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#course"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Kurslar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#contact"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Kontakt
          </NavLink>
        </li>
        <li>
          <Close onClick={() => setIsOpen(false)} />
        </li>
      </Ul>
      <div className="content-all">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Container>
  );
};

export default Universal;
