import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  .comments {
    &__title {
      font-weight: 700;
      font-size: 40px;
      background: linear-gradient(270.8deg, #4d4d4f 35.16%, #343537 100%);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      margin-bottom: 20px;
    }
    &__body {
      overflow: hidden;
      background: white;
      white-space: nowrap;
      position: relative;
      &:before,
      &:after {
        position: absolute;
        top: 0;
        width: 50px;
        height: 100%;
        content: "";
        z-index: 2;
      }
      &:before {
        left: 0;
        background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
      }

      &:after {
        right: 0;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
      }
      &:hover .stop-anim {
        animation-play-state: paused;
      }
      .item1,
      .item2 {
        display: inline-block;
        img {
          padding: 0 5px;
          height: 125px;
        }
      }
      .item1 {
        animation: 35s slide infinite alternate linear;
      }
      .item2 {
        animation: 35s slide2 infinite alternate linear;
      }
    }
  }
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  @keyframes slide2 {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;
