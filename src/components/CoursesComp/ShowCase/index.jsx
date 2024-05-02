import React from "react";
import { Container } from "./style";
import showcaseAI from "../../../assets/images/showcaseAI.png";
import Form from "./../../Form/index";
const Showcase = ({ data, img }) => {
  return (
    <Container>
      <div className="course-showcase">
        <div className="course-showcase__left" data-aos="fade-right">
          <div className="course-showcase__left__title">{data?.title}</div>
          <Form
            data={{
              title: "Bepul darsga yozilish",
              desc: "Telefon raqamingizni yozib qoldiring, biz Siz bilan bog'lanamiz va barcha savollaringizga javob beramiz!",
            }}
            border={"#02a5e0"}
            boxShadow="true"
            blur="true"
            background="transparent"
          />
        </div>
        <div className="course-showcase__right" data-aos="fade-left">
          <img src={img} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
