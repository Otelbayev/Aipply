import React from "react";
import { Container, Content, Top, Icons } from "./footer.style";
import { NavLink } from "react-router-dom";
import { useScrollContext } from "../../context/scroll-context";
import { useScroll } from "../../hooks/useScroll";

const Footer = () => {
  const { aboutRef, courseRef, contactRef, mentorsRef, firstRef } =
    useScrollContext();
  return (
    <Container>
      <div className="container">
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
              <Content.Link onClick={() => useScroll(aboutRef)}>
                Biz haqimizda
              </Content.Link>
              <Content.Link onClick={() => useScroll(courseRef)}>
                Kurslar
              </Content.Link>
              <Content.Link onClick={() => useScroll(mentorsRef)}>
                Mentorlar
              </Content.Link>
              <Content.Link onClick={() => useScroll(firstRef)}>
                Bepul birinchi darsga yozilish
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
        <div ref={contactRef} className="footer-bottom">
          <button onClick={() => window.scrollTo(0, 0)}>
            <Top />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
