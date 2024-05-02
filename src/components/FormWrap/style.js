import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  .banner {
    background: #f3f8ff;
    border-radius: 20px;
    padding: 50px;
    margin-bottom: 30px;
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
      gap: 50px;
      &__img {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
    grid-gap: 30px;
    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-template-rows: 400px auto;
      grid-gap: 15px;
    }
  }
  @media (max-width: 1024px) {
    grid-gap: 10px;
    .banner {
      margin-bottom: 25px;
      padding: 20px;
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

export const Left = styled.img`
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 20px;
  box-shadow: 0px 3.604588747024536px 33.342445373535156px 0px #0000001a;
  @media screen and (max-width: 800px) {
    grid-row: 1/2;
  }
`;

export const Right = styled.div`
  grid-column: 2/3;
  @media screen and (max-width: 800px) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;
