import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #d6d6d6;
  border-radius: 12px;
  padding: 20px;
  height: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .course-title {
    background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
    background-clip: text;
    text-align: center;
    color: transparent;
    font-family: Gilroy;
    font-size: 28px;
    font-weight: 700;
  }
  .course-img {
    height: 150px;
  }
  .course-desc {
    font-family: Gilroy;
    font-size: 16px;
    font-weight: 400;
  }
  .course-date {
    background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
    background-clip: text;
    text-align: center;
    color: transparent;
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 400;
  }
  @media screen and (max-width: 630px) {
    height: 400px;
    .course-img {
      height: 120px;
    }
    .course-desc {
      padding: 10px 0;
    }
  }
`;
