import React from "react";
import { Container } from "./showcase.style";
import Form from "../Form/form";

const Showcase = () => {
  return (
    <Container>
      <div className="container">
        <div className="showcase">
          <div className="showcase__title title">
            Aipply Academy - sun'iy intellektga ixtisoslashtirilgan zamonaviy
            kasblar o'quv markazi!
          </div>
          <div className="showcase__form">
            <Form />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
