import React from "react";
import { Container } from "./bottom.style";
import boy from "../../assets/images/boy.png";
import { Link } from "react-router-dom";
import { useScrollContext } from "../../context/scroll-context";

const Bottom = () => {
  const { firstRef } = useScrollContext();
  return (
    <Container ref={firstRef} className="container">
      <div className="bottom">
        <div className="bottom__left">
          <div className="bottom__left--title title">
            Aipply Academy bilan zamonaviy kasblarni zamon talabida o’rganing
          </div>
          <div className="bottom__left--form">
            <div>Ochiq darsga</div>
            <div>yoziling!</div>
            <Link to="/lid">
              <button className="btn">Ochiq darsga yoziling!</button>
            </Link>
          </div>
        </div>
        <img
          loading="lazy"
          effect="blur"
          src={boy}
          alt=""
          className="bottom__right"
        />
      </div>
    </Container>
  );
};

export default Bottom;
