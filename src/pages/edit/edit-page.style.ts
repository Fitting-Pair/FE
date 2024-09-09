import theme from "@/styles/theme";
import styled from "styled-components";

const InfoForm = styled.form`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 96%;
`;

const ButtonBox = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};

  div {
    ${theme.ALIGN.ROW_CENTER};
    width: 100%;
    border: none;
    height: 44px;
  }

  .male {
    background-color: #e6e6e6;
    svg {
      color: ${theme.COLOR.WHITE};
      opacity: 0.4;
    }
  }

  .female {
    background-color: #e6e6e6;
    svg {
      color: ${theme.COLOR.WHITE};
      opacity: 0.4;
    }
  }
`;

export { InfoForm, ButtonBox };
