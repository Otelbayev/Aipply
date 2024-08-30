import styled from "styled-components";

export const Container = styled.div`
  margin: 50px auto;
  width: 900px;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__list {
      &__item {
        font-size: 20px;
        color: #0000b0;
        font-weight: 500;
        margin: 5px 0;
      }
      &__title {
        color: #0000b0;
        font-size: 20px;
        font-weight: 500;
        margin: 10px;
        transform: translateX(-35px);
      }
    }
    &__title {
      text-align: center;
      font-family: Gilroy;
      font-size: 28px;
      font-weight: 700;
      background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
      background-clip: text;
      color: transparent;
      margin: 15px auto;
    }
    &__min-title {
      color: #0000b0;
      font-weight: 500;
      font-size: 20px;
      text-align: center;
      margin: 10px auto;
      padding-top: 10px;
    }
    &__call {
      color: #0000b0;
      font-size: 18px;
      padding: 10px 0;
      font-weight: 600;
    }
    &__phone {
      color: #0000b0;
      font-size: 25px;
      font-weight: 700;
      text-decoration: none;
    }
    &__checkbox-wrap {
      width: 90%;
      margin: 15px 0;
      &__checkbox {
        /* color: #0000b0; */
        font-size: 16px;
      }
    }
    &__form {
      margin: 15px 0;
      padding: 15px;
      border: 1px solid rgba(0, 0, 255, 0.4);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 60%;
      &__input {
        outline: none;
        border: 0.71px solid #9b9b9b;
        width: 100%;
        border-radius: 4px;
        padding: 10px 0 10px 15px;
        font-size: 17px;
        &::placeholder {
          font-family: Gilroy;
          font-size: 17px;
          font-weight: 400;
          color: #6d6d6d;
        }
        &:focus {
          border: 1px solid #0808ff;
          &::placeholder {
            color: #0808ff;
          }
        }
      }
      &__button {
        width: 100%;
        border-radius: 5px;
        border: none;
        background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
        padding: 12px 20px;
        font-family: DM Sans;
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        transition: 0.3s;
        &:hover {
          box-shadow: 0 0 10px #02a5e0;
        }
        &:active {
          transform: scale(0.97);
          opacity: 0.8;
        }
      }
    }
    &__link {
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 10px 0;
      text-decoration: none;

      &__icon {
        width: 30px;
      }
      &__title {
        font-size: 20px;
        font-weight: 600;
      }
    }
    &__btns {
      margin: 15px 0;
      display: flex;
      align-items: center;
      gap: 5px;
      .btn {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 16px;
        font-weight: 500;

        cursor: pointer;
        color: #fff;

        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        color: white;
        box-shadow: 0 0 20px #eee;
        border-radius: 10px;

        &:hover {
          background-position: right center; /* change the direction of the change here */
          color: #fff;
          text-decoration: none;
        }
      }
      &--next {
        padding: 8px 20px;
        background-image: linear-gradient(
          to right,
          #24c6dc 0%,
          #514a9d 51%,
          #24c6dc 100%
        );
        border: none;
      }
      &--back {
        padding: 7px 20px;
        background: #fff;
        border: 1px solid rgba(0, 0, 255, 0.3);
      }
    }
  }
  @media screen and (max-width: 1000px) {
    margin: 10px auto;
    width: 95%;
  }
  @media screen and (max-width: 500px) {
    .content {
      &__logo {
        height: 70px;
      }
      &__form {
        width: 90%;
      }
    }
  }
`;
