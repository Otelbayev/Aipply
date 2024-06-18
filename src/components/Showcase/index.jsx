import React from "react";
import { Container } from "./style";
import Form from "../Form";
import grand from "../../assets/images/grant.png";
import bg from "../../assets/images/showcasebg.png";
import ai from "../../assets/images/ai2.png";
import ai1 from "../../assets/images/ai3.png";
import ai2 from "../../assets/images/ai.png";
import ai4 from "../../assets/images/ai4.png";
import ai3 from "../../assets/images/ai5.png";
import ai5 from "../../assets/images/ai1.png";

const Showcase = () => {
  return (
    <Container>
      <div className="showcase-container">
        <div className="showcase-container__left" data-aos="fade-right">
          <h1 className="showcase-container__left__title">
            Aipply Academy - sun'iy intellektga ixtisoslashtirilgan zamonaviy
            kasblar o'quv markazi!
          </h1>
          <Form
            data={{
              title: "Bepul darsga yozilish.",
              desc: "Telefon raqamingizni yozib qoldiring, biz Siz bilan bog'lanamiz va barcha savollaringizga javob beramiz!",
            }}
            border={"#02a5e0"}
            boxShadow="true"
            // width={"50%"}
            blur="true"
            background="transparent"
          />
        </div>
        <div className="showcase-container__right">
          <div className="showcase-container__right__img">
            <img src={bg} alt="" />
            <div className="abs-title">
              <h1>DASTURLASH</h1>
              <h1>GRAFIK DIZAYN</h1>
              <h1>INTERYER DIZAYN</h1>
              <h1>Coding, Nocoding</h1>
            </div>
            <img className="ai-img ai" src={ai} alt="" />
            <img className="ai-img ai1" src={ai1} alt="" />
            <img className="ai-img ai2" src={ai2} alt="" />
            <img className="ai-img ai3" src={ai3} alt="" />
            <img className="ai-img ai4" src={ai4} alt="" />
            <img className="ai-img ai5" src={ai5} alt="" />
          </div>
          {/* <img
            className="showcase-container__right__grand"
            data-aos="fade-left"
            src={grand}
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
