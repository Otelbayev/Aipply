import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__left {
      &--title {
        font-weight: 700;
        font-size: 61px;
      }
      &--form {
        margin-top: 30px;
        background: #f3f8ff;
        backdrop-filter: blur(10px);
        border-radius: 30px;
        padding: 20px 30px;
        width: 450px;
        div {
          text-align: center;
          color: #444444;
          font-size: 36px;
          font-weight: 700;
        }
        button {
          margin-top: 30px;
          background: linear-gradient(271.13deg, #02a5e0 19.32%, #0000b0 100%);
          text-align: center;
          width: 100%;
          border: none;
          color: #fff;
          font-size: 20px;
          font-weight: 400;
          border-radius: 4px;
          padding: 15px;
        }
      }
    }
    &__right {
      width: 450px;
    }
  }

  @media screen and (max-width: 992px) {
    .bottom {
      &__left {
        &--title {
          font-size: 40px;
        }
        &--form {
          width: 100%;

          div {
            font-size: 34px;
          }
          button {
            font-size: 18px;
          }
        }
      }
      &__right {
        width: 400px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .bottom {
      flex-direction: column;
      &__left {
        &--title {
          text-align: center;
          font-size: 26px;
        }
      }
      &__right {
        width: 100%;
      }
    }
  }
`;
