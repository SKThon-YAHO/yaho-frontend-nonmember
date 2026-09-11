import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import PrimaryButton from "../../components/Button/PrimaryButton";
import {
  Toilet,
  WavesHorizontal,
  Droplets,
  Mop,
  DoorClosed,
  Cylinder,
  Bubbles,
  Trash,
} from "lucide-react";

function SurveyPage() {
  const navigate = useNavigate();
  const { toiletCode } = useParams();

  const [selectedItems, setSelectedItems] = useState([]);

  const categories = [
    {
      title: "청결",
      items: [
        { label: "대변기 더러워요", icon: Toilet },
        { label: "소변기 더러워요", icon: WavesHorizontal },
        { label: "세면대 더러워요", icon: Droplets },
        { label: "바닥 더러워요", icon: Mop },
      ],
    },
    {
      title: "파손",
      items: [
        { label: "대변기 고장났어요", icon: Toilet },
        { label: "소변기 고장났어요", icon: WavesHorizontal },
        { label: "세면대 고장났어요", icon: Droplets },
        { label: "문이 안 잠겨요", icon: DoorClosed },
      ],
    },
    {
      title: "비품",
      items: [
        { label: "휴지 없어요", icon: Cylinder },
        { label: "비누 없어요", icon: Bubbles },
        { label: "휴지통 가득 찼어요", icon: Trash },
      ],
    },
  ];

  const handleSelect = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((selected) => selected !== item)
        : [...prev, item],
    );
  };

  const handleSubmit = () => {
    console.log("toiletCode:", toiletCode);
    console.log("selectedItems:", selectedItems);

    // TODO: 추후 설문 API 연결

    navigate(`/${toiletCode}/complete`);
  };

  return (
    <Container>
      <Header>
        <Title>이용 중 불편한 점이 있었나요?</Title>

        <Description>해당하는 항목을 모두 선택해 주세요.</Description>
      </Header>

      <SurveyContent>
        {categories.map((category) => (
          <Category key={category.title}>
            <CategoryTitle>{category.title}</CategoryTitle>

            <OptionList>
              {category.items.map((item) => {
                const selected = selectedItems.includes(item.label);
                const Icon = item.icon;

                return (
                  <OptionButton
                    key={item.label}
                    $selected={selected}
                    onClick={() => handleSelect(item.label)}
                  >
                    <Icon size={19} strokeWidth={2} />
                    <span>{item.label}</span>
                  </OptionButton>
                );
              })}
            </OptionList>
          </Category>
        ))}
      </SurveyContent>

      <BottomArea>
        <PrimaryButton onClick={handleSubmit}>
          {selectedItems.length === 0
            ? "불편했던 점 없이 잘 이용했어요"
            : "선택한 내용 제출하기"}
        </PrimaryButton>
      </BottomArea>
    </Container>
  );
}

export default SurveyPage;

const Container = styled.main`
  width: 100%;
  min-height: 770px;

  display: flex;
  flex-direction: column;

  padding: 48px 24px 24px;

  background: #ffffff;

  @media (max-width: 390px) {
    min-height: 100dvh;
  }
`;

const Header = styled.header`
  margin-bottom: 36px;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 21px;
  font-weight: 700;
  line-height: 1.4;

  color: #222631;
`;

const Description = styled.p`
  margin: 8px 0 0;

  font-size: 13px;
  line-height: 1.5;

  color: #9a9fa9;
`;

const SurveyContent = styled.div`
  flex: 1;
`;

const Category = styled.section`
  margin-bottom: 32px;
`;

const CategoryTitle = styled.h2`
  margin: 0 0 14px;

  font-size: 20px;
  font-weight: 700;

  color: #30343f;
`;

const OptionList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const OptionButton = styled.button`
  width: 100%;
  min-height: 46px;

  padding: 0 14px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 10px;

  border: 1px solid ${({ $selected }) => ($selected ? "#4C7FF0" : "#E8EAF0")};

  border-radius: 10px;

  background: ${({ $selected }) => ($selected ? "#EDF4FF" : "#FFFFFF")};

  color: ${({ $selected }) => ($selected ? "#4C7FF0" : "#555B66")};

  font-size: 12px;
  font-weight: 600;
  line-height: 1;

  box-shadow: ${({ $selected }) =>
    $selected ? "none" : "0 3px 10px rgba(0, 0, 0, 0.06)"};

  transition: 0.15s ease;

  svg {
    width: 19px;
    height: 19px;

    flex-shrink: 0;

    color: ${({ $selected }) => ($selected ? "#4C7FF0" : "#8C929F")};
  }

  span {
    display: flex;
    align-items: center;

    height: 19px;
    line-height: 19px;

    white-space: nowrap;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const BottomArea = styled.div`
  width: 100%;

  padding-bottom: 25px;
`;
