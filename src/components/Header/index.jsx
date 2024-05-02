import React, { useState } from "react";
import { Close, Content, Menu, Container } from "./style";
import logo from "../../assets/icons/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../Generics";
import menu from "../../assets/icons/menu.png";
import { useMenuContext } from "../../context/MenuContext";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useMenuContext();
  return (
    <Container>
      <div className="root-container">
        <div className="root-wrapper">
          <Content>
            <Menu
              src={menu}
              onClick={() => setIsOpen(!isOpen)}
              alt="menu of sidebar"
            />
            <NavLink to="/">
              <Content.Logo src={logo} alt="Logo Aipply Academy" />
            </NavLink>
            <ul>
              <li>
                <NavLink to="/#about">Biz haqimizda</NavLink>
              </li>
              <li>
                <NavLink to="/#course">Kurslar</NavLink>
              </li>
              <li>
                <NavLink to="/#contact">Kontakt</NavLink>
              </li>
            </ul>
            <Button onClick={() => navigate("/#course")} $borderRadius={"50px"}>
              Kurslarni ko’rish
            </Button>
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Header;
