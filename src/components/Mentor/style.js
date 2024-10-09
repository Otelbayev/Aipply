import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 4px 52.900001525878906px 0px #0000001a;
  border: 1px solid #425ed5;
  /* padding: 18px; */
  border-radius: 12px;
  min-height: 250px;
  .mentor-content {
    &__top {
      display: flex;
      align-items: center;
      gap: 15px;
      &__img {
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid lightgray;
        }
      }
      &__name {
        font-family: Gilroy;
        font-size: 20px;
        font-weight: 700;
        line-height: 27px;
        letter-spacing: 0em;
        color: #393939;
      }
      &__job {
        font-family: Gilroy;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #393939;
      }
    }
    &__desc {
      font-family: Gilroy;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      padding-top: 15px;
    }
  }
  .only-image {
    border-radius: 12px;
    width: 100%;
  }
`;
