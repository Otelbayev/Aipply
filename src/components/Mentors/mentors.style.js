import styled from "styled-components";
import arrow from "../../assets/icons/arrow.svg?react";

export const Container = styled.div`
  margin: 50px 0;
  .mentors {
    &__title {
      font-weight: 700;
      font-size: 40px;
      background: linear-gradient(270.8deg, #4d4d4f 35.16%, #343537 100%);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      margin-bottom: 30px;
    }
    .mentors-item {
      padding: 0 5px;
      outline: none;
      img {
        width: 100%;
      }
    }
    &__btn {
      text-align: center;
      padding: 20px 0;
      button {
        background: transparent;
        border: none;
        margin: 0 5px;
      }
    }
  }
`;

export const Icons = styled.div``;

Icons.Prev = styled(arrow)`
  @media (max-width: 750px) {
    width: 30px;
    height: 30px;
  }
`;
Icons.Next = styled(arrow)`
  transform: rotate(180deg);
  @media (max-width: 750px) {
    width: 30px;
    height: 30px;
  }
`;
