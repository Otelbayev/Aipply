import React from "react";
import { Container, Content, Top } from "./style";
import { useScrollContext } from "../../context/ScrollContext";
import { Placemark } from "@pbe/react-yandex-maps";

const Footer = () => {
  const { contactRef, aboutRef, courseRef, freeLessonRef, mentorRef } =
    useScrollContext();
  return (
    <Container ref={contactRef}>
      <div className="root-container">
        <div className="root-wrapper">
          <Content data-aos="fade-up">
            <Content.Left>
              <Content.WrapMap>
                <Content.Map
                  defaultState={{
                    center: [41.331018, 69.220138],
                    zoom: 15,
                    controls: ["zoomControl", "fullscreenControl"],
                  }}
                  modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                  <Placemark
                    geometry={[41.331018, 69.220138]}
                    properties={{ hintContent: "OPTIMUS inzhenerlar maktabi" }}
                  />
                </Content.Map>
              </Content.WrapMap>
            </Content.Left>
            <Content.Right>
              <div>
                <Content.Title>KONTAKT</Content.Title>
                <Content.Link
                  target="_blank"
                  to="https://www.instagram.com/aipply.academy/"
                >
                  Instagram
                </Content.Link>
                <Content.Link
                  target="_blank"
                  to="https://www.instagram.com/aipply.academy/"
                >
                  Telegram
                </Content.Link>
                <Content.Link
                  target="_blank"
                  to="https://www.instagram.com/aipply.academy/"
                >
                  Youtube
                </Content.Link>
                <Content.Link
                  target="_blank"
                  to="https://www.instagram.com/aipply.academy/"
                >
                  Facebook
                </Content.Link>
              </div>
              <div>
                <Content.Title>AIPPLY</Content.Title>
                <Content.Link to="/#about">Biz haqimizda</Content.Link>
                <Content.Link to="/#course">Kurslar</Content.Link>
                <Content.Link to="/#mentor">Mentorlar</Content.Link>
                <Content.Link to="/#free">Bepul darsga yozilish</Content.Link>
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
