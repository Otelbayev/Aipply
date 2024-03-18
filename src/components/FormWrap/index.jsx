import React from "react";
import { Container, Right } from "./style";
import Form from "../Form";
import img1 from "../../assets/images/banner-img1.png";
import img2 from "../../assets/images/banner-img2.png";
import img3 from "../../assets/images/banner-img3.png";
const FormWrap = () => {
  return (
    <Container>
      <div className="banner" data-aos="fade-right">
        <div className="banner__title">
          Sun'iy intellekt - bu kelajak, zamonaviy kasblarda sun'iy intellektni
          samarali qo'llash esa - bu zamon talabi!
        </div>
        <div className="banner__content">
          <div className="banner__content__img">
            <img src={img1} alt="" />
          </div>
          <div className="banner__content__img">
            <img src={img2} alt="" />
          </div>
          <div className="banner__content__img">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      <Right data-aos="fade-left">
        <Form
          data={{
            big: "Bepul konsultatsiya",
            desc: "Telefon raqamingizni yozib qoldiring, biz Siz bilan bog'lanamiz va barcha savollaringizga javob beramiz!",
          }}
          border={"#D6D6D6"}
          boxShadow="true"
          background="#F3F8FF"
          grid={"1/3"}
          center="false"
        />
      </Right>
    </Container>
  );
};

export default FormWrap;
