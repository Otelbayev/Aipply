import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  .why-title {
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 30px;
  }
  .why {
    display: grid;
    margin-bottom: 80px;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    &__item {
      display: flex;
      gap: 10px 20px;
      padding: 20px;
      border: 0.76px solid #0282d6;
      border-radius: 20px;
      &--icon {
        width: 127px;
        object-fit: cover;
      }
      &--title {
        font-size: 30px;
        font-weight: 600;
        padding-top: 15px;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .why {
      &__item {
        gap: 5px;
        &--title {
          font-size: 25px;
          padding: 5px 15px;
        }
        &--icon {
          width: 100px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .why {
      &__item {
        padding: 10px 15px;
        flex-direction: column;
        &--icon {
          width: 80px;
        }
        &--title {
          font-size: 18px;
          padding: 0;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
  }
`;
