import styled from "styled-components";
import bg from "../../assets/images/bg.png";
import bg1 from "../../assets/images/mobile-bg.png";

export const Container = styled.div`
  background-image: url(${bg});
  background-position: top right;
  box-shadow: inset 0px -100px 100px white;
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100dvh - 67px);
  display: flex;
  align-items: center;
  justify-content: center;
  .showcase {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    &__title {
      font-size: 47px;
      font-weight: 700;
    }
    &__form {
      width: 450px;
    }
  }

  @media screen and (max-width: 992px) {
    .showcase {
      width: 90%;
    }
  }
  @media screen and (max-width: 768px) {
    background-position: 100%;
    .showcase {
      width: 100%;
      padding: 0 20px;
      height: calc(100dvh - 56px);
      justify-content: space-between;
      &__form {
        width: 100%;
        margin-bottom: 20px;
      }
      &__title {
        text-align: center;
        font-size: 34px;
        margin-top: 40px;
      }
    }
  }
  @media screen and (max-width: 576px) {
    background-image: url(${bg1});
    box-shadow: none;
    background-position: center;
    .showcase {
      &__title {
        font-size: 24px;
      }
    }
  }
`;
