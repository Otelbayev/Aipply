import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
  .statistic-title {
    width: 70%;
  }
  .statistic-content {
    margin: 30px 0 15px;
    background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
    border-radius: 30px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 30px;
    gap: 30px;
    &__left {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-columns: repeat(6 1fr);
      width: 55%;
      gap: 15px;
      &__item {
        border-radius: 20px;
        padding: 25px 35px;
        text-align: center;
        border: 1px solid;
        border: 1.21px solid rgba(255, 255, 255, 0.2);

        font-size: 19px;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        color: #ffffffa8;
        &__count {
          font-size: 50px;
          color: #fff;
          font-weight: 700;
        }
      }
      .grid-first {
        grid-row: 1/4;
      }
      .grid-second {
        grid-row: 4/7;
      }
      .grid-thrid {
        grid-row: 1/3;
      }
      .grid-fourth {
        grid-row: 3/5;
      }
      .grid-fifth {
        grid-row: 5/7;
      }
    }
    &__right {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 45%;
      &__desc {
        background: #f3f8ff;
        border-radius: 20px;
        padding: 30px;
        height: 50%;

        font-size: 22px;
        font-weight: 500;
        letter-spacing: 0.7833547592163086px;
        text-align: left;
        color: #444444;
      }
    }
  }
  .statistic-bottom {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 10px;
    &__left {
      width: 50%;
      background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
      padding: 30px;
      border-radius: 25px;
      &__title {
        font-size: 32px;
        font-weight: 600;
        color: #fff;
      }
      &__img {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-top: 30px;
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
    &__right {
      width: 50%;
      border-radius: 25px;
      border: 2px solid #0000f0;
      padding: 30px;
      &__title {
        font-size: 40px;
        font-weight: 600;
        background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
        background-clip: text;
        color: transparent;
      }
      &__content {
        display: flex;
        align-items: flex-start;
        margin-top: 25px;
        &__data {
          width: 45%;
          div {
            background: linear-gradient(
              278.99deg,
              #02a5e0 19.32%,
              #0000b0 105%
            );
            margin: 10px 0;
            padding: 5px 10px;
            border-radius: 13px;
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            width: fit-content;
          }
        }
        &__img {
          width: 55%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    .statistic-title {
      width: 100%;
      font-size: 30px;
      line-height: 35px;
    }
    .statistic-content {
      flex-direction: column;
      &__left {
        width: 100%;
      }
      &__right {
        width: 100%;
        flex-direction: row;
        &__desc {
          height: 100%;
          width: 50%;
        }
        &__form {
          width: 50%;
        }
      }
    }
    .statistic-bottom {
      flex-direction: column;
      &__left {
        width: 100%;
        &__title {
          font-size: 25px;
        }
      }
      &__right {
        width: 100%;
        &__title {
          font-size: 32px;
        }
      }
    }
  }
  @media (max-width: 800px) {
    margin: 10px 0;
    .statistic-content {
      &__left {
        grid-template-columns: 1fr;
        grid-template-columns: auto;
        .grid-first {
          grid-row: 1/2;
        }
        .grid-second {
          grid-row: 2/3;
        }
        .grid-thrid {
          grid-row: 3/4;
        }
        .grid-fourth {
          grid-row: 4/5;
        }
        .grid-fifth {
          grid-row: 5/6;
        }
      }
      &__right {
        flex-direction: column;
        &__desc {
          width: 100%;
        }
        &__form {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .statistic-content {
      padding: 20px;
    }
    .statistic-bottom {
      &__left {
        padding: 20px;
        &__img {
          img {
            width: 50px;
            height: 50px;
          }
        }
      }
      &__right {
        padding: 20px;
        &__title {
          font-size: 25px;
        }
        &__content {
          &__data {
            div {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

export const Progress = styled.div`
  .progress-bar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: ${({ $pr }) =>
      `conic-gradient(#fff ${$pr}%, rgba(255, 255, 255, 0.2) 0)`};
    &__abs {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(0, 0, 200);

      font-size: 39px;
      font-weight: 600;
      text-align: center;
      color: #fff;
    }
  }
`;
