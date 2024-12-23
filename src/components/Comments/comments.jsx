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

const Comments = () => {
  return (
    <div>
      <Container>
        <div className="comments">
          <div className="container">
            <div className="comments__title">Izohlar</div>
          </div>
          <div className="comments__body">
            <div className="comments__body item1 stop-anim">
              <img loading="lazy" effect="blur" src={img1} alt="" />
              <img loading="lazy" effect="blur" src={img2} alt="" />
              <img loading="lazy" effect="blur" src={img3} alt="" />
              <img loading="lazy" effect="blur" src={img4} alt="" />
              <img loading="lazy" effect="blur" src={img5} alt="" />
              <img loading="lazy" effect="blur" src={img6} alt="" />
              <img loading="lazy" effect="blur" src={img7} alt="" />
              <img loading="lazy" effect="blur" src={img8} alt="" />
              <img loading="lazy" effect="blur" src={img9} alt="" />
              <img loading="lazy" effect="blur" src={img11} alt="" />
            </div>
          </div>
          <div className="comments__body">
            <div className="comments__body item2 stop-anim">
              <img
                loading="lazy"
                effect="blur"
                src={img11}
                alt=""
                className="comments__body__item"
              />
              <img
                loading="lazy"
                effect="blur"
                src={img9}
                alt=""
                className="comments__body__item"
              />
              <img
                loading="lazy"
                effect="blur"
                src={img8}
                alt=""
                className="comments__body__item"
              />
              <img
                loading="lazy"
                effect="blur"
                src={img7}
                alt=""
                className="comments__body__item"
              />
              <img
                loading="lazy"
                effect="blur"
                src={img6}
                alt=""
                className="comments__body__item"
              />
              <img
                loading="lazy"
                effect="blur"
                src={img5}
                alt=""
                className="comments__body__item"
              />
              <img
                loading="lazy"
                effect="blur"
                src={img4}
                alt=""
                className="comments__body__item"
              />
              <img
                loading="lazy"
                effect="blur"
                src={img3}
                alt=""
                className="comments__body__item"
              />
              <img
                loading="lazy"
                effect="blur"
                src={img2}
                alt=""
                className="comments__body__item"
              />
              <img
                loading="lazy"
                effect="blur"
                src={img1}
                alt=""
                className="comments__body__item"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Comments;
