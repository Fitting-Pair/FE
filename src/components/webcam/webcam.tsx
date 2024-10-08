import * as S from "./webcam.style";
import CamImg from "@/assets/images/camera_img.webp";
import { useCallback, useRef, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Webcam from "react-webcam";
import { GestureRecognizer, FilesetResolver } from "@mediapipe/tasks-vision";
import usePostImg from "@/hooks/queries/results/usePostImg";

const videoConstraints = {
  width: 550,
  height: 700,
};

const WebcamComponent = () => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const [url, setUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [count, setCount] = useState<number>(6);

  const webcamRef = useRef<Webcam>(null);
  const timerIdRef = useRef<number | null>(null);

  const { mutate } = usePostImg();

  useEffect(() => {
    const loadGestureRecognizer = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm",
      );
      const gestureRecognizer = await GestureRecognizer.createFromOptions(
        vision,
        {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
            delegate: "CPU",
          },
          runningMode: "VIDEO",
        },
      );

      const predict = async () => {
        if (webcamRef.current && webcamRef.current.video) {
          const video = webcamRef.current.video;

          if (video.videoWidth > 0 && video.videoHeight > 0) {
            const results = await gestureRecognizer.recognizeForVideo(
              video,
              Date.now(),
            );

            if (results.gestures && results.gestures.length > 0) {
              const gesture = results.gestures[0][0];

              if (gesture.categoryName === "Closed_Fist") {
                startTimer();
                return;
              }
            }
          }
        }
        requestAnimationFrame(predict);
      };

      predict();
    };

    loadGestureRecognizer();
  }, []);

  const startTimer = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
    }
    setCount(6);
    timerIdRef.current = window.setInterval(() => {
      setCount((count) => {
        if (count === 1) {
          clearInterval(timerIdRef.current as number);
          capture();
          return 6;
        }
        return count - 1;
      });
    }, 1000);
  };

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
            height={700}
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
      {count === 6 ? (
        <>
          {!isCaptureEnable ? (
            <S.TipWrapper>
              <S.TipIcon>{`Tip ) 아래 순서를 따라해주세요.`}</S.TipIcon>
              <S.ContentWrapper>
                <span>주먹 쥔 것이 감지되면, 5초 후에 촬영됩니다.</span>
                <li>1. 정면을 바라보고 사진을 찍어주세요.</li>
                <li>2. 옆구리가 붙지 않도록 팔을 벌려주세요.</li>
              </S.ContentWrapper>
            </S.TipWrapper>
          ) : (
            <S.TipWrapper>
              <S.ContentWrapper>
                <S.NextButton onClick={handleNextClick} type="button">
                  <p>체형 분석 하기</p>
                  <FaArrowRight />
                </S.NextButton>

                <S.Retry>
                  재촬영을 원하시면 아래 촬영 버튼을 눌러주세요.
                </S.Retry>
              </S.ContentWrapper>
            </S.TipWrapper>
          )}
          <S.Button onClick={handleCam}>
            <img src={CamImg} />
          </S.Button>
        </>
      ) : (
        <S.CounterBox>
          <p>{count}</p>
        </S.CounterBox>
      )}
    </div>
  );
};

export default WebcamComponent;
