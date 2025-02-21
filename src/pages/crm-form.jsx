import styled from "styled-components";

const CrmForm = () => {
  return (
    <Container>
      <iframe src="https://forms.amocrm.ru/rdxdwvv" frameborder="0"></iframe>
    </Container>
  );
};

export default CrmForm;

const Container = styled.div`
  iframe {
    width: 100%;
    min-height: 100dvh;
  }
`;
