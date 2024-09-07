import theme from "@/styles/theme";
import styled from "styled-components";

interface ButtonStyleProps {
  $styleType: "basic" | "noBackground";
}

const Button = styled.button<ButtonStyleProps>`
  margin: 10px 0;
  width: 95%;
  height: 44px;
  padding: 10px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ $styleType }) =>
    $styleType === "basic" ? theme.COLOR.GREEN : "transparent"};
  color: ${theme.COLOR.WHITE};
`;

export { Button };
