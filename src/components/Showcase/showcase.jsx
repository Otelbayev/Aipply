import React from "react";
import Form from "../Form/form";

const Showcase = () => {
  return (
    <div className="preload-showcase">
      <div className="container">
        <div className="showcase">
          <div className="showcase__title title">
            {/* Zamonaviy kasblar orqali <br /> daromad qilishni o'rgatamiz! */}
            {/* Daromad qilishni o'rgatamiz! */}
            Daromadli kelajak sari qadam tashlang!
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
