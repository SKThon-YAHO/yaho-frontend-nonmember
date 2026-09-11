import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import PrimaryButton from "../../components/Button/PrimaryButton";
import { startToiletUsage } from "../../api/guestApi";

import Logo from "../../assets/images/logo_image.png";
import { Check } from "lucide-react";

function UsageStartPage() {
  const navigate = useNavigate();
  const { toilet_code } = useParams();
  console.log("toilet_code:", toilet_code);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleStartUsage = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      setErrorMessage("");

      await startToiletUsage(toilet_code);

      navigate(`/${toilet_code}/usage`);
    } catch (error) {
      console.error(error);

      setErrorMessage("화장실 이용을 시작하지 못했습니다. 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <LogoImage src={Logo} alt="Qlean" />

      <Content>
        <IconCircle>
          <Check size={34} strokeWidth={2.6} color="#4C7FF0" />
        </IconCircle>

        <Title>화장실을 이용하시겠어요?</Title>

        <Description>
          아래 버튼을 누르면
          <br />
          화장실 이용을 시작할 수 있어요.
        </Description>
      </Content>

      <BottomArea>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <PrimaryButton onClick={handleStartUsage} disabled={isLoading}>
          {isLoading ? "이용을 준비하고 있어요..." : "이용 시작하기"}
        </PrimaryButton>
      </BottomArea>
    </Container>
  );
}

export default UsageStartPage;

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

const ErrorMessage = styled.p`
  margin: 0 0 12px;

  color: #e25353;

  font-size: 13px;
  text-align: center;
`;
