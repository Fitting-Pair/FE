import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: 100dvh;
  ${theme.ALIGN.COLUMN_CENTER};
  gap: 30px;
`;

const LogoWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  img {
    width: 450px;
    object-fit: contain;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      width: 230px;
    }
  }
`;

const Wrapper = styled.form`
  display: grid;
  place-items: center;
  gap: 20px;
  width: 300px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 230px;
  }
`;

const InputBox = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 100%;
  height: 50px;
  gap: 10px;

  background-color: ${theme.COLOR.WHITE};
  padding: 0px 20px;
  box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
  border-radius: 16px;

  input {
    height: 100%;
    width: 90%;
    font-size: 12px;
    font-family: ${theme.FONT.ROBOTO_MEDIUM};
    letter-spacing: 0.5px;
    border: none;
    outline: none;

    &::placeholder {
      color: ${theme.COLOR.GRAY};
    }
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 40px;
  }
`;

const ErrorMeg = styled.p`
  font-size: 10px;
  color: #f53151;
  padding: 0 10px;
  word-break: keep-all;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 200px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
`;

export { Container, LogoWrapper, Wrapper, InputBox, ErrorMeg, InputWrapper };
