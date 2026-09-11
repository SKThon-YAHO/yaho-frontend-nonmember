import styled from "styled-components";

function SurveyPage() {
  return (
    <Container>
      <h1>Survey</h1>
    </Container>
  );
}

export default SurveyPage;

const Container = styled.main`
  width: 100%;
  min-height: 770px;
  padding: 24px 20px;

  background: #ffffff;

  @media (max-width: 390px) {
    min-height: 100dvh;
  }
`;
