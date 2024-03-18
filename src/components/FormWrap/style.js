import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  margin: 50px 0;
  .banner {
    grid-column: 1/4;
    background: #f3f8ff;
    border-radius: 20px;
    padding: 25px;
    border: 1px solid #d6d6d6;
    box-shadow: 0px 3.604588747024536px 33.342445373535156px 0px #0000001a;
    &__title {
      font-family: Gilroy;
      font-size: 32px;
      font-weight: 700;
      line-height: 39px;
      letter-spacing: 0.7833547592163086px;
      text-align: left;
      color: #444444;
      margin-bottom: 20px;
    }
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__img {
        width: 197px;
        height: 197px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    grid-gap: 10px;
    .banner {
      &__title {
        font-size: 25px;
        line-height: 30px;
      }
      &__content {
        gap: 10px;
        &__img {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
  @media (max-width: 830px) {
    grid-template-columns: 1fr;
    .banner {
      grid-column: 1/2;
      &__content {
        justify-content: space-around;
      }
    }
  }
  @media (max-width: 570px) {
    margin: 25px 0;
    .banner {
      &__title {
        font-size: 20px;
        line-height: 25px;
      }
      &__content {
        &__img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export const Right = styled.div`
  grid-column: 4/6;
  @media (max-width: 830px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;
