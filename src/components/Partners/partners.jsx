import React from "react";
import { Container } from "./partners.style";
import icon1 from "../../assets/icons/partners/1.png";
import icon2 from "../../assets/icons/partners/2.png";
import icon3 from "../../assets/icons/partners/3.png";
import icon4 from "../../assets/icons/partners/4.png";
import icon5 from "../../assets/icons/partners/5.png";
import icon6 from "../../assets/icons/partners/6.png";
import icon7 from "../../assets/icons/partners/7.png";
import icon8 from "../../assets/icons/partners/8.png";

const Partners = () => {
  return (
    <div className="container" data-aos="fade-up">
      <Container>
        <div className="partners">
          <div className="partners__title">Bitiruvchilarimiz ish joylari</div>
          <div className="partners__desc">
            Aipplyning eng yaxshi bitiruvchilarini bizning hamkorlar –
            O'zbekistonning yetakchi kompaniyalari ishga qabul qiladilar.
          </div>
          <div className="partners__icons">
            <img
              loading="lazy"
              effect="blur"
              src={icon1}
              className="partners__icons--item"
              alt=""
            />
            <img
              loading="lazy"
              effect="blur"
              src={icon2}
              className="partners__icons--item"
              alt=""
            />
            <img
              loading="lazy"
              effect="blur"
              src={icon3}
              className="partners__icons--item"
              alt=""
            />
            <img
              loading="lazy"
              effect="blur"
              src={icon4}
              className="partners__icons--item"
              alt=""
            />
            <img
              loading="lazy"
              effect="blur"
              src={icon5}
              className="partners__icons--item"
              alt=""
            />
            <img
              loading="lazy"
              effect="blur"
              src={icon6}
              className="partners__icons--item"
              alt=""
            />
            <img
              loading="lazy"
              effect="blur"
              src={icon7}
              className="partners__icons--item"
              alt=""
            />
            <img
              loading="lazy"
              effect="blur"
              src={icon8}
              className="partners__icons--item"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
