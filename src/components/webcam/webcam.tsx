import * as S from "./webcam.style";

import CamImg from "@/assets/images/camera_img.webp";
import { FaArrowRight } from "react-icons/fa6";

const Webcam = () => {
  return (
    <div>
      <S.Container>
        <S.WebCam autoPlay playsInline muted />
      </S.Container>
      <S.Button>
        <img src={CamImg} />
      </S.Button>

      <S.NextButton>
        <FaArrowRight />
      </S.NextButton>
    </div>
  );
};

export default Webcam;
