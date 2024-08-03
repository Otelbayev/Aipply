import React from "react";
import { Container, Content, Top, Icons } from "./style";
import { useScrollContext } from "../../context/ScrollContext";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { contactRef } = useScrollContext();
  return (
    <Container ref={contactRef}>
      <div className="root-container">
        <div className="root-wrapper">
          <Content data-aos="fade-up">
            <Content.Left>
              <iframe
                allowFullScreen
                src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=75493422112"
              ></iframe>
            </Content.Left>
            <Content.Right>
              <div>
                <Content.Title>AIPPLY ACADEMY</Content.Title>
                <Content.Link to="/#about">Biz haqimizda</Content.Link>
                <Content.Link to="/#course">Kurslar</Content.Link>
                <Content.Link to="/#mentor">Mentorlar</Content.Link>
                <Content.Link to="/#free">
                  Bepul ochiq darsga yozilish
                </Content.Link>
              </div>
              <div>
                <div className="footer-media">
                  <NavLink target="_blank" to="https://t.me/aipplyacademy">
                    <Icons.Telegram />
                  </NavLink>
                  <NavLink
                    target="_blank"
                    to="https://www.instagram.com/aipply.academy"
                  >
                    <Icons.Instagram />
                  </NavLink>
                  <NavLink
                    target="_blank"
                    to="https://www.youtube.com/channel/UCzueY2lK3VYGPgC6AWy2HNQ"
                  >
                    <Icons.Youtube />
                  </NavLink>
                  <NavLink target="_blank" to="https://www.facebook.com/aipply">
                    <Icons.Fecebook />
                  </NavLink>
                </div>
                <div className="footer-tel">
                  <NavLink to="tel: +998771233300">+998771233300</NavLink>
                </div>
              </div>
            </Content.Right>
          </Content>
          <div className="footer-bottom">
            <button onClick={() => window.scrollTo(0, 0)}>
              <Top />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
