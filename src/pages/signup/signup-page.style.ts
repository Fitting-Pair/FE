import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: 100dvh;
  ${theme.ALIGN.COLUMN_CENTER};
`;

const Logo = styled.img`
  margin-bottom: 50px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 50%;
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
`;

const ButtonBox = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};

  width: 240px;
  height: 50px;
  border: none;
  background-color: #fff;
  box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin: 16px;

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
    width: 110px;
    height: 40px;
    margin: 16px 10px;
  }
`;

const GoLogin = styled.div`
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  color: #fff;
  width: 530px;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;

  a {
    margin-left: 5px;
    text-decoration: none;
    color: inherit;
    text-decoration-line: underline;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 240px;
  }
`;

const ErrorMeg = styled.p`
  margin-left: 20px;
  font-size: 10px;
  color: #f53151;
`;

export { Container, Logo, Wrapper, ButtonBox, GoLogin, ErrorMeg };
