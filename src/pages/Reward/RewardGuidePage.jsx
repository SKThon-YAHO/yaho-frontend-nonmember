import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import GiftBox from "../../components/Reward/GiftBox";

export default function RewardGuidePage() {
  const navigate = useNavigate();
  const { toilet_code } = useParams();

  const handleGiftClick = () => {
    navigate(`/${toilet_code}/survey`);
  };

  return (
    <Container>
      <GiftBox onClick={handleGiftClick} />

      <Title>선물이 도착했어요!</Title>

      <Description>
        설문에 참여해주시면
        <br />
        랜덤 보상이 있어요.
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 24px 24px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 28px 0 10px;

  font-size: 22px;
  font-weight: 700;
  color: #1e293b;
`;

const Description = styled.p`
  margin: 0;

  font-size: 15px;
  line-height: 1.6;
  color: #64748b;

  text-align: center;
`;
