import styled from "styled-components";

export const Container = styled.div`
  .banner {
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    box-shadow: 0px 3.6px 33.34px 0px #0000001a;
    background: #f3f8ff;
    border-radius: 30px;
    padding: 45px;
    &__text {
      font-size: 34px;
      color: #444444;
      font-weight: 700;
    }
    &__img {
      width: auto;
    }
  }

  @media screen and (max-width: 992px) {
    .banner {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 768px) {
    .banner {
      gap: 10px;
      padding: 20px;
      &__text {
        font-size: 20px;
      }
    }
  }
`;
