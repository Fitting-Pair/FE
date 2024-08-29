import * as S from "./submit-btn.style";

type TSubmit = {
  text: string;
  width: string;
  login?: boolean;
  onClick: () => void;
  onBlur?: () => void;
  disabled?: boolean;
};

const Submit = ({ text, width, login, onClick, onBlur, disabled }: TSubmit) => {
  return (
    <S.Container
      onClick={onClick}
      width={width}
      $login={login}
      type="submit"
      onBlur={onBlur}
      disabled={disabled}
    >
      {text}
    </S.Container>
  );
};

export default Submit;
