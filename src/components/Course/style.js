import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #d6d6d6;
  border-radius: 12px;
  padding: 20px;
  .course-content {
    min-height: 650px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__img {
      width: 157px;
      height: 157px;
    }
    &__title {
      background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
      background-clip: text;
      color: transparent;
      font-family: Gilroy;
      font-size: 30px;
      font-weight: 700;
      line-height: 34px;
      letter-spacing: 0.5px;
      width: 75%;
      padding: 15px 0;
    }
    &__data {
      margin-bottom: 30px;
      &__item {
        font-family: Gilroy;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.5px;
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
