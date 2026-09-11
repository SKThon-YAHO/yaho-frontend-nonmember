import styled from "styled-components";
import { CheckCircle2 } from "lucide-react";

function UsageEndPage() {
  return (
    <Container>
      <Content>
        <IconWrapper>
          <CheckCircle2 size={48} strokeWidth={1.8} />
        </IconWrapper>

        <Title>이미 상품을 수령하셨습니다</Title>

        <Description>
          최근 설문 참여 기록이 확인되었어요.
          <br />
          이용해주셔서 감사합니다.
        </Description>
      </Content>
    </Container>
  );
}

export default UsageEndPage;

const Container = styled.main`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;
  box-sizing: border-box;

  background: #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

const IconWrapper = styled.div`
  width: 88px;
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  border-radius: 50%;

  background: #edf4ff;
  color: #4c7ff0;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 22px;
  font-weight: 700;

  color: #222631;
`;

const Description = styled.p`
  margin: 12px 0 0;

  font-size: 14px;
  line-height: 1.7;

  color: #9a9fa9;
`;
