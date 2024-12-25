import React, { useRef } from "react";
import { Container, Icons } from "./mentors.style";
import img1 from "../../assets/images/mentors/1.png";
import img2 from "../../assets/images/mentors/2.png";
import img3 from "../../assets/images/mentors/3.png";
import img4 from "../../assets/images/mentors/4.png";
import img5 from "../../assets/images/mentors/5.png";
import img6 from "../../assets/images/mentors/6.png";
import Slider from "react-slick";
import { useScrollContext } from "../../context/scroll-context";

const Mentors = () => {
  const slider2Ref = useRef();
  const { mentorsRef } = useScrollContext();
  const images = [img1, img2, img3, img4, img5, img6];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
  return (
    <div className="container" ref={mentorsRef}>
      <Container>
        <div className="mentors" data-aos="fade-up">
          <div className="mentors__title">Bizning mentorlarimiz</div>
          <Slider ref={slider2Ref} {...settings}>
            {images.map((image, index) => (
              <div key={index} className="mentors-item">
                <img
                  src={image}
                  loading="lazy"
                  effect="blur"
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </Slider>
          <div className="mentors__btn">
            <button onClick={() => slider2Ref?.current?.slickPrev()}>
              <Icons.Prev />
            </button>
            <button onClick={() => slider2Ref?.current?.slickNext()}>
              <Icons.Next />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mentors;
