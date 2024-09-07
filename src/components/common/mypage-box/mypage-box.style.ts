import theme from "@/styles/theme";
import styled from "styled-components";

interface BoxProps {
  $noClick: boolean;
}

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 15px 0;

  label {
    font-size: 14px;
    font-weight: 700;
    margin-left: 3px;
  }

  p {
    color: ${theme.COLOR.WHITE};
    font-weight: 600;
    margin-left: 3px;
    font-size: 12px;
  }
`;

const Box = styled.div<BoxProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  gap: 10px;
  background-color: ${({ $noClick }) =>
    $noClick ? "#e6e6e6" : theme.COLOR.WHITE};

  p {
    color: ${({ $noClick }) => ($noClick ? "#d1cfcf" : "#807e7d")};

    font-weight: 700;
  }

  input {
    border: none;
    flex: 1;
    color: ${theme.COLOR.BLACK};
    font-weight: 700;
    outline: none;
  }
`;

const InputBox = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  width: 100%;

  background-color: ${theme.COLOR.WHITE};

  p {
    color: #807e7d;
    font-weight: 700;
  }
`;

export { Container, Box, InputBox };
