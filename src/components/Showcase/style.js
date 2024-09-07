import styled from "styled-components";
import bg from "../../assets/images/bg-showcase.png";

export const Container = styled.div`
  min-height: calc(100dvh - 64px);
  background: url("${bg}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  .showcase-container {
    &__left {
      width: 60%;
      &__title {
        font-family: Gilroy;
        font-size: 50px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 40px;
      }
    }
  }
  
  @media screen and (max-width: 900px) {
    background-position: 35%;
    .showcase-container {
      &__left {
        width: 100%;
      &__title{
        font-size: 40px;

      }
      }
    }
  }
  @media screen and (max-width: 700px) {
    min-height: calc(100dvh - 54px);
    .showcase-container {
      &__left {
        width: 100%;
      &__title{
        font-size: 30px;
        text-align: center;
        width: 100%;

      }
      }
    }
  }
`;
