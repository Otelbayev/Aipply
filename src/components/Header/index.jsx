import React, { useState } from "react";
import { Close, Content, Menu, Container } from "./style";
import logo from "../../assets/icons/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../Generics";
import menu from "../../assets/icons/menu.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <div className="root-container">
        <div className="root-wrapper">
          <Content $isOpen={isOpen.toString()}>
            <Menu
              src={menu}
              onClick={() => setIsOpen(true)}
              alt="menu of sidebar"
            />
            <NavLink to="/">
              <Content.Logo src={logo} alt="Logo Aipply Academy" />
            </NavLink>
            <ul>
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
