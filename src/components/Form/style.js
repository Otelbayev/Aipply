import styled, { css } from "styled-components";
import telegram from "../../assets/icons/telegram.svg?react";

export const Container = styled.form`
  box-shadow: ${({ $boxShadow }) =>
    $boxShadow === "true"
      ? "0px 3.604588747024536px 33.342445373535156px 0px #0000001a"
      : "none"};
  border: ${({ $border }) => ($border ? `1px solid ${$border}` : "none")};
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  background: ${({ $background }) => ($background ? $background : "none")};
  width: ${({ width }) => (width ? width : "100%")};
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 850px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    padding: 20px;
    border-radius: 15px;
  }
`;

export const Title = styled.div`
  font-family: Gilroy;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.7059179544448853px;
  text-align: left;
  color: ${({ color }) => (color ? color : "black")};
  padding-bottom: 5px;
`;

export const BigTitle = styled(Title)`
  color: ${({ color }) => (color ? color : "#444444")};
  font-size: 32px;
  text-align: ${({ $center }) => ($center === "false" ? "start" : "center")};
  @media (max-width: 1024px) {
    font-size: 25px;
  }
`;

export const Desc = styled.div`
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.7059179544448853px;
  padding: 5px 0 10px;
  color: ${({ color }) => (color ? color : "black")};
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 8px;
`;
export const Input = styled.input`
  outline: none;
  grid-column: ${({ $grid }) => $grid && $grid};
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
  @media (max-width: 750px) {
    padding: 8px 0 8px 12px;
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
    }
  }
`;
export const Button = styled.button`
  grid-column: 1/3;
  border-radius: 4px;
  border: none;
  font-family: Gilroy;
  font-size: 17px;
  font-weight: 400;
  width: 100%;
  line-height: 20px;
  letter-spacing: 0.7059179544448853px;
  color: #ffff;
  background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
  padding: 10px;
  transition: 0.1s;

  ${({ $loading }) =>
    $loading === true
      ? css`
          opacity: 0.5;
          cursor: no-drop;
        `
      : css`
          cursor: pointer;
          &:active {
            transform: scale(0.98);
            opacity: 0.9;
          }
        `}

  @media (max-width: 750px) {
    font-size: 16px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #0000b09f;
  }
  p {
    font-weight: 700;
    font-size: 25px;
    text-align: center;
  }
  .desc {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  @media (max-width: 800px) {
    gap: 10px;
    padding: 0px;
    img {
      width: 120px;
      height: 120px;
    }
    .desc {
      font-size: 16px;
    }
  }
`;

export const IconTelegram = styled(telegram)`
  width: 30px;
  height: 30px;
  margin-left: 5px;
`;
