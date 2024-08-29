import * as S from "./webcam.style";

import CamImg from "@/assets/images/camera_img.webp";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 550,
  height: 750,
};

const WebcamComponent = () => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  //   const [url, setUrl] = useState<string | null>(null);
  //   const capture = useCallback(() => {
  //     const imageSrc = webcamRef.current?.getScreenshot();
  //     if (imageSrc) {
  //       setUrl(imageSrc);
  //     }
  //   }, [webcamRef]);

  const handleCam = () => {
    setCaptureEnable(true);
  };

  return (
    <div>
      {!isCaptureEnable && (
        <S.Container>
          <Webcam
            mirrored={true}
            audio={false}
            width={550}
            height={750}
            ref={webcamRef}
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
          />
        </S.Container>
      )}

      <S.Button onClick={handleCam}>
        <img src={CamImg} />
      </S.Button>
      {isCaptureEnable && (
        <S.NextButton>
          <FaArrowRight />
        </S.NextButton>
      )}
    </div>
  );
};

export default WebcamComponent;
