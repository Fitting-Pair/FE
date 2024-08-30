import styled from "styled-components";
import theme from "@/styles/theme";

interface IButton {
  $male?: boolean;
  $selected?: boolean;
}

const Container = styled.button<IButton>`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
  height: 100%;
  border: none;

  background-color: ${(props) =>
    props.$selected ? (props.$male ? "#42BCFF" : "#F42121") : "inherit"};

  border-top-left-radius: ${(props) => (props.$male ? "16px" : "0")};
  border-bottom-left-radius: ${(props) => (props.$male ? "16px" : "0")};

  border-top-right-radius: ${(props) => (props.$male ? "0" : "16px")};
  border-bottom-right-radius: ${(props) => (props.$male ? "0" : "16px")};

  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) =>
      props.$selected ? "#fff" : props.$male ? "#42BCFF" : "#F42121"};
  }

  &:hover {
    background-color: ${(props) => (props.$male ? "#42BCFF" : "#F42121")};
    svg {
      color: #fff;
    }
  }
`;

export { Container };
