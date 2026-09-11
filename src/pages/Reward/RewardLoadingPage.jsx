import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RewardLoadingPage() {
  const navigate = useNavigate();
  const { toilet_code } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${toilet_code}/reward/result`, {
        replace: true,
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate, toilet_code]);

  return (
    <div>
      <h2>두근두근...</h2>

      <p>어떤 선물이 나올까요?</p>
    </div>
  );
}

export default RewardLoadingPage;
