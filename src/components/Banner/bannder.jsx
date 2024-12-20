import React from "react";
import { Container } from "./banner.style";
import banner from "../../assets/images/banner.png";
import Form from "../Form/form";

const Banner = ({ course }) => {
  return (
    <Container className="container">
      <div className="banner">
        <div>
          <p className="banner__text">
            Sun'iy intellekt - bu kelajak, zamonaviy kasblarda sun'iy
            intellektni samarali qo'llash esa - bu zamon talabi!
          </p>

          {course && (
            <>
              <br />
              <Form />
            </>
          )}
        </div>
        <img loading="lazy" src={banner} alt="" className="banner__img" />
      </div>
    </Container>
  );
};

export default Banner;
