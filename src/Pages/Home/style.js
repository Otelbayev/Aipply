import styled from "styled-components";
import arrow from "../../assets/icons/arrow.svg?react";

export const Container = styled.div``;

export const WhyContainer = styled.div`
  margin: 80px 0 50px;
  @media (max-width: 700px) {
    margin: 20px 0;
  }
`;

WhyContainer.Main = styled.div`
  margin-top: 30px;
`;

export const Courses = styled.div``;

Courses.Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    cursor: pointer;
    background: transparent;
    margin: 0 10px;
    border: none;
    transition: 0.2s;
    &:active {
      opacity: 0.5;
      transform: scale(0.9);
    }
  }
`;

Courses.Main = styled.div`
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
`;
Courses.Item = styled.div`
  padding: 0 10px;
  width: 33.33333%;
  margin: 10px 0;
  @media screen and (max-width: 930px) {
    width: 50%;
  }
  @media screen and (max-width: 630px) {
    width: 100%;
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

export const Mentors = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 700px) {
    .title-mentor {
      width: 80%;
    }
  }
`;

Mentors.Main = styled.div`
  box-shadow: 0px 4px 52.900001525878906px 0px #0000001a;
`;
Mentors.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  button {
    cursor: pointer;
    background: transparent;
    margin: 0 10px;
    border: none;
    transition: 0.2s;
    &:active {
      opacity: 0.5;
      transform: scale(0.9);
    }
  }
`;
Mentors.Item = styled.div`
  padding: 0 5px;
`;

export const Partners = styled.div`
  margin: 80px 0;
  .partners {
    background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
    border-radius: 30px;
    padding: 50px;

    &__left {
      &__title {
        font-family: Gilroy;
        font-size: 43px;
        font-weight: 700;
        line-height: 53px;
        letter-spacing: 0.5px;
        text-align: left;
        background: linear-gradient(
          278.32deg,
          rgba(255, 255, 255, 0.49) 18.06%,
          #ffffff 107.06%
        );
        background-clip: text;
        color: transparent;
      }
      &__desc {
        font-family: Gilroy;
        font-size: 25px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0.7833547592163086px;
        text-align: left;
        color: #fff;
        padding-top: 40px;
      }
    }
    &__right {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      gap: 50px;

      img:nth-child(1) {
      }
      img:nth-child(2) {
      }
      img:nth-child(3) {
        background: #fff;
        padding: 10px;
        border-radius: 10px;
        width: 200px;
      }
      img:nth-child(4) {
        width: 150px;
        border-radius: 3px;
      }
      img:nth-child(5) {
      }
      img:nth-child(6) {
      }

      img:nth-child(7) {
        width: 150px;
        border-radius: 3px;
      }
      img:nth-child(8) {
        width: 150px;
        border-radius: 3px;
        background: #fff;
        padding: 10px;
      }
    }
  }
  @media (max-width: 1024px) {
    margin: 50px 0;
    .partners {
      padding: 30px;
      &__left {
        &__title {
          font-size: 32px;
          line-height: 35px;
        }
        &__desc {
          font-size: 20px;
          line-height: 25px;
        }
      }
    }
  }
  @media (max-width: 825px) {
    .partners {
      &__left {
        &__desc {
          padding-top: 10px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .partners {
      padding: 25px;
      &__left {
        &__title {
          font-size: 25px;
          line-height: 25px;
        }
        &__desc {
          font-size: 16px;
          line-height: 20px;
        }
      }
      &__right {
        img:nth-child(1) {
        }
        img:nth-child(2) {
        }
        img:nth-child(3) {
          width: 150px;
        }
        img:nth-child(4) {
          width: 120px;
        }
        img:nth-child(5) {
          width: 150px;
        }
        img:nth-child(6) {
        }

        img:nth-child(7) {
          width: 130px;
          border-radius: 3px;
        }
        img:nth-child(8) {
          width: 130px;
        }
      }
    }
  }
`;

export const Bottom = styled.div`
  margin: 80px 0;
  .bottom {
    display: flex;
    align-items: center;
    &__left {
      width: 60%;
      &__title {
        font-family: Gilroy;
        font-size: 63px;
        font-weight: 700;
        line-height: 78px;
        letter-spacing: 0.7364411950111389px;
        text-align: left;
        background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
        background-clip: text;
        color: transparent;
        margin-bottom: 30px;
        div {
          white-space: nowrap;
        }
      }
    }
    &__right {
      width: 40%;
      img {
        width: 420px;
        height: 450px;
      }
    }
  }

  @media (max-width: 1024px) {
    margin: 40px 0;
    .bottom {
      &__left {
        &__title {
          font-size: 45px;
          line-height: 45px;
          margin-bottom: 0;
          padding-bottom: 20px;
        }
      }
      &__right {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media (max-width: 850px) {
    .bottom {
      &__left {
        &__title {
          font-size: 32px;
          line-height: 32px;
        }
      }
    }
  }
  @media (max-width: 700px) {
    .bottom {
      flex-direction: column;
      &__left {
        width: 100%;
        &__form {
          padding: 0 20px;
        }
        &__title {
          text-align: center;
        }
      }
      &__right {
        width: 50%;
      }
    }
  }
`;

export const Comments = styled.div`
  margin: 20px 0;
  height: 550px;
  div {
    padding: 0 5px;
    img {
      width: 100%;
      max-height: 550px;
      border-radius: 3px;
    }
  }

  @media screen and (max-width: 800px) {
    div {
      padding: 0 1px;
    }
  }

  @media screen and (max-width: 600px) {
    height: 600px;
    div {
      padding: 0 2px;
      img {
        max-height: 650px;
      }
    }
  }
`;
