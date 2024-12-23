import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  .then-body {
    &__item {
      display: flex;
      align-items: center;
      gap: 25px;
      &__img {
        width: 140px;
        height: 140px;
      }
      &__title {
        font-size: 30px;
        font-weight: 500;
      }
    }
  }
  @media (max-width: 1100px) {
    .then {
      width: 100%;
    }
    .then-body {
    }
  }
  @media (max-width: 850px) {
    .then {
      font-size: 30px;
      line-height: 35px;
    }
    .then-body {
      &__item {
        gap: 10px;
        &__img {
          width: 100px;
          height: 100px;
        }
        &__title {
          font-size: 25px;
        }
      }
    }
  }
  @media (max-width: 550px) {
    .then {
      font-size: 30px;
      margin-bottom: 20px;
    }
    .then-body {
      &__item {
        gap: 10px;
        &__img {
          width: 80px;
          height: 80px;
        }
        &__title {
          font-size: 18px;
        }
      }
    }
  }
`;
