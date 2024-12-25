import React from "react";
import styled from "styled-components";
import img1 from ".././../assets/images/success.webp";
import img2 from ".././../assets/images/job.webp";

const Numbers = ({ path }) => {
  const getPrice = (path) => {
    const obj = {
      "graphic-design": (
        <div className="prices">
          <div className="prices__item">
            <span className="prices__item--title ">Grafik dizayn</span>
            <span className="prices__item--price ">$350</span>
          </div>
        </div>
      ),
      "in-ex-design": (
        <div className="prices">
          <div className="prices__item">
            <span className="prices__item--title ">
              Interior/Exterior dizayn
            </span>
            <span className="prices__item--price ">$300</span>
          </div>
        </div>
      ),
      "motion-design": (
        <div className="prices">
          <div className="prices__item">
            <span className="prices__item--title ">Motion dizayn</span>
            <span className="prices__item--price ">$300</span>
          </div>
        </div>
      ),
      "no-coding": (
        <div className="prices">
          <div className="prices__item">
            <span className="prices__item--title ">No Coding</span>
            <span className="prices__item--price ">$330</span>
          </div>
        </div>
      ),
      "bir-oyda-bir-veb-sayt": (
        <div className="prices">
          <div className="prices__item">
            <span className="prices__item--title ">Dasturlash</span>
            <span className="prices__item--price ">$330</span>
          </div>
        </div>
      ),
      reactjs: (
        <div className="prices">
          <div className="prices__item">
            <span className="prices__item--title ">Frontend</span>
            <span className="prices__item--price ">$330</span>
          </div>
        </div>
      ),
      python: (
        <div className="prices">
          <div className="prices__item">
            <span className="prices__item--title ">Python</span>
            <span className="prices__item--price ">$330</span>
          </div>
        </div>
      ),
    };
    return (
      obj[path] || (
        <div className="prices">
          <div className="prices__item">
            <span className="prices__item--title ">Dasturlash</span>
            <span className="prices__item--price ">$330</span>
          </div>
          <div className="prices__item">
            <span className="prices__item--title ">Dizayn</span>
            <span className="prices__item--price ">$350</span>
          </div>
        </div>
      )
    );
  };

  return (
    <div className="container">
      <Wrapper>
        <div
          className="title statistic-title"
          style={{ width: "100%", paddingBottom: "15px" }}
        >
          “Aipply Academy” natijasi raqamlarda
        </div>
        <div className="num-content">
          <div className="num-content__item" data-aos="fade-up">
            <div className="num-content__item--count title">80%</div>
            <div className="num-content__item--text title">
              Muvaffaqiyatli tugatganlar
            </div>
            <img src={img1} className="num-content__item--img" alt="" />
          </div>
          <div className="num-content__item" data-aos="fade-up">
            <div className="num-content__item--count title">95%</div>
            <div className="num-content__item--text title">
              Ishga joylashgan bitiruvchilarimiz
            </div>
            <img src={img2} className="num-content__item--img" alt="" />
          </div>
          <div className="num-content__last" data-aos="fade-up">
            <div className="num-content__last--title title">
              Bitiruvchilarning o‘rtacha maoshi
            </div>
            {getPrice(path)}
            <p>
              <div>
                <i>
                  O'quv markazini endi tugatgan bitiruvchilarning o'rtacha
                  maoshi.
                </i>
              </div>
              <i>
                Tajriba ortgani sayin zamonaviy kasblarda daromad ham muntazam
                oshib boradi.
              </i>
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Numbers;

export const Wrapper = styled.div`
  .statistic-title {
    margin: 20px 0;
    font-size: 43px;
    font-weight: 700;
  }
  .num-content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    &__item {
      border: 0.76px solid #0282d6;
      border-radius: 20px;
      padding: 20px;
      flex: 1;
      &--count {
        font-size: 65px;
        font-weight: 700;
      }
      &--text {
        font-size: 20px;
        font-weight: 600;
        margin: 10px 0;
      }
      &--img {
        width: 200px;
      }
    }
    &__last {
      border: 0.76px solid #0282d6;
      border-radius: 20px;
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 20px;
      &--title {
        font-size: 30px;
        font-weight: 600;
      }
      .prices {
        &__item {
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &--title {
            font-size: 20px;
            font-weight: 600;
            color: #606060;
          }
          &--price {
            font-size: 24px;
            font-weight: 700;
            color: #000000;
            padding-right: 20px;
          }
        }
      }
      p {
        color: #606060;
      }
    }
  }

  @media (max-width: 900px) {
    .statistic-title {
      width: 100%;
      font-size: 30px;
      line-height: 35px;
    }
    .num-content {
      flex-direction: column;
      gap: 10px;
      &__item {
        &--count {
          font-size: 50px;
        }
        &--title {
          font-size: 18px;
        }
        &--img {
          width: 150px;
        }
      }
      &__last {
        &--title {
          font-size: 22px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
`;
