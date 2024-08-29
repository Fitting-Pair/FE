import styled from "styled-components";
import theme from "@/styles/theme";

type TButton = {
  width: string;
  $login?: boolean;
};

const Container = styled.button<TButton>`
  cursor: pointer;
  width: ${(props) => props.width};
  height: 50px;
  background-color: ${theme.COLOR.GREEN};
  color: ${theme.COLOR.WHITE};
  margin: 16px;

  box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  border: none;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: ${(props) => (props.$login ? "268px" : "240px")};
    height: 40px;
  }

  &:disabled {
    background-color: ${theme.COLOR.GRAY};
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export { Container };
