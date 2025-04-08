import React from "react";
import { Container, Content, Top } from "./footer.style";
import { NavLink } from "react-router-dom";
import { useScrollContext } from "../../context/scroll-context";
import { useScroll } from "../../hooks/useScroll";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import certificate from "../../assets/images/certificate.png";

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
              loading="lazy"
              effect="blur"
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
                Ochiq darsga yoziling!
              </Content.Link>
            </div>
            <div>
              <div className="footer-media">
                <NavLink target="_blank" to="https://t.me/aipplyacademy">
                  <FaTelegram size={40} color="#ffffff" />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://www.instagram.com/aipply.academy"
                >
                  <FaInstagram size={40} color="#ffffff" />
                </NavLink>
                <NavLink
                  target="_blank"
                  to="https://www.youtube.com/channel/UCzueY2lK3VYGPgC6AWy2HNQ"
                >
                  <FaYoutube size={40} color="#ffffff" />
                </NavLink>
                <NavLink target="_blank" to="https://www.facebook.com/aipply">
                  <FaFacebookSquare size={40} color="#ffffff" />
                </NavLink>
              </div>
              <div className="footer-tel">
                <NavLink to="tel: +998771233300">+998771233300</NavLink>
              </div>
            </div>
          </Content.Right>
          <div className="footer-cer">
            <a href={certificate}>
              <img src={certificate} alt="" />
            </a>
            <p>IT Park rezidenti</p>
          </div>
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
