import styled from "styled-components";

export const Container = styled.div`
  /* min-height: calc(100dvh - 64px); */
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .showcase-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    &__left {
      width: 50%;
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
        /* width: 60%; */
      }
    }
    &__right {
      width: 50%;
      &__img {
        width: 750px;
        height: 650px;
        position: absolute;
        top: -50px;
        right: -100px;
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
      &__grand {
        width: 550px;
        /* height: 400px; */
        border-radius: 15px;
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
    .showcase-container {
      flex-direction: column-reverse;
      /* padding: 50px 0; */
      &__left {
        width: 100%;
        margin-bottom: 500px;
        &__title {
          width: 100%;
          text-align: center;
        }
      }
      &__right {
        width: 100%;
        text-align: center;
        &__img {
          top: auto;
          bottom: 0;
          right: 50%;
          transform: translateX(48%);
        }
        &__grand {
          width: 90%;
        }
      }
    }
  }
  @media (max-width: 700px) {
    .showcase-container {
      &__left {
        &__title {
          font-size: 30px;
          line-height: 30px;
        }
      }
      &__right {
        &__img {
          width: 530px;
          height: 480px;
          .ai-img {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    margin: 0;
    .showcase-container {
      &__left {
        margin-bottom: 400px;
        &__title {
          font-size: 22px;
          line-height: 25px;
        }
      }
      &__right {
        &__img {
          width: 430px;
          height: 380px;
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
        margin-bottom: 350px;
        &__title {
        }
      }
      &__right {
        &__img {
          width: 100%;
          height: 45%;
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
