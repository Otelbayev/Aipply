import React from "react";
import { Container } from "./form.style";
import { Link } from "react-router-dom";

const Form = ({ background }) => {
  return (
    <Container $bg={background}>
      <div className="form">
        <div className="form__title title">Ochiq darsga yoziling!</div>
        {/* <div className="form__desc title">
          Telefon raqamingizni yozib qoldiring, biz Siz bilan bog'lanamiz va
          barcha savollaringizga javob beramiz!
        </div> */}
        <Link to="/lid">
          <button className="form__button btn">Ro'yxatdan o'tish</button>
        </Link>
      </div>
    </Container>
  );
};

export default Form;
