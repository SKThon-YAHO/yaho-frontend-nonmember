import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import PrimaryButton from "../../components/Button/PrimaryButton";

import Logo from "../../assets/images/logo_image.png";
import { Check } from "lucide-react";

function UsageEndPage() {
  const navigate = useNavigate();
  const { toilet_code } = useParams();

  const handleEndUsage = () => {
    navigate(`/guest/${toilet_code}/survey`);
  };

  return (
    <Container>
      <LogoImage src={Logo} alt="Qlean" />

      <Content>
        <IconCircle>
          <Check size={34} strokeWidth={2.6} color="#4C7FF0" />
        </IconCircle>

        <Title>화장실을 이용 중이에요</Title>

        <Description>
          이용이 끝나면 아래 버튼을 눌러주세요.
          <br />
          간단한 이용 후기로 이어집니다.
        </Description>
      </Content>

      <BottomArea>
        <PrimaryButton onClick={handleEndUsage}>이용 종료하기</PrimaryButton>
      </BottomArea>
    </Container>
  );
}

export default UsageEndPage;

const Container = styled.main`
  width: 100%;
  min-height: 770px;

  padding: 32px 24px 24px;

  display: flex;
  flex-direction: column;

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

  padding-bottom: 60px;
`;

const IconCircle = styled.div`
  width: 72px;
  height: 72px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 28px;

  background: #edf4ff;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 22px;
  font-weight: 700;

  color: #222631;
`;

const Description = styled.p`
  margin: 14px 0 0;

  color: #8c929f;

  font-size: 14px;
  line-height: 1.6;
`;

const BottomArea = styled.div`
  width: 100%;
`;
