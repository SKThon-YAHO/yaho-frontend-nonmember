import styled from "styled-components";

import Logo from "../../assets/images/logo_image.png";

function CompletePage() {
  return (
    <Container>
      <LogoImage src={Logo} alt="Qlean" />

      <Content>
        <Title>시간내주셔서 감사합니다.</Title>

        <Description>
          보내주신 의견은 더 쾌적한 화장실을
          <br />
          만드는 데 소중하게 활용할게요.
        </Description>

        <SubText>이용이 종료되었습니다.</SubText>
      </Content>
    </Container>
  );
}

export default CompletePage;

const Container = styled.main`
  width: 100%;
  min-height: 770px;

  display: flex;
  flex-direction: column;

  padding: 32px 24px;

  background: #ffffff;

  @media (max-width: 390px) {
    min-height: 100dvh;
  }
`;

const LogoImage = styled.img`
  width: 92px;
  height: auto;

  object-fit: contain;
`;

const Content = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: center;

  padding-bottom: 70px;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 22px;
  font-weight: 700;

  color: #222631;
`;

const Description = styled.p`
  margin: 14px 0 0;

  font-size: 14px;
  line-height: 1.7;

  color: #8c929f;
`;

const SubText = styled.p`
  margin: 28px 0 0;

  font-size: 13px;
  line-height: 1.6;

  color: #b0b4bc;
`;
