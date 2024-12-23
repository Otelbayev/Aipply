import React from "react";
import Form from "../Form/form";

const Showcase = () => {
  return (
    <div className="preload-showcase">
      <div className="container">
        <div className="showcase">
          <div className="showcase__title title">
            O'zbekistondagi birinchi Sun'iy intellektga ixtisoslashtirilgan
            zamonaviy kasblar o'quv markazi!
          </div>
          <div className="showcase__form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
