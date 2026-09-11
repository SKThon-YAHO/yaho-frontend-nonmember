import styled from "styled-components";

export default function LoseCard() {
  return (
    <Container>
      <Card>
        <Emoji>🥲</Emoji>

        <Title>꽝!</Title>

        <Description>아쉽게도 꽝이에요. 다음 기회에!</Description>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  width: 320px;
  height: 320px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: calc(100% - 48px);
  height: calc(100% - 48px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #ffffff;

  border-radius: 24px;

  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
`;

const Emoji = styled.div`
  font-size: 72px;
  line-height: 108px;
`;

const Title = styled.h2`
  margin: 14px 0;

  font-size: 28px;
  font-weight: 800;
  line-height: 42px;

  color: #94a3b8;
`;

const Description = styled.p`
  margin: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: 21px;

  color: #94a3b8;

  text-align: center;
`;
