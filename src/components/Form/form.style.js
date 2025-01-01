import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  .form {
    box-shadow: 0px 3.6px 33.34px 0px #0000001a;
    backdrop-filter: blur(10px);
    background: ${({ $bg }) => ($bg ? $bg : "rgba(255,255,255,0.4)")};
    border: 1px solid #f3f8ff33;
    padding: 30px;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title {
      font-weight: 700;
      font-size: 34px;
      padding-bottom: 10px;
      text-align: center;
    }
    &__desc {
      font-size: 15px;
      font-weight: 500;
    }
    &__button {
      background: linear-gradient(271.16deg, #02a5e0 19.32%, #0000b0 100%);
      padding: 15px;
      text-align: center;
      border: none;
      border-radius: 4px;
      width: 100%;
      color: #fff;
      font-weight: 400;
      font-size: 22px;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 576px) {
    .form {
      &__title {
        font-size: 28px;
      }
      &__desc {
        font-size: 12px;
      }
      &__button {
        font-size: 18px;
      }
    }
  }
`;
