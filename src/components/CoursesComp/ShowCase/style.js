import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  /* height: calc(100dvh - 65px); */
  display: flex;
  align-items: center;
  justify-content: center;
  .course-showcase {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 70px;
    &__left {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 60%;
      &__title {
        font-family: Gilroy;
        font-size: 55px;
        font-weight: 700;
        background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
        background-clip: text;
        color: transparent;
        padding-bottom: 15px;
      }
      &__desc {
        font-family: DM Sans;
        font-size: 20px;
        font-weight: 400;
        color: #8ca2c0;
        padding: 20px 0 30px;
      }
    }
    &__right {
      width: 50%;
      img {
        height: 500px;
      }
    }
  }
  @media (max-width: 1160px) {
    height: auto;
    .course-showcase {
      &__left {
        width: 50%;
        &__title {
          font-size: 40px;
          line-height: 43px;
        }
      }
      &__right {
        width: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .course-showcase {
      flex-direction: column;
      gap: 50px;
      &__left {
        width: 100%;
        &__title {
          font-size: 40px;
          line-height: 43px;
        }
        &__desc {
          padding: 10px 0 20px;
        }
      }
      &__right {
        width: 70%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media (max-width: 700px) {
    .course-showcase {
      gap: 0;
      &__left {
        &__title {
          font-size: 30px;
          line-height: 33px;
          padding-bottom: 5px;
        }
      }
      &__right {
        width: 70%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
