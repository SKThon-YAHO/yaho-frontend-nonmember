import voucherImage from "../assets/images/Reward/voucher_image.png";
import tissueImage from "../assets/images/Reward/tissue_image.jpg";
import peperoImage from "../assets/images/Reward/pepero_image.jpg";
import candyImage from "../assets/images/Reward/candy_image.jpg";

export const rewardDummy = {
  voucher: {
    type: "reward",
    name: "온누리 상품권",
    quantity: "5,000원권",
    code: "102145011150",
    issuer: "Qlean",
    expireDate: "2026.12.31",
    image: voucherImage,
    color: "#F28C52", // 연한 오렌지
  },

  tissue: {
    type: "reward",
    name: "일회용 휴지",
    quantity: "1팩",
    code: "102145011148",
    issuer: "Qlean",
    expireDate: "2026.12.31",
    image: tissueImage,
    color: "#93B4F5", // 연한 블루
  },

  pepero: {
    type: "reward",
    name: "빼빼로",
    quantity: "1개",
    code: "102145011149",
    issuer: "Qlean",
    expireDate: "2026.12.31",
    image: peperoImage,
    color: "#B97852", // 연한 브라운
  },

  candy: {
    type: "reward",
    name: "츄파춥스",
    quantity: "1개",
    code: "102145011151",
    issuer: "Qlean",
    expireDate: "2026.12.31",
    image: candyImage,
    color: "#F5A3C7", // 연한 핑크
  },

  lose: {
    type: "lose",
  },
};
