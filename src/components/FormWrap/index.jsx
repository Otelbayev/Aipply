import React, { forwardRef } from "react";
import { Container, Left, Right } from "./style";
import Form from "../Form";
import img1 from "../../assets/images/banner-img1.png";
import img2 from "../../assets/images/banner-img2.png";
import img3 from "../../assets/images/banner-img3.png";
import img4 from "../../assets/images/front.jpg";
const FormWrap = forwardRef((props, ref) => {
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
      {/* <div className="main" ref={ref}>
        <Left data-aos="fade-right" src={img4} />
        <Right data-aos="fade-left">
          <Form
            data={{
              big: "Bepul intensivga a'zo bo'lish!",
            }}
            border={"#D6D6D6"}
            boxShadow="true"
            background="#F3F8FF"
            grid={"1/3"}
            center="true"
            telegramLink="https://t.me/AdhamJasurIntensiv"
            telegramImg={img4}
            telegramName={
              "Sun'iy intelektlar dasturchilarni ishsiz qoldiradimi?"
            }
            telegramDesc={
              "Ushbu kanalda Adham Bahodirovich va Jasurbek O'telbayev tomonidan 30-Aprel kuni masterklass bo'lib o'tadi!"
            }
          />
        </Right>
      </div> */}
    </Container>
  );
});

export default FormWrap;
