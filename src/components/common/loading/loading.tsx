import * as S from "./loading.style";
import Spinning from "@/assets/images/spinning.webp";

const Loading = ({ text }: { text: string }) => {
  return (
    <S.Container>
      <S.LoadingText>{text}</S.LoadingText>
      <img src={Spinning} />
    </S.Container>
  );
};

export default Loading;
