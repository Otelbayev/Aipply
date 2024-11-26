import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  padding: 45px;
  background: linear-gradient(275.33deg, #02a5e0 19.32%, #0000b0 100%);
  border-radius: 30px;
  .partners {
    &__title {
      font-size: 40px;
      font-weight: 700;
      background: linear-gradient(
        270.84deg,
        rgba(255, 255, 255, 0.49) 18.06%,
        #ffffff 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    &__desc {
      margin: 30px 0;
      font-weight: 500;
      font-size: 23px;
      color: #fff;
    }
    &__icons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      &--item {
        align-self: center;
        justify-self: center;
        &:nth-child(1) {
          width: 200px;
        }
        &:nth-child(2) {
          width: 91px;
        }
        &:nth-child(3) {
          width: 200px;
        }
        &:nth-child(4) {
          width: 200px;
        }
        &:nth-child(5) {
          width: 200px;
        }
        &:nth-child(6) {
          width: 145px;
        }
        &:nth-child(7) {
          width: 200px;
        }
        &:nth-child(8) {
          width: 200px;
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    .partners {
      &__icons {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 25px;
    border-radius: 9px;
    .partners {
      &__title {
        font-size: 24px;
      }
      &__desc {
        font-size: 16px;
      }
      &__icons {
        grid-template-columns: 50% 50%;
        gap: 0;

        &--item {
          margin: 10px 0;
          object-fit: cover;
          &:nth-child(1) {
            width: 135px;
          }
          &:nth-child(2) {
            width: 90px;
          }
          &:nth-child(3) {
            width: 140px;
          }
          &:nth-child(4) {
            width: 112px;
          }
          &:nth-child(5) {
            width: 115px;
          }
          &:nth-child(6) {
            width: 120px;
          }
          &:nth-child(7) {
            width: 120px;
          }
          &:nth-child(8) {
            width: 129px;
          }
        }
      }
    }
  }
`;
