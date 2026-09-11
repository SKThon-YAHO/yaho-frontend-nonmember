import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getGuestUuid = () => {
  return localStorage.getItem("guest_uuid");
};

const saveGuestUuid = (uuid) => {
  localStorage.setItem("guest_uuid", uuid);
};

/**
 * 화장실 이용량 카운트
 * uuid가 없으면 null로 보내고,
 * 서버에서 받은 uuid를 localStorage에 저장
 */
export const postGuestUsage = async (toilet_code) => {
  const uuid = getGuestUuid();

  console.log("usage 보내는 uuid:", uuid);

  const response = await axios.post(
    `${BASE_URL}/api/guest/${toilet_code}/usage`,
    {
      uuid: uuid ?? null,
    },
  );

  console.log("usage 서버 반환 uuid:", response.data?.data?.uuid);

  const returnedUuid = response.data?.data?.uuid;

  if (returnedUuid) {
    saveGuestUuid(returnedUuid);
  }

  return response.data;
};

/**
 * 설문 제출
 */
export const postGuestSurvey = async (toilet_code, survey) => {
  const uuid = getGuestUuid();

  console.log("survey 보내는 uuid:", uuid);

  const response = await axios.post(
    `${BASE_URL}/api/guest/${toilet_code}/survey`,
    {
      survey,
      uuid,
    },
  );

  console.log("survey 응답:", response.data);

  return response.data;
};

/**
 * 랜덤 상품 추첨
 */
export const postGuestRandom = async () => {
  const uuid = getGuestUuid();

  console.log("랜덤 추첨 uuid:", uuid);

  if (!uuid) {
    throw new Error("GUEST_UUID_NOT_FOUND");
  }

  const response = await axios.post(`${BASE_URL}/api/guest/random`, {
    uuid,
  });

  return response.data;
};
