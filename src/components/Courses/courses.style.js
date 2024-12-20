import styled from "styled-components";

export const Container = styled.div`
  .courses-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  .courses {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    .course {
      border: 1px solid #d6d6d6;
      border-radius: 12px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 30px;
      &__title {
        font-size: 27px;
        font-weight: 700;
        text-align: center;
      }
      &__desc {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
      }
      &__month {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
      }
      &__icon {
        width: 150px;
      }
      &__button {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        padding: 15px;
        background: linear-gradient(271.4deg, #02a5e0 19.32%, #0000b0 100%);
        border: none;
        border-radius: 4px;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .courses {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    .courses {
      grid-template-columns: 1fr;
      &__icon {
        width: 120px;
      }
    }
  }
`;
