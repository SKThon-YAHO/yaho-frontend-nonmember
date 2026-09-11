import styled from "styled-components";

function UsagePage() {
  return (
    <Container>
      <h1>시작페이지</h1>
    </Container>
  );
}

export default UsagePage;

const Container = styled.main`
  width: 100%;
  min-height: 770px;
  padding: 24px 20px;

  background: #ffffff;

  @media (max-width: 390px) {
    min-height: 100dvh;
  }
`;
