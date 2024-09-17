import React from "react";
import { Container } from "./style";
import Form from "../Form";
// import grand from "../../assets/images/grant.png";
// import bg from "../../assets/images/showcasebg.png";
// import ai from "../../assets/images/ai2.png";
// import ai1 from "../../assets/images/ai3.png";
// import ai2 from "../../assets/images/ai.png";
// import ai4 from "../../assets/images/ai4.png";
// import ai3 from "../../assets/images/ai5.png";
// import ai5 from "../../assets/images/ai1.png";

const Showcase = () => {
  return (
    <Container>
      <div className="showcase-container root-wrapper">
        <div className="showcase-container__left" data-aos="fade-right">
          <h1 className="showcase-container__left__title">
            Aipply Academy - sun'iy intellektga ixtisoslashtirilgan zamonaviy
            kasblar o'quv markazi!
          </h1>
          <Form
            data={{
              title: "Bepul ochiq darsga yozilish!",
              desc: "Telefon raqamingizni yozib qoldiring, biz Siz bilan bog'lanamiz va barcha savollaringizga javob beramiz!",
            }}
            border={"#F3F8FF33"}
            boxShadow="true"
            width={"90%"}
            blur="true"
            background="rgba(255,255,255,0.2)"
            color={"#fff"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
