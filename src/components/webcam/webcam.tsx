import * as S from "./webcam.style";

import CamImg from "@/assets/images/camera_img.webp";
import { useCallback, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Webcam from "react-webcam";
import usePostImg from "@/hooks/queries/results/usePostImg";

const videoConstraints = {
  width: 550,
  height: 750,
};

const WebcamComponent = () => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const timerIdRef = useRef<number | null>(null);
  const [count, setCount] = useState<number>(5);

  const { mutate } = usePostImg();

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
      setCaptureEnable(true);

      const blob = await fetch(imageSrc).then((res) => res.blob());
      const formData = new FormData();
      formData.set("imageFile", blob, "image.png");
      setFormData(formData);
    }
  }, [webcamRef]);

  const handleCam = () => {
    setCaptureEnable(false);
    setUrl(null);
    startTimer();
  };

  const startTimer = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
    }
    setCount(5);
    timerIdRef.current = setInterval(() => {
      setCount((count) => {
        if (count === 0) {
          clearInterval(timerIdRef.current as number);
          capture();
          return 5;
        }
        return count - 1;
      });
    }, 1000);
  };

  const handleNextClick = () => {
    if (formData) {
      mutate(formData);
    }
  };

  return (
    <div>
      {!isCaptureEnable ? (
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
      ) : (
        url && (
          <S.Container>
            <img src={url} alt="screenshot" />
          </S.Container>
        )
      )}

      <S.Button onClick={handleCam}>
        {count === 5 ? <img src={CamImg} /> : count}
      </S.Button>
      {isCaptureEnable && (
        <S.NextButton onClick={handleNextClick}>
          <FaArrowRight />
        </S.NextButton>
      )}
    </div>
  );
};

export default WebcamComponent;
