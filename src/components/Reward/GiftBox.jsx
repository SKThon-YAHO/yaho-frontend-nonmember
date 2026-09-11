import styled from "styled-components";

export default function GiftBox({ onClick }) {
  return (
    <GiftBoxWrapper onClick={onClick}>
      <GiftBoxText>GIFT</GiftBoxText>
    </GiftBoxWrapper>
  );
}

const GiftBoxWrapper = styled.button`
  width: 150px;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  background: #f1f5ff;
  border: 2px dashed #8b95ff;
  border-radius: 24px;

  color: #6366f1;
  cursor: pointer;

  &:active {
    transform: scale(0.96);
  }
`;

const GiftBoxText = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
