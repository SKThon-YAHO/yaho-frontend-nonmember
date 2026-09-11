import styled, { keyframes } from "styled-components";

export default function FloatingGift({ src, alt = "랜덤박스" }) {
  return (
    <GiftWrapper>
      <GiftImage src={src} alt={alt} />
    </GiftWrapper>
  );
}

const floating = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
`;

const GiftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GiftImage = styled.img`
  width: 168px;
  height: 168px;

  object-fit: cover;

  animation: ${floating} 2s ease-in-out infinite;
`;
