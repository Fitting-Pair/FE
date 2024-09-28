import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: 100dvh;
  ${theme.ALIGN.COLUMN_CENTER};
`;

const Logo = styled.img`
  width: 300px;
  object-fit: contain;
  margin-bottom: 50px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 170px;
    margin-bottom: 30px;
  }
`;

const HalfWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 30px;
  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 10px;
  }
`;

const ButtonBox = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};

  width: 100%;
  height: 50px;
  border: none;
  background-color: #fff;
  box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
  border-radius: 16px;

  hr {
    z-index: 2;
    width: 1px;
    height: 100%;
    background: ${theme.COLOR.GRAY};
    border: 0;
  }

  div {
    ${theme.ALIGN.ROW_CENTER};
    width: 100%;

    cursor: pointer;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 40px;
  }
`;

const GoLogin = styled.div`
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  padding: 0 10px;

  a {
    text-decoration: none;
    color: inherit;
    text-decoration-line: underline;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

const ErrorMeg = styled.p`
  width: 180px;
  padding: 0 10px;
  font-size: 10px;
  color: #f53151;

  word-break: keep-all;

  &.height-error {
    width: 100px;
  }
`;

const SignUpContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 500px;
  gap: 20px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 230px;
  }
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
`;

export {
  Container,
  Logo,
  HalfWrapper,
  ButtonBox,
  GoLogin,
  ErrorMeg,
  SignUpContainer,
  InputBox,
  ButtonWrapper,
};
