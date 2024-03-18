import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 100%;
    margin: 50px 0;
  }
  @media (max-width: 900px) {
    .tt {
      width: 100%;
    }
    img {
      height: 500px;
    }
  }
  @media (max-width: 700px) {
    img {
      height: 100%;
      margin: 15px 0;
    }
  }
`;
