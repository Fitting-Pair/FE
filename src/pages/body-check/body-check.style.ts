import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Icon = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100px;
  height: 33px;
  background-color: ${theme.COLOR.WHITE};
  border-radius: 20px;
  padding: 10px;
  margin: 6px;

  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  img {
    margin-right: 10px;
    width: 13%;
  }

  @media ${theme.WINDOW_SIZE.IPAD_PRO} {
    font-size: 17px;
    width: 135px;
    height: 43px;
    border-radius: 50px;
  }
`;

const TipIcon = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  font-family: ${theme.FONT.ROBOTO_MEDIUM};
  padding: 10px 20px;
  background-color: ${theme.COLOR.WHITE};
  margin-bottom: 10px;

  @media ${theme.WINDOW_SIZE.IPAD_PRO} {
    font-size: 18px;
    margin-bottom: 30px;
    margin-top: 0;
  }
`;

const Cam = styled.div`
  width: 350px;
  height: 350px;
  background-color: #b5b5b5;
  border-radius: 50%;

  @media ${theme.WINDOW_SIZE.IPAD_PRO} {
    width: 600px;
    height: 600px;
  }
`;

const TipWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-top: 40px;
  margin-bottom: 100px;

  font-size: 12px;
  font-weight: 500;

  @media ${theme.WINDOW_SIZE.IPAD_PRO} {
    margin-top: 50px;
    font-size: 23px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  font-family: ${theme.FONT.INTER_REGULAR};

  span {
    text-align: center;
    margin-bottom: 10px;
  }

  li {
    list-style-type: none;
    padding: 3px 0;
  }

  @media ${theme.WINDOW_SIZE.IPAD_PRO} {
    font-size: 20px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`;

export {
  Container,
  Icon,
  TipIcon,
  Cam,
  ContentWrapper,
  TipWrapper,
  ContentContainer,
};
