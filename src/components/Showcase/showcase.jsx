import React from "react";
import Form from "../Form/form";

const Showcase = () => {
  return (
    <div className="preload-showcase">
      <div className="container">
        <div className="showcase">
          <div className="showcase__title title">
            Zamonaviy kasblarni sifatli o'rgatib, <br /> unda sun'iy intellektni
            professional qo'llashni ham o'rgatamiz!
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
