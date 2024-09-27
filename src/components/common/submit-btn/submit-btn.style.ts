import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${theme.COLOR.GREEN};
  color: ${theme.COLOR.WHITE};

  box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  border: none;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 40px;
  }

  &:disabled {
    background-color: ${theme.COLOR.GRAY};
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export { Container };
