import styled from "styled-components";

export const Container = styled.div`
  height: calc(100dvh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  .showcase-container {
    position: relative;
    display: flex;
    align-items: center;
    &__left {
      &__title {
        font-family: Gilroy;
        font-size: 50px;
        font-weight: 700;
        line-height: 56px;
        letter-spacing: 0.5px;
        text-align: left;
        background: linear-gradient(278.99deg, #02a5e0 19.32%, #0808ff 105%);
        background-clip: text;
        color: transparent;
        margin-bottom: 40px;
        width: 60%;
      }
    }
    &__right {
      &__img {
        width: 750px;
        height: 650px;
        position: absolute;
        top: -20px;
        right: -70px;
        z-index: -1;
        img {
          width: 100%;
          height: 100%;
        }
        .abs-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-40%, -50%);
          h1 {
            font-family: Gilroy;
            font-size: 30px;
            font-weight: 700;
            padding: 2px 0;
            line-height: 37px;
            letter-spacing: 0.718094527721405px;
            text-align: center;
            text-transform: uppercase;
            background: linear-gradient(
              278.99deg,
              #02a5e0 19.32%,
              #0000b0 105%
            );
            background-clip: text;
            color: transparent;
          }
        }
        .ai-img {
          width: 85px;
          height: 85px;
          position: absolute;
        }
        .ai {
          top: 10%;
          left: 50%;
        }
        .ai1 {
          bottom: 10%;
          left: 50%;
        }
        .ai2 {
          top: 25%;
          left: 20%;
        }
        .ai3 {
          top: 25%;
          right: 15%;
        }
        .ai4 {
          top: 65%;
          right: 15%;
        }
        .ai5 {
          top: 65%;
          left: 20%;
        }
      }
    }
  }
  @media (max-width: 1250px) {
    .showcase-container {
      &__left {
        &__title {
          font-size: 40px;
          line-height: 40px;
        }
      }
      &__right {
        &__img {
          width: 650px;
          height: 550px;
          .abs-title {
            h1 {
              font-size: 25px;
            }
          }
          .ai-img {
            width: 70px;
            height: 70px;
          }
        }
      }
    }
  }
  @media (max-width: 990px) {
    height: auto;
    .showcase-container {
      flex-direction: column;
      padding: 50px 0;
      &__left {
        &__title {
          margin-bottom: 600px;
          width: 100%;
          text-align: center;
        }
      }
      &__right {
        &__img {
          top: 180px;
          right: 50%;
          transform: translateX(48%);
        }
      }
    }
  }
  @media (max-width: 700px) {
    .showcase-container {
      padding: 30px 0;
      &__left {
        &__title {
          font-size: 30px;
          line-height: 30px;
          margin-bottom: 530px;
        }
      }
      &__right {
        &__img {
          width: 530px;
          height: 480px;
          top: 150px;
          .ai-img {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    .showcase-container {
      padding: 30px 0;
      &__left {
        &__title {
          font-size: 22px;
          line-height: 25px;
          margin-bottom: 400px;
        }
      }
      &__right {
        &__img {
          width: 430px;
          height: 380px;
          top: 120px;
          .abs-title {
            h1 {
              font-size: 13px;
              line-height: 15px;
            }
          }
          .ai-img {
            width: 38px;
            height: 38px;
          }
        }
      }
    }
  }
  @media (max-width: 400px) {
    .showcase-container {
      &__left {
        &__title {
          margin-bottom: 350px;
        }
      }
      &__right {
        &__img {
          width: 100%;
          height: 45%;
          top: 120px;
          .abs-title {
            h1 {
              font-size: 13px;
              line-height: 15px;
            }
          }
          .ai-img {
            width: 38px;
            height: 38px;
          }
        }
      }
    }
  }
`;
