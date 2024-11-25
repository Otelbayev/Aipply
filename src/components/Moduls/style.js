import styled, { css } from "styled-components";
import arrow from "../../assets/icons/arrow.svg?react";

export const Container = styled.div`
  padding-bottom: 40px;
  .modul-title {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    .modul-title {
      font-size: 30px;
      line-height: 35px;
    }
  }
`;

export const Icons = styled.div``;

Icons.Bottom = styled(arrow)`
  width: 35px;
  height: 35px;
  transform: rotate(-90deg);
  ${({ id, name }) =>
    id === name &&
    css`
      transform: rotate(90deg);
      path {
        stroke: #fff;
      }
    `}
`;

export const Item = styled.div`
  transition: 0.3s;
  background-color: #f3f8ff;
  margin: 20px 0;
  border: 1px solid #313131;
  border-radius: 0%;
  padding: 20px 30px;
  border-radius: 30px;
  cursor: pointer;
  .item-top {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #313131;
      font-weight: 600;
    }
    &__count {
      font-size: 60px;
    }
    &__name {
      font-size: 30px;
    }
  }
  .item-body {
    max-height: 0;
    &__title {
      color: #fff;
      visibility: hidden;
      margin: 10px 0;
      font-size: 25px;
    }
  }
  ${({ id, name }) =>
    id === name &&
    css`
      border: none;
      background-color: #0000b0;
      cursor: default;
      .item-top {
        border-bottom: 1px solid #fff;
        cursor: pointer;
        div {
          color: #fff;
        }
      }
      .item-body {
        max-height: 1000px;
        margin-top: 10px;
        &__title {
          visibility: visible;
        }
      }
    `}

  @media (max-width:750px) {
    padding: 20px;
    .item-body {
      &__title {
        font-size: 20px;
      }
    }
    .item-top {
      height: 90px;
      &__count {
        font-size: 50px;
      }
      &__name {
        font-size: 25px;
      }
    }
  }
`;
