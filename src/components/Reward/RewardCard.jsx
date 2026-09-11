import { useRef } from "react";
import styled from "styled-components";
import Barcode from "react-barcode";
import html2canvas from "html2canvas";

export default function RewardCard({ reward }) {
  const couponRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reward.code);
      alert("상품 번호가 복사되었습니다.");
    } catch (error) {
      console.error("복사 실패", error);
    }
  };

  const handleSaveImage = async () => {
    if (!couponRef.current) return;

    try {
      const canvas = await html2canvas(couponRef.current, {
        scale: 2,
        backgroundColor: null,
      });

      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = `${reward.name}-쿠폰.png`;

      link.click();
    } catch (error) {
      console.error("이미지 저장 실패", error);
    }
  };

  const formatBarcodeNumber = (code) => {
    return code.match(/.{1,4}/g)?.join(" ") || code;
  };

  return (
    <Card>
      <CouponArea ref={couponRef}>
        <Top $color={reward.color}>
          <Brand>QLEAN GIFT COUPON</Brand>

          <ProductImage src={reward.image} alt={reward.name} />

          <ProductName>{reward.name}</ProductName>
          <Quantity>{reward.quantity}</Quantity>
        </Top>

        <Divider>
          <DashedLine />
        </Divider>

        <Bottom>
          <InfoRow>
            <Label>유효기간</Label>
            <Value>{reward.expireDate}</Value>
          </InfoRow>

          <InfoRow>
            <Label>발급처</Label>
            <Value>{reward.issuer}</Value>
          </InfoRow>

          <BarcodeWrapper>
            <Barcode
              value={reward.code}
              width={1.7}
              height={70}
              displayValue={false}
              background="transparent"
              margin={0}
            />
            <BarcodeNumber>{formatBarcodeNumber(reward.code)}</BarcodeNumber>
          </BarcodeWrapper>
        </Bottom>
      </CouponArea>

      <ButtonRow>
        <CopyButton onClick={handleCopy}>번호 복사</CopyButton>

        <SaveButton onClick={handleSaveImage}>이미지 저장</SaveButton>
      </ButtonRow>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  max-width: 320px;

  background: #ffffff;

  border-radius: 22px;

  overflow: hidden;

  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
`;

const CouponArea = styled.div`
  background: #ffffff;
`;

const Top = styled.div`
  padding: 28px 24px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ $color }) => $color};

  color: #ffffff;
`;

const Brand = styled.span`
  margin: 0 0 14px;

  font-color: #ffffff;
  font-size: 10px;
  font-weight: 700;

  letter-spacing: 2px;

  opacity: 0.7;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;

  object-fit: cover;

  border-radius: 16px;

  margin-bottom: 14px;
`;

const ProductName = styled.h2`
  margin: 0;

  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
  font-color: #ffffff;

  text-align: center;
`;

const Quantity = styled.p`
  margin: 3px 0 0;

  font-color: #ffffff;
  font-size: 14px;
  font-weight: 400;

  line-height: 21px;
  opacity: 0.8;
`;

const Divider = styled.div`
  height: 20px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;

    top: 50%;

    width: 20px;
    height: 20px;

    border-radius: 50%;

    background: #f1f5f9;

    transform: translateY(-50%);
  }

  &::before {
    left: -10px;
  }

  &::after {
    right: -10px;
  }
`;

const DashedLine = styled.div`
  position: absolute;

  left: 18px;
  right: 18px;

  top: 50%;

  border-top: 1px dashed #f1f5f9;
`;

const Bottom = styled.div`
  padding: 14px 24px 0;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 6px;
`;

const Label = styled.span`
  font-size: 11px;
  color: #94a3b8;
  font-weight: 400;
  line-height: 16px;
`;

const Value = styled.span`
  font-size: 11px;
  color: #94a3b8;
  font-weight: 400;
  line-height: 16px;
`;

const BarcodeWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 24px 0 10px;
`;

const BarcodeNumber = styled.span`
  margin-top: 8px;

  font-size: 11px;
  font-weight: 400;

  letter-spacing: 3px;

  color: #94a3b8;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;

  padding: 0 24px 20px;
`;

const CopyButton = styled.button`
  flex: 1;
  height: 45px;

  border: none;
  border-radius: 12px;

  background: #f1f5f9;

  font-size: 13px;
  font-weight: 600;

  color: #1e293b;

  cursor: pointer;
`;

const SaveButton = styled.button`
  flex: 1;
  height: 45px;

  border: none;
  border-radius: 12px;

  background: #1e293b;

  font-size: 13px;
  font-weight: 600;

  color: #ffffff;

  cursor: pointer;
`;
