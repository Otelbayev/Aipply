import React from "react";
import { Container } from "../Comments/comments.style";
import img1 from "../../assets/images/results/1.png";
import img2 from "../../assets/images/results/2.png";
import img3 from "../../assets/images/results/3.png";
import img4 from "../../assets/images/results/4.png";
import img5 from "../../assets/images/results/5.png";
import img6 from "../../assets/images/results/6.png";
import img7 from "../../assets/images/results/7.png";
import img8 from "../../assets/images/results/8.png";
import img9 from "../../assets/images/results/9.png";
import Slider from "react-slick";

const Results = () => {
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

  const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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
