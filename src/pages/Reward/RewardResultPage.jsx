import styled from "styled-components";

import RewardCard from "../../components/Reward/RewardCard";
import LoseCard from "../../components/Reward/LoseCard";

import { rewardDummy } from "../../data/rewardDummy";

export default function RewardResultPage() {
  // 여기만 바꾸면서 테스트
  const reward = rewardDummy.tissue;

  return (
    <Container>
      {reward.type === "reward" ? <RewardCard reward={reward} /> : <LoseCard />}

      <ThankYou>설문에 참여해주셔서 감사합니다.</ThankYou>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 20px;

  box-sizing: border-box;

  background: #f3f6fa;
`;

const ThankYou = styled.p`
  margin: 20px 0 0;

  font-size: 17px;

  color: #172033;

  text-align: center;
`;
