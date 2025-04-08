import React from "react";
import { Container } from "../Comments/comments.style";
import Slider from "react-slick";

const Results = ({ slides = [] }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (!slides.length) {
    return null;
  }

  return (
    <div>
      <Container>
        <div className="comments">
          <div className="container">
            <div className="comments__title">O’quvchilar natijasi</div>
          </div>
          <div>
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div>
                  <img
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                    src={slide}
                    key={index}
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Results;
