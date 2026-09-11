import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import {
  Toilet,
  Waves,
  Droplet,
  BrushCleaning,
  DoorClosed,
  Cylinder,
  Bubbles,
  Trash2,
} from "lucide-react";

import PrimaryButton from "../../components/Button/PrimaryButton";
import { postGuestSurvey } from "../../api/guestApi";

function SurveyPage() {
  const navigate = useNavigate();
  const { toilet_code } = useParams();

  const [survey, setSurvey] = useState({
    clean: {
      toilet: false,
      urinal: false,
      sink: false,
      floor: false,
    },

    break: {
      toilet: false,
      urinal: false,
      sink: false,
      door: false,
    },

    item: {
      soap: false,
      paper: false,
      trash: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const categories = [
    {
      title: "청결",
      key: "clean",
      items: [
        {
          key: "toilet",
          label: "대변기 더러워요",
          icon: Toilet,
        },
        {
          key: "urinal",
          label: "소변기 더러워요",
          icon: Waves,
        },
        {
          key: "sink",
          label: "세면대 더러워요",
          icon: Droplet,
        },
        {
          key: "floor",
          label: "바닥 더러워요",
          icon: BrushCleaning,
        },
      ],
    },

    {
      title: "파손",
      key: "break",
      items: [
        {
          key: "toilet",
          label: "대변기 고장났어요",
          icon: Toilet,
        },
        {
          key: "urinal",
          label: "소변기 고장났어요",
          icon: Waves,
        },
        {
          key: "sink",
          label: "세면대 고장났어요",
          icon: Droplet,
        },
        {
          key: "door",
          label: "문이 잠기지 않아요",
          icon: DoorClosed,
        },
      ],
    },

    {
      title: "비품",
      key: "item",
      items: [
        {
          key: "paper",
          label: "휴지 없어요",
          icon: Cylinder,
        },
        {
          key: "soap",
          label: "비누 없어요",
          icon: Bubbles,
        },
        {
          key: "trash",
          label: "휴지통 가득 찼어요",
          icon: Trash2,
        },
      ],
    },
  ];

  const handleSelect = (categoryKey, itemKey) => {
    setSurvey((prev) => ({
      ...prev,

      [categoryKey]: {
        ...prev[categoryKey],
        [itemKey]: !prev[categoryKey][itemKey],
      },
    }));
  };

  const handleSubmit = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await postGuestSurvey(toilet_code, survey);

      if (response.is_valid) {
        navigate(`/${toilet_code}/reward/loading`);
      } else {
        navigate(`/${toilet_code}/usage-end`);
      }
    } catch (error) {
      console.error("설문 제출 실패", error);

      setErrorMessage("설문 제출에 실패했어요. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const hasSelected = Object.values(survey).some((category) =>
    Object.values(category).some(Boolean),
  );

  return (
    <Container>
      <Header>
        <Title>이용 중 불편한 점이 있었나요?</Title>

        <Description>해당하는 항목을 모두 선택해 주세요.</Description>
      </Header>

      <SurveyContent>
        {categories.map((category) => (
          <Category key={category.key}>
            <CategoryTitle>{category.title}</CategoryTitle>

            <OptionList>
              {category.items.map((item) => {
                const selected = survey[category.key][item.key];

                const Icon = item.icon;

                return (
                  <OptionButton
                    key={item.key}
                    type="button"
                    $selected={selected}
                    onClick={() => handleSelect(category.key, item.key)}
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
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <PrimaryButton onClick={handleSubmit} disabled={isLoading}>
          {isLoading
            ? "제출 중..."
            : hasSelected
              ? "선택한 내용 제출하기"
              : "불편했던 점 없이 잘 이용했어요"}
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

  box-sizing: border-box;

  background: #ffffff;

  @media (max-width: 390px) {
    min-height: 100dvh;
  }
`;

const Header = styled.header`
  margin-bottom: 32px;
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
  margin-bottom: 30px;
`;

const CategoryTitle = styled.h2`
  margin: 0 0 14px;

  font-size: 19px;
  font-weight: 700;

  color: #30343f;
`;

const OptionList = styled.div`
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 10px;
`;

const OptionButton = styled.button`
  width: 100%;
  min-width: 0;
  min-height: 46px;

  padding: 0 11px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 9px;

  border: 1px solid ${({ $selected }) => ($selected ? "#4C7FF0" : "#E8EAF0")};

  border-radius: 10px;

  background: ${({ $selected }) => ($selected ? "#EDF4FF" : "#FFFFFF")};

  color: ${({ $selected }) => ($selected ? "#4C7FF0" : "#555B66")};

  font-size: 12px;
  font-weight: 600;
  line-height: 1;

  box-shadow: ${({ $selected }) =>
    $selected ? "none" : "0 3px 10px rgba(0, 0, 0, 0.06)"};

  cursor: pointer;

  transition:
    transform 0.15s ease,
    background 0.15s ease,
    border-color 0.15s ease;

  svg {
    width: 19px;
    height: 19px;

    flex-shrink: 0;

    color: ${({ $selected }) => ($selected ? "#4C7FF0" : "#8C929F")};
  }

  span {
    display: flex;
    align-items: center;

    min-width: 0;
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

  padding-top: 8px;
  padding-bottom: 25px;
`;

const ErrorMessage = styled.p`
  margin: 0 0 12px;

  color: #e25353;

  font-size: 13px;

  text-align: center;
`;
