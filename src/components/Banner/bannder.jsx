import React from "react";
import { Container } from "./banner.style";
import banner from "../../assets/images/banner.png";
import Form from "../Form/form";

const Banner = ({ course }) => {
  return (
    <Container className="container" data-aos="fade-up">
      <div className="banner">
        <div>
          <p className="banner__text">
            O'zbekistondagi birinchi Sun'iy intellektga ixtisoslashtirilgan
            zamonaviy kasblar o'quv markazi!
          </p>

          {course && (
            <>
              <br />
              <Form />
            </>
          )}
        </div>
        <img
          loading="lazy"
          effect="blur"
          src={banner}
          alt=""
          className="banner__img"
        />
      </div>
    </Container>
  );
};

export default Banner;
