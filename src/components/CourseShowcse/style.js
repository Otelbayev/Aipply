import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .course-showcase {
    padding: 100px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    &__left {
      width: 50%;
      &--title {
        font-size: 60px;
      }
      &--desc {
        color: #8ca2c0;
        font-size: 20px;
        margin: 20px 0;
      }
    }
    &__right {
      width: 50%;
      max-width: 400px;
      object-fit: cover;
      animation: shaking 1s infinite alternate ease-in-out;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .course-showcase {
      padding: 70px 0 10px;
      &__left {
        width: 60%;
        &--title {
          font-size: 45px;
        }
        &--desc {
          margin: 10px 0;
          font-size: 16px;
        }
      }
      &__right {
        width: 40%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .course-showcase {
      flex-direction: column-reverse;
      gap: 10px;
      &__left {
        width: 100%;
        &--title {
          font-size: 35px;
        }
      }
      &__right {
        width: 50%;
      }
    }
  }

  @keyframes shaking {
    from {
      transform: translateY(10px);
    }
    to {
      transform: translateY(-10px);
    }
  }
`;
