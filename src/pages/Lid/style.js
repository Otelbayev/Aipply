import styled from "styled-components";

export const Container = styled.div`
  height: 100dvh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    width: 600px; //400
    &__title {
      font-weight: 700;
      font-size: 36px;
      padding: 20px 0;
      text-align: center;
      background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
      background-clip: text;
      color: transparent;
      font-family: "Inter", sans-serif;
    }
    &__min-title {
      text-align: center;
      padding-top: 10px;
    }
    &__profile {
      display: flex;
      align-items: center;
      margin: 20px 0;
      gap: 10px;
      &__logo {
        width: 80px; //50
        height: 80px;
        border-radius: 50%;
      }
      &__name {
        font-size: 30px; //20
        font-weight: 600;
        background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
        background-clip: text;
        color: transparent;
      }
    }
    &__list {
      list-style-type: none;
      margin-bottom: 20px;
      &__item {
        font-size: 20px; //16
        padding: 3px 0;
        font-weight: 500;
        background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
        background-clip: text;
        color: transparent;
      }
    }
    &__btns {
      margin: 15px 0;
      display: flex;
      align-items: center;
      gap: 10px;
      .btn {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
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
          background-position: right center;
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
        padding: 7px 10px;
        background: #fff;
        position: relative;
        $border: 5px;
        background: #fff;
        background-clip: padding-box;
        border: 1px solid transparent;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 255, 0.2);
        &:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
          margin: -1px;
          border-radius: inherit;
          background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
        }
      }
    }
    &__dark {
      text-align: center;
      font-family: "Inter", sans-serif;
      font-size: 28px;
      font-weight: 700;
      background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
      background-clip: text;
      color: transparent;
      margin: 15px auto;
    }
    &__course {
      .active {
        background: #0000b0;
        color: #fff;
      }
      &__item {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        font-size: 16px;
        margin: 5px 0;
        border: 1px solid rgba(0, 0, 255, 0.2);
        background-color: #fff;
        font-weight: 500;
        cursor: pointer;
        transition: 0.1s;
        &:hover {
          transform: scale(1.02);
        }
        &:active {
          transform: scale(0.98);
        }
      }
    }
    &__checkbox-wrap {
      width: 90%;
      margin: 15px 0;
      &__checkbox {
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
      width: 100%;
      &__input {
        outline: none;
        border: 0.71px solid #9b9b9b;
        width: 100%;
        border-radius: 4px;
        padding: 10px 0 10px 15px;
        font-size: 17px;
        &::placeholder {
          font-family: "Inter", sans-serif;
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
      justify-content: center;
      gap: 15px;
      margin: 10px 0;
      text-decoration: none;
      width: 280px;
      margin: 10px 0;
      padding: 8px 0;
      position: relative;
      $border: 5px;
      background: #fff;
      background-clip: padding-box;
      border: 1px solid transparent;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 255, 0.2);
      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -1px;
        border-radius: inherit;
        background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
      }

      &__icon {
        width: 30px;
      }
      &__title {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .content {
      width: 95%;
      &__profile {
        &__logo {
          width: 55px;
          height: 55px;
        }
        &__name {
          font-size: 22px;
        }
      }
      &__logo {
        height: 70px;
      }
      &__ &__form {
        width: 90%;
      }
      &__list {
        margin-left: 50px;
      }
      &__btns {
        margin: 5px 0;
      }
      &__title {
        font-size: 26px;
        margin: 8px 0;
      }
    }
  }
`;
