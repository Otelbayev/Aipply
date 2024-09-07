import React, { useEffect, useRef } from "react";
import Showcase from "../../components/Showcase";
import Why from "../../components/Why";
import Course from "../../components/Course";
import Mentor from "../../components/Mentor";
import { course, why, mentor } from "../../mock/mock";
import Slider from "react-slick";
import FormWrap from "../../components/FormWrap";
import itpark from "../../assets/images/itpark.png";
import sqb from "../../assets/images/sqb.png";
import talim from "../../assets/images/talim.png";
import tstu from "../../assets/images/tstu.png";
import boy from "../../assets/images/boy.png";
import db from "../../assets/images/db.png";
import {
  Container,
  Courses,
  WhyContainer,
  Icons,
  Mentors,
  Partners,
  Bottom,
} from "./style";
import Form from "../../components/Form";
import { useScrollContext } from "../../context/ScrollContext";
import { useLocation } from "react-router-dom";

const Home = () => {
  const sliderRef = useRef(null);
  const slider2Ref = useRef(null);
  const location = useLocation();
  const { courseRef, aboutRef, mentorRef, freeLessonRef, contactRef } =
    useScrollContext();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function scrollInPage(hash) {
    const obj = {
      "#about": aboutRef,
      "#course": courseRef,
      "#mentor": mentorRef,
      "#free": freeLessonRef,
      "#contact": contactRef,
    };

    obj[hash]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  useEffect(() => {
    scrollInPage(location.hash);
  }, [location.hash]);

  return (
    <Container>
          <Showcase />
      <div className="root-container">
        <div className="root-wrapper">
          <WhyContainer ref={aboutRef}>
            <div className="title" data-aos="zoom-in">
              Nega aynan Aipply Academy?
            </div>
            <WhyContainer.Main>
              {why.map((data) => (
                <Why key={data?.id} data={data} />
              ))}
            </WhyContainer.Main>
          </WhyContainer>
          <Courses ref={courseRef}>
            <Courses.Top data-aos="zoom-in">
              <div ref={courseRef} className="title">
                Mavjud kurslar
              </div>
              {/* <div>
                <button onClick={() => sliderRef?.current?.slickPrev()}>
                  <Icons.Prev />
                </button>
                <button onClick={() => sliderRef?.current?.slickNext()}>
                  <Icons.Next />
                </button>
              </div> */}
            </Courses.Top>
            <Courses.Main>
              {/* <Slider ref={sliderRef} {...settings}> */}
                {course.map((data) => (
                  <Courses.Item key={data?.id}>
                    <Course data={data} />
                  </Courses.Item>
                ))}
              {/* </Slider> */}
            </Courses.Main>
          </Courses>
          <FormWrap />
          <Partners data-aos="zoom-in">
            <div className="partners">
              <div className="partners__left">
                <div className="partners__left__title">
                  Hamkor va mijozlarimiz jamoasining a`zosiga aylaning.
                </div>
                <div className="partners__left__desc">
                  Aipplyning eng yaxshi bitiruvchilarini bizning hamkorlar –
                  O'zbekistonning yetakchi kompaniyalari ishga qabul qiladilar.
                </div>
              </div>
              <div className="partners__right">
                <div className="partners__right__item">
                  <img src={tstu} className="tstu" alt="" />
                  <img src={talim} className="talim" alt="" />
                  <img src={db} className="db" alt="" />
                </div>
                <div className="partners__right__item">
                  <img src={sqb} className="sqb" alt="" />
                  <img src={itpark} className="itpark" alt="" />
                </div>
              </div>
            </div>
          </Partners>
          <Mentors ref={mentorRef}>
            <div data-aos="zoom-in" className="title-dark title-mentor">
              Bizning mentorlarimiz
            </div>
            <Mentors.Main>
              <Slider ref={slider2Ref} {...settings}>
                {mentor.map((data) => (
                  <Mentors.Item key={data?.id}>
                    <Mentor data={data} />
                  </Mentors.Item>
                ))}
              </Slider>
            </Mentors.Main>
            <Mentors.Bottom>
              <button onClick={() => slider2Ref?.current?.slickPrev()}>
                <Icons.Prev />
              </button>
              <button onClick={() => slider2Ref?.current?.slickNext()}>
                <Icons.Next />
              </button>
            </Mentors.Bottom>
          </Mentors>
          <Bottom ref={freeLessonRef}>
            <div className="bottom">
              <div className="bottom__left" data-aos="fade-right">
                <div className="bottom__left__title">
                  Aipply Academy bilan zamonaviy kasblarni zamon talabida o’rgan
                </div>
                <div className="bottom__left__form">
                  <Form
                    data={{
                      big: "Bepul ochiq darsga yozilish",
                    }}
                    background="#F3F8FF"
                    grid={"1/3"}
                    width={"460px"}
                  />
                </div>
              </div>
              <div className="bottom__right" data-aos="fade-left">
                <img src={boy} alt="" />
              </div>
            </div>
          </Bottom>
        </div>
      </div>
    </Container>
  );
};

export default Home;
