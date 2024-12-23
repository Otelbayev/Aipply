import React from "react";
import { Container } from "./comments.style";
import img1 from "../../assets/images/comments/1.png";
import img2 from "../../assets/images/comments/2.png";
import img3 from "../../assets/images/comments/3.png";
import img4 from "../../assets/images/comments/4.png";
import img5 from "../../assets/images/comments/5.png";
import img6 from "../../assets/images/comments/6.png";
import img7 from "../../assets/images/comments/7.png";
import img8 from "../../assets/images/comments/8.png";
import img9 from "../../assets/images/comments/9.png";
import img11 from "../../assets/images/comments/10.png";
import Slider from "react-slick";

const Comments = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
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

  const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img11];

  return (
    <div>
      <Container>
        <div className="comments">
          <div className="container">
            <div className="comments__title">Izohlar</div>
          </div>
          <div>
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <img
                  style={{
                    margin: "10px",
                  }}
                  src={slide}
                  key={index}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Comments;
