import React from "react";
import { Container } from "./why.style";
import WhyItem from "./why-item";
import { whyData } from "../../mock/why";
import { useScrollContext } from "../../context/scroll-context";

const Why = () => {
  const { aboutRef } = useScrollContext();
  return (
    <Container className="container">
      <div className="why-title title">Nega aynan Aipply Academy?</div>
      <div ref={aboutRef}></div>
      <div className="why">
        {whyData.map(({ icon, title }, index) => (
          <WhyItem key={index} icon={icon} title={title} />
        ))}
      </div>
    </Container>
  );
};

export default Why;
