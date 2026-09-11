import styled from "styled-components";

export default function RewardCard({
  title = "랜덤 보상",
  description = "보상이 여기에 표시됩니다.",
}) {
  return (
    <Card>
      <RewardArea />

      <Title>{title}</Title>

      <Description>{description}</Description>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 28px 20px;

  background: #ffffff;

  border: 1px solid #e2e8f0;
  border-radius: 20px;

  box-sizing: border-box;

  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
`;

const RewardArea = styled.div`
  width: 120px;
  height: 120px;

  margin-bottom: 22px;

  background: #f8fafc;

  border: 2px dashed #cbd5e1;
  border-radius: 18px;
`;

const Title = styled.h2`
  margin: 0 0 8px;

  font-size: 20px;
  font-weight: 700;

  color: #1e293b;
`;

const Description = styled.p`
  margin: 0;

  font-size: 14px;

  color: #94a3b8;

  text-align: center;
`;
