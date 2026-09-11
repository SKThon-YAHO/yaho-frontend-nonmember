import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export default function RewardLoadingPage() {
  const navigate = useNavigate();
  const { toilet_code } = useParams();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        navigate(`/${toilet_code}/reward/result`, {
          replace: true,
        });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [progress, navigate, toilet_code]);

  return (
    <Container>
      <Content>
        <Gift>🎁</Gift>

        <Title>두구두구두구...</Title>

        <Description>
          과연 어떤 선물일까요?
          <br />
          두근두근 기대하세요!
        </Description>

        <ProgressWrapper>
          <ProgressBar>
            <ProgressFill $progress={progress} />
          </ProgressBar>

          <ProgressText>선물 추첨 중...</ProgressText>
        </ProgressWrapper>
      </Content>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  min-height: 100%;

  display: flex;
  justify-content: center;

  background: #ffffff;
`;

const Content = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 180px;

  box-sizing: border-box;
`;

const Gift = styled.div`
  margin-bottom: 20px;

  font-size: 48px;
  line-height: 72px;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 2px;

  color: #1e293b;

  text-align: center;
`;

const Description = styled.p`
  margin: 20px 0 20px;

  font-size: 15px;
  line-height: 25px;
  font-weight: 400;

  color: #64748b;

  text-align: center;
`;

const ProgressWrapper = styled.div`
  width: 180px;

  margin-top: 12px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;

  overflow: hidden;

  background: #e2e8f0;

  border-radius: 99px;
`;

const ProgressFill = styled.div`
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;

  background: #fde047;

  border-radius: 99px;

  transition: width 0.05s linear;
`;

const ProgressText = styled.p`
  width: 100%;

  margin: 20px 0 0;

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 1px;

  color: #cbd5e1;

  text-align: center;
`;
