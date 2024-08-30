import styled from "styled-components";
import theme from "@/styles/theme";

const Wrap = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 250px;
  height: 250px;
  background-color: ${theme.COLOR.WHITE};
  margin-bottom: 12px;
  border-radius: 24px;
  box-shadow: 0px 6px 12px -8px rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
    box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);
  }

  &:focus {
    background-color: blue;
    transition: 0.5s;
  }

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 24px;
  }
`;

export { Wrap };
