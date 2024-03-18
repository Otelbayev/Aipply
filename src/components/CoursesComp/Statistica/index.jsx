import React, { useState } from "react";
import { Container, Progress } from "./style";
import Form from "../../Form";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import img from "../../../assets/images/ai.png";
import computer from "../../../assets/images/computer.png";

const Statistica = ({ data }) => {
  const [enter, setEnter] = useState(false);
  return (
    <Container>
      <div className="title-dark statistic-title" data-aos="fade-right">
        Kursni tugatganlarni o’rtacha statistikasi
      </div>
      <ScrollTrigger
        onEnter={() => setEnter(true)}
        onExit={() => setEnter(false)}
      >
        <div className="statistic-content" data-aos="zoom-in">
          <div className="statistic-content__left">
            <div className="statistic-content__left__item grid-first">
              <Progress $pr={80}>
                <div className="progress-bar">
                  <div className="progress-bar__abs">
                    {enter && (
                      <CountUp end={data?.succes} start={0} duration={1} />
                    )}
                    %
                  </div>
                </div>
              </Progress>
              Muvofaqiyatli tugatganlar
            </div>
            <div className="statistic-content__left__item grid-second">
              <Progress $pr={90}>
                <div className="progress-bar">
                  <div className="progress-bar__abs">
                    {enter && (
                      <CountUp end={data?.working} start={0} duration={1} />
                    )}
                    %
                  </div>
                </div>
              </Progress>
              Ishga joylashgan bitiruvchilarimiz
            </div>
            <div className="statistic-content__left__item grid-thrid">
              <div className="statistic-content__left__item__count">
                {enter && (
                  <CountUp end={data?.teching} start={0} duration={1} />
                )}
              </div>
              Kursda o’qyotganlar
            </div>
            <div className="statistic-content__left__item grid-fourth">
              <div className="statistic-content__left__item__count">
                {enter && <CountUp end={data?.end} start={0} duration={1} />}
              </div>
              Kursni tugatganlar
            </div>
            <div className="statistic-content__left__item grid-fifth">
              <div className="statistic-content__left__item__count">
                {enter && <CountUp end={data?.price} start={0} duration={1} />}$
              </div>
              O’rtacha oylik maoshi
            </div>
          </div>
          <div className="statistic-content__right">
            <div className="statistic-content__right__desc">{data?.desc}</div>
            <div className="statistic-content__right__form">
              <Form
                background="#F3F8FF"
                data={{ big: "Bepul darsga yoziling" }}
              />
            </div>
          </div>
        </div>
        <div className="statistic-bottom">
          <div className="statistic-bottom__left" data-aos="fade-right">
            <div className="statistic-bottom__left__title">{data?.aiDesc}</div>
            <div className="statistic-bottom__left__img">
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
              <img src={img} alt="" />
            </div>
          </div>
          <div className="statistic-bottom__right" data-aos="fade-left">
            <div className="statistic-bottom__right__title">
              {data?.computerTitle}
            </div>
            <div className="statistic-bottom__right__content">
              <div className="statistic-bottom__right__content__data">
                <div>Protsessor: {data?.processor}</div>
                <div>Hotira SSD: {data?.memory}</div>
                <div>Operativka {data?.ram}</div>
                {data?.videoCard && (
                  <div>Videokarta RTX1650: {data?.videoCard}</div>
                )}
              </div>
              <img
                src={computer}
                className="statistic-bottom__right__content__img"
                alt=""
              />
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </Container>
  );
};

export default Statistica;
