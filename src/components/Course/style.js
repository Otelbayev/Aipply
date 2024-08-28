import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #d6d6d6;
  border-radius: 12px;
  padding: 20px;
  .course-content {
    /* min-height: 650px; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    &__img {
      height: 157px;
      /* width: 157px;
      height: 157px; */
      /* width: 100%; */
    }
    &__title {
      background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
      background-clip: text;
      text-align: center;
      color: transparent;
      font-family: Gilroy;
      font-size: 30px;
      font-weight: 700;
      line-height: 34px;
      letter-spacing: 0.5px;
      padding: 15px 0;
      height: 100px;
    }
    &__data {
      margin-bottom: 30px;
      &__motiv {
        height: 50px;
        text-align: center;
        font-family: Gilroy;
        font-size: 16px;
        font-weight: 400;
        padding-top: 10px;
      }
      &__oy {
        margin-top: 30px;
        text-align: center;
      }
      &__item {
        font-family: Gilroy;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        span {
          font-family: Gilroy;
          font-weight: 600;
          padding-right: 5px;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .course-content {
      min-height: 600px;
    }
  }
  @media (max-width: 750px) {
    .course-content {
      min-height: 400px;
      &__img {
        width: 80px;
        height: 80px;
      }
      &__title {
        font-size: 25px;
      }
    }
  }
`;
