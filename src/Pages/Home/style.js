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
    display: flex;
    align-items: center;
    &__left {
      width: 50%;
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
      width: 50%;
      &__item {
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
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
      &__right {
        .tstu {
          width: 200px;
          height: 45px;
        }
        .talim {
          width: 75px;
          height: 75px;
        }
        .sqb {
          width: 180px;
          height: 90px;
        }
        .itpark {
          width: 110px;
          height: 38px;
        }
        .selsil {
          width: 110px;
          height: 40px;
        }
        .inoria {
          width: 130px;
          height: 45px;
        }
      }
    }
  }
  @media (max-width: 825px) {
    .partners {
      flex-direction: column;
      &__left {
        width: 100%;
        &__desc {
          padding-top: 10px;
        }
      }
      &__right {
        width: 100%;
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
        .tstu {
          width: 150px;
          height: 35px;
        }
        .talim {
          width: 60px;
          height: 60px;
        }
        .sqb {
          width: 140px;
          height: 70px;
        }
        .itpark {
          width: 90px;
          height: 30px;
        }
        .selsil {
          width: 90px;
          height: 30px;
        }
        .inoria {
          width: 100px;
          height: 30px;
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
