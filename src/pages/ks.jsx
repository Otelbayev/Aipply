import img from "../assets/images/ks.png";
import logo from "../assets/icons/logo1.png";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import AOS from "aos";

const bg = css`
  background: linear-gradient(90deg, #005e89 0%, #002b87 100%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Inter", sans-serif;
`;

const Container = styled.div`
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f3faff;
  .ks {
    margin: 0 auto;
    width: 1500px;
    padding-left: 100px;
    &__content {
      position: relative;
      z-index: 10;
      &__words {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      &__boxes {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
        &--box {
          background: #ffffff;
          border: 1.08px solid #013787;
          padding: 10px 20px;
          max-width: 550px;
          border-radius: 15px;
          list-style-type: none;
          li {
            ${bg}
            font-size:20px;
            font-weight: 300;
            padding: 1px 0;
          }
          li:first-child {
            font-weight: 500;
          }
        }
      }
      &__btn {
        font-family: "Inter", sans-serif;
        background-color: #e92b2b;
        border: 1.47px solid #ffffff;
        font-weight: 500;
        font-size: 25px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        max-width: 550px;
        color: #fff;
        border-radius: 20px;
        padding: 15px 20px;
      }
    }
    &__img {
      position: absolute;
      z-index: 7;
      bottom: 0;
      right: 8%;
      max-width: 650px;
    }
  }
  .ks-name {
    display: flex;
    align-items: center;
    gap: 20px;
    .logo {
      width: 200px;
    }
    .line {
      height: 100px;
      width: 2px;
      background-color: #002b87;
    }
    span {
      font-family: "Inter", sans-serif;
      font-size: 40px;
      font-weight: 300;
      color: #013a87;
    }
  }
  .ks-desc {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 40px;
    ${bg}
  }
  .ks-title {
    font-family: "Inter", sans-serif;
    font-size: 50px;
    font-weight: 700;
    ${bg}
  }
  .shadow {
    position: absolute;
    z-index: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 0 200px 300px #017bd3ab;
  }
  .sh-f {
    top: -200px;
    right: -200px;
  }
  .sh-s {
    bottom: -200px;
    left: -200px;
  }
  .abs-btn {
    display: none;
  }
  @media (max-width: 1350px) {
    .ks {
      width: 90%;
      padding-left: 0;
      &__img {
        right: 0;
      }
    }
  }
  @media (max-width: 1290px) {
    .ks {
      &__content {
        &__boxes {
          &--box {
            width: 480px;
            li {
              font-size: 18px;
            }
          }
        }
        &__btn {
          width: 480px;
        }
      }
    }
    .ks-name {
      span {
        font-size: 35px;
      }
    }
    .ks-desc {
      font-size: 35px;
    }
    .ks-title {
      font-size: 45px;
    }
  }
  @media (max-width: 1080px) {
    padding: 20px 0 50px;
    align-items: center;
    height: auto;
    .ks {
      width: 95%;
      &__content {
        &__words {
          gap: 5px;
          align-items: center;
        }
        &__boxes {
          align-items: center;
          margin-top: 480px;
          gap: 10px;
          &--box {
            width: 100%;
          }
        }
        &__btn {
          margin: 20px;
          width: 90%;
          font-size: 18px;
        }
      }
      &__img {
        width: 300px;
        bottom: auto;
        right: 50% !important;
        transform: translateX(50%) !important;
        top: 200px;
      }
    }
    .ks-name {
      .logo {
        width: 100px;
      }
      .line {
        height: 40px;
      }
      span {
        font-size: 22px;
      }
    }
    .ks-desc {
      font-size: 18px;
      text-align: center;
      span {
        display: block;
      }
    }
    .ks-title {
      font-size: 24px;
      text-align: center;
    }
    .sh-f {
      top: -300px;
      right: -300px;
    }
    .sh-s {
      bottom: -300px;
      left: -300px;
    }
    .abs-btn {
      display: block;
      position: absolute;
      top: 520px;
    }
  }
`;

const Footer = styled.div`
  background: linear-gradient(90deg, #005e89 0%, #002b87 100%);
  height: 50vh;
`;

export default function KS() {
  return (
    <>
      <Container>
        <div className="ks">
          <div className="ks__content" data-aos="fade-right">
            <div className="ks__content__words">
              <div className="ks-name">
                <img className="logo" src={logo} alt="Davronov Navodir" />
                <div className="line"></div>
                <span>Davronov Navodir</span>
              </div>
              <p className="ks-desc">
                1 oylik Kompyuter savodxonligi + <span>AI kursi uchun</span>
              </p>
              <h2 className="ks-title">
                <div>Ochiq darsda ishtirok eting</div>
                <div>va chegirmalarni qo'lga kiriting!</div>
              </h2>
            </div>
            <div className="ks__content__boxes">
              <ul className="ks__content__boxes--box">
                <li>Kursni tugatganda Siz:</li>
                <li>1. Ofis dasturlaridan samarali foydalanishni;</li>
                <li>2. Sun'iy intellekt va undan unumli foydalanish;</li>
                <li>3. Internet va brauzerlarni;</li>
                <li>4. Vaqtingizni tejovchi foydali saytlarni;</li>
                <li>5. Ma'lumotlarni xavfsiz saqlashni;</li>
                <li>6. Kompyuterga xizmat ko'rsatishni o'rganasiz!</li>
              </ul>
              <ul className="ks__content__boxes--box">
                <li>Shuningdek, biz Sizga</li>
                <li>1. Kuchli o'quv metodikasi;</li>
                <li>2. Kuchli intizom;</li>
                <li>3. Bepul Coworking va Wi-Fi;</li>
                <li>4. Kurs so'ngida sertifikatni taqdim etamiz!</li>
              </ul>
              <Link to="/ks-form" className="ks__content__btn">
                Ochiq darsda ishtirok etish
              </Link>
              <Link to="/ks-form" className="ks__content__btn abs-btn">
                Ochiq darsda ishtirok etish
              </Link>
            </div>
          </div>
          <img
            src={img}
            className="ks__img"
            data-aos="fade-left"
            alt="Davronov Navodir"
            onLoad={() => AOS.refresh()}
          />
        </div>
        <div className="shadow sh-f"></div>
        <div className="shadow sh-s"></div>
      </Container>
      <Footer>
        <div className="container">
          <img src={logo} alt="" />
          <div className="f-title">Aipply Academy</div>
        </div>
      </Footer>
    </>
  );
}
