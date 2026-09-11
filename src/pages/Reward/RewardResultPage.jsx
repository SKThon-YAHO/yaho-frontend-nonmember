import styled from "styled-components";

import RewardCard from "../../components/Reward/RewardCard";
import LoseCard from "../../components/Reward/LoseCard";

import { rewardMap } from "../../data/rewardMap";

export default function RewardResultPage() {
  const storedResult = sessionStorage.getItem("reward_result");

  const result = storedResult ? JSON.parse(storedResult) : null;

  if (!result) {
    return (
      <Container>
        <ErrorMessage>상품 정보를 불러올 수 없습니다.</ErrorMessage>
      </Container>
    );
  }

  const isLose = result.item === "empty";

  if (isLose) {
    return (
      <Container>
        <LoseCard />

        <ThankYou>설문에 참여해주셔서 감사합니다.</ThankYou>
      </Container>
    );
  }

  const rewardInfo = rewardMap[result.item];

  const reward = {
    type: "reward",
    code: result.item_number,
    ...rewardInfo,
  };

  return (
    <Container>
      <RewardCard reward={reward} />

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

const ErrorMessage = styled.p`
  margin: 100px 0 0;

  font-size: 15px;
  line-height: 1.7;

  color: #94a3b8;

  text-align: center;
`;
