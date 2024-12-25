import styled from "styled-components";

export const Container = styled.div`
  margin: 60px 0 100px;
  .about-head {
    display: flex;
    gap: 50px;
    margin: 20px 0;
    &__img {
      width: 30%;
      img {
        max-width: 300px;
        max-height: 300px;
        width: 100%;
        height: 100%;
      }
    }
    &__right {
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      &__txt {
        font-size: 30px;
        font-weight: 500;
        color: #242424;
      }
    }
  }
  .about-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 5px;
    img,
    video {
      width: 33%;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  @media (max-width: 1000px) {
    .about-title {
      width: 100%;
      font-size: 30px;
      line-height: 35px;
    }
    .about-head {
      &__right {
        &__txt {
          font-size: 22px;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .about-body {
      img,
      video {
        width: 49.5%;
        height: auto;
      }
    }
  }
  @media (max-width: 750px) {
    .about-head {
      flex-direction: column;
      gap: 10px;
      &__img {
        width: 100%;
        img {
          width: 40%;
        }
      }
      &__right {
        width: 100%;
      }
    }
  }
  @media (max-width: 550px) {
    .about-body {
      img,
      video {
        width: 100%;
      }
    }
  }
`;
