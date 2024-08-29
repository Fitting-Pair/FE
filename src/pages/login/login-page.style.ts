import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: 100dvh;
  ${theme.ALIGN.COLUMN_CENTER};
`;

const LogoWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  img {
    width: 80%;
    margin-bottom: 40px;

    @media ${theme.WINDOW_SIZE.IPAD_PRO} {
      width: 100%;
    }

    @media ${theme.WINDOW_SIZE.MOBILE} {
      width: 70%;
      margin-bottom: 30px;
    }
  }
`;

const Wrapper = styled.form``;

const InputBox = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 268px;
  height: 50px;

  background-color: ${theme.COLOR.WHITE};
  padding: 0px 20px;
  box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin: 16px;

  img {
    margin-right: 10px;
  }

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
`;

const ErrorMeg = styled.p`
  margin-left: 20px;
  font-size: 10px;
  color: #f53151;
`;

export { Container, LogoWrapper, Wrapper, InputBox, ErrorMeg };
