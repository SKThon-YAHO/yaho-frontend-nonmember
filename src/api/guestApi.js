const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function startToiletUsage(toilet_code) {
  const savedUuid = localStorage.getItem("qlean_uuid");

  console.log("toilet_code:", toilet_code);

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

  console.log("status:", response.status);
  console.log("response:", result);

  if (!response.ok) {
    throw new Error(result?.message || "화장실 이용 요청에 실패했습니다.");
  }

  const uuid = result?.data?.uuid;

  if (uuid) {
    localStorage.setItem("qlean_uuid", uuid);
  }

  return result;
}
