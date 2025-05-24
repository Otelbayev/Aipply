import styled from "styled-components";

const Test = () => {
  return (
    <Container>
      <iframe
        src="https://wordwall.net/embed/7c700426bbb340989588aaf4e9779e72?themeId=62&templateId=5&fontStackId=0"
        frameborder="0"
      ></iframe>
    </Container>
  );
};

export default Test;

const Container = styled.div`
  iframe {
    width: 100%;
    min-height: 100dvh;
  }
`;
