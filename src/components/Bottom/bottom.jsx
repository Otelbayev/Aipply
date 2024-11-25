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
            <div>Bepul birinchi darsga</div>
            <div>yozilish!</div>
            <Link to="/lid">
              <button className="btn">Bepul birinchi darsga yoziling</button>
            </Link>
          </div>
        </div>
        <img loading="lazy" src={boy} alt="" className="bottom__right" />
      </div>
    </Container>
  );
};

export default Bottom;
