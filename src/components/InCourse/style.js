import styled from "styled-components";

export const Container = styled.div`
  img,
  video {
    width: 100%;
  }

  .tt {
    padding: 20px 0;
  }
  @media (max-width: 900px) {
    .tt {
      width: 100%;
      font-size: 30px;
      line-height: 35px;
    }
  }
`;
