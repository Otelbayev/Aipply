import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Container = styled.div`
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  .page1,
  .page2,
  .page3,
  .page4 {
    ${flex}
    background:rgba(255,255,255,0.7);
    border: 1px solid rgba(0, 0, 255, 0.2);
    border-radius: 25px;
    width: 90%;
    max-height: calc(100dvh - 50px);
    backdrop-filter: blur(1px);
    padding: 30px 0;
    .logo {
      height: 60px;
    }
    button {
      margin-top: 20px;
      img {
        animation: spin 0.5s ease-in-out infinite alternate;
      }
    }
  }
  .list {
    li {
      font-size: 20px;
      color: #0000b0;
      font-weight: 500;
      margin: 5px 0;
    }
  }
  .title-page {
    text-align: center;
    font-family: Gilroy;
    font-size: 28px;
    font-weight: 700;
    margin: 10px 0;
    width: 60%;
    background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
    background-clip: text;
    color: transparent;
    margin: 0 auto;
  }
  .min-title {
    color: #0000b0;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    padding-top: 10px;
  }
  .checkbox {
    color: #0000b0;
    font-size: 16px;
  }
  .checkbox-wrap {
    width: 80%;
  }
  .page4 {
    gap: 20px;
  }
  .footer-form {
    height: 180px;
  }

  @media screen and (max-width: 750px) {
    .page1,
    .page2,
    .page3,
    .page4 {
      width: 100%;
      height: 100dvh;
      max-height: 100dvh;
      border-radius: 0;
      button {
        margin-top: 10px;
      }
    }
    .title-page {
      width: 90%;
    }
    .list {
      li {
        font-size: 18px;
      }
    }
    .page4 {
      form {
        width: 400px;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .page4 {
      form {
        width: 95%;
      }
    }
  }

  @keyframes spin {
    to {
      transform: translateX(10px);
    }
  }
`;
