import styled from "styled-components";

import RewardCard from "../../components/reward/RewardCard";

export default function RewardResultPage() {
  return (
    <Container>
      <RewardCard
        title="축하해요!"
        description="아메리카노 쿠폰에 당첨되었어요."
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  padding: 80px 20px 24px;

  box-sizing: border-box;
`;
