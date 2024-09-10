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
import sp1 from "../../assets/icons/sp1.jpeg";
import sp3 from "../../assets/icons/sp3.jpg";
import sp4 from "../../assets/icons/sp4.webp";
import kom1 from "../../assets/images/kom1.png";
import kom2 from "../../assets/images/kom2.png";
import kom3 from "../../assets/images/kom8.png";
import kom4 from "../../assets/images/kom4.png";
import kom5 from "../../assets/images/kom5.png";
import kom6 from "../../assets/images/kom6.png";
import kom7 from "../../assets/images/kom7.png";
import {
  Container,
  Courses,
  WhyContainer,
  Icons,
  Mentors,
  Partners,
  Bottom,
  Comments,
} from "./style";
import Form from "../../components/Form";
import { useScrollContext } from "../../context/ScrollContext";
import { useLocation } from "react-router-dom";

const Home = () => {
  const slider2Ref = useRef(null);
  const location = useLocation();
  const { courseRef, aboutRef, mentorRef, freeLessonRef, contactRef } =
    useScrollContext();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

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

  const settings2 = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
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
                <img src={tstu} alt="" />
                <img src={talim} alt="" />
                <img src={db} alt="" />
                <img src={sp1} alt="" />
                <img src={sqb} alt="" />
                <img src={itpark} alt="" />
                <img src={sp4} alt="" />
                <img src={sp3} alt="" />
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

          <div data-aos="zoom-in" className="title-dark title-mentor">
            Izohlar
          </div>
          <Comments>
            <Slider {...settings2}>
              <div>
                <img src={kom1} alt="" />
              </div>
              <div>
                <img src={kom2} alt="" />
              </div>
              <div>
                <img src={kom3} alt="" />
              </div>
              <div>
                <img src={kom4} alt="" />
              </div>
              <div>
                <img src={kom5} alt="" />
              </div>
              <div>
                <img src={kom6} alt="" />
              </div>
              <div>
                <img src={kom7} alt="" />
              </div>
            </Slider>
          </Comments>
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
