import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import FloatingGift from "../../components/Reward/FloatingGift";
import PrimaryButton from "../../components/Button/PrimaryButton";

import giftImage from "../../assets/images/gift_image.jpg";

export default function RewardGuidePage() {
  const navigate = useNavigate();
  const { toilet_code } = useParams();

  const handleOpenGift = () => {
    navigate(`/${toilet_code}/survey`);
  };

  return (
    <Container>
      <Content>
        <FloatingGift src={giftImage} />

        <Title>두근두근 랜덤박스</Title>

        <Description>
          설문 완료 후
          <br />
          랜덤박스를 개봉하세요!
        </Description>

        <ButtonArea>
          <PrimaryButton onClick={handleOpenGift}>
            랜덤박스 개봉하기
          </PrimaryButton>
        </ButtonArea>
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

  padding: 170px 70px;
`;

const Title = styled.h1`
  margin: 36px 0 10px;

  font-size: 22px;
  font-weight: 700;

  color: #1e293b;
`;

const Description = styled.p`
  margin: 0;

  font-size: 14px;
  line-height: 22px;
  font-weight: 400;

  text-align: center;

  color: #64748b;
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;
