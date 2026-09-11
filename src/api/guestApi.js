const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function startToiletUsage(toilet_code) {
  const savedUuid = localStorage.getItem("qlean_uuid");

  const response = await fetch(
    `${API_BASE_URL}/api/guest/${toilet_code}/usage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: savedUuid || null,
      }),
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.error?.message || "화장실 이용 요청에 실패했습니다.",
    );
  }

  const uuid = result?.data?.uuid;

  if (uuid) {
    localStorage.setItem("qlean_uuid", uuid);
  }

  return result;
}

export async function submitToiletSurvey(toilet_code, survey) {
  const savedUuid = localStorage.getItem("qlean_uuid");

  if (!savedUuid) {
    throw new Error("UUID가 없습니다.");
  }

  const response = await fetch(
    `${API_BASE_URL}/api/guest/${toilet_code}/survey`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        survey,
        uuid: savedUuid,
      }),
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error?.message || "설문 제출에 실패했습니다.");
  }

  return result;
}
