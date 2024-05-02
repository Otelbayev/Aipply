import styled, { css } from "styled-components";
import arrow from "../../../assets/icons/arrow.svg?react";

export const Container = styled.div`
  .modul-title {
    width: 100%;
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
  background: #f3f8ff;
  margin: 20px 0;
  border: 1px solid #313131;
  border-radius: 0%;
  padding: 20px 30px;
  border-radius: 30px;
  cursor: pointer;
  height: 120px;
  transition: all 0.5s;
  .item-top {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
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
    padding: 20px 0;
    &__title {
      color: #fff;
      visibility: hidden;
    }
  }
  ${({ id, name }) =>
    id === name &&
    css`
      border: none;
      background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
      height: 380px;
      cursor: default;
      .item-top {
        border-bottom: 1px solid #fff;
        cursor: pointer;
        div {
          color: #fff;
        }
      }
      .item-body {
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
