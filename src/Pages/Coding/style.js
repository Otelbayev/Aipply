import styled, { css } from "styled-components";

const flex = css`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Container = styled.div`
  background: lightcyan;
  .page1,
  .page2,
  .page3,
  .page4 {
    ${flex}
  }
  .list {
    li {
      font-size: 20px;
      color: #0000b0;
      font-weight: 500;
      margin: 5px 0;
    }
  }
  .min-title {
    color: #0000b0;
    font-weight: 500;
    font-size: 20px;
  }
  .checkbox {
    color: #0000b0;
    font-size: 16px;
  }
  .page4-footer {
    width: 500px;
  }
  .page4-form {
    background: #fff;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 10px #fff;
  }
`;
