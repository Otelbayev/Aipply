import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid #606060;
  border-bottom: ${({ $last }) => $last && "1px solid #606060"};
  padding: 20px 0;
  .why-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    &__img {
      width: 150px;
      height: 150px;
    }
    &__title {
      width: 38%;
      font-family: Gilroy;
      font-size: 37px;
      font-weight: 600;
      line-height: 45px;
      letter-spacing: 0.5920634865760803px;
      text-align: left;
      background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
      background-clip: text;
      color: transparent;
    }
    &__desc {
      width: 50%;
      font-family: Gilroy;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.7833547592163086px;
      text-align: left;
      color: #444444;
    }
  }
  @media (max-width: 900px) {
    padding: 10px 0;
    .why-content {
      &__img {
        width: 100px;
        height: 100px;
      }
      &__title {
        font-size: 25px;
        line-height: 30px;
      }
      &__desc {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  @media (max-width: 700px) {
    border-bottom: none;
    border-top: none;
    border: 1px solid #0000001a;
    box-shadow: 0px 4px 37px 0px #0000001a;
    border-radius: 12px;
    margin: 10px 0;
    .why-content {
      flex-direction: column;
      gap: 10px;
      padding: 30px;
      &__img {
      }
      &__title {
        width: 100%;
        margin-bottom: 0;
        text-align: center;
      }
      &__desc {
        width: 100%;
        text-align: center;
      }
    }
  }
  @media (max-width: 500px) {
    .why-content {
      padding: 15px 25px;
      gap: 5px;
      &__title {
        font-size: 22px;
      }
      &__desc {
        font-size: 14px;
      }
    }
  }
`;
