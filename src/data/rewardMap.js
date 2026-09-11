import voucherImage from "../assets/images/Reward/voucher_image.png";
import tissueImage from "../assets/images/Reward/tissue_image.jpg";
import peperoImage from "../assets/images/Reward/pepero_image.jpg";
import candyImage from "../assets/images/Reward/candy_image.jpg";

export const rewardMap = {
  onnuri: {
    name: "온누리 상품권",
    quantity: "5,000원권",
    issuer: "Qlean",
    expireDate: "2026.12.31",
    image: voucherImage,
    color: "#F28C52",
  },

  tissue: {
    name: "일회용 휴지",
    quantity: "1팩",
    issuer: "Qlean",
    expireDate: "2026.12.31",
    image: tissueImage,
    color: "#93B4F5",
  },

  stick: {
    name: "빼빼로",
    quantity: "1개",
    issuer: "Qlean",
    expireDate: "2026.12.31",
    image: peperoImage,
    color: "#B97852",
  },

  candy: {
    name: "츄파춥스",
    quantity: "1개",
    issuer: "Qlean",
    expireDate: "2026.12.31",
    image: candyImage,
    color: "#F5A3C7",
  },

  empty: {
    name: "꽝!",
    quantity: "",
    issuer: "",
  },
};
