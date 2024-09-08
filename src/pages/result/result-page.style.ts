import styled from "styled-components";
import theme from "../../styles/theme";

const ClothWrapper = styled.div`
  margin: 50px 0;
  width: 996px;
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  padding: 0 10px;

  section {
    ${theme.ALIGN.ROW_CENTER};
    gap: 10px;
  }

  img {
    width: 200px;
    height: 200px;
    margin: 0px 15px;
    border-radius: 24px;
    object-fit: cover;
  }
`;

const QRImg = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  img {
    width: 400px;
    object-fit: contain;
  }

  p {
    font-weight: bold;
    margin: 10px 0;
  }

  svg {
    width: 90px;
    height: 90px;
  }
`;

export { QRImg, ClothWrapper };
