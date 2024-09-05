import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const IconWrapper = styled.div`
  display: flex;
  font-size: 13px;
  margin: 20px 5px 24px 5px;
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

const IconBlack = styled(Icon)`
  width: 130px;

  color: ${theme.COLOR.WHITE};
  background-color: ${theme.COLOR.BLACK};

  @media ${theme.WINDOW_SIZE.IPAD_PRO} {
    width: 135px;
  }
`;

const ContentWrapper = styled.div`
  width: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 24px;

  margin: 25px 30px 10px;
  font-size: 16px;
  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  span {
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    word-break: break-all;
  }
`;

const ResultWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 92%;
  height: 996px;
  border-radius: 24px;
  background-color: ${theme.COLOR.WHITE};
`;

const ClothWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 996px;
  height: 342px;
  margin: 24px 24px;
  border-radius: 24px;
`;

const Category = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 90px;
  height: 35px;
  border-radius: 100px;
  text-align: center;
  margin: 0px 10px 15px 15px;
  border: none;
  border-radius: 25px;
  color: ${theme.COLOR.WHITE};
  background-color: #7c9c80;
  font-weight: bold;
  font-size: 12px;
`;

const ResultTitle = styled.div`
  font-size: 3rem;
  font-weight: 900;

  span {
    color: ${theme.COLOR.ORANGE};
  }
`;

const ResultImg = styled.div`
  img {
    width: 350px;
    height: 490px;
    object-fit: fill;
  }
`;

const ResultExplainWrapper = styled.div`
  display: flex;
`;

const ContentResultContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  display: grid;
  place-items: center;
`;

const Button = styled.div`
  display: grid;
  place-items: center;

  width: 117px;
  height: 40px;
  margin: 10px;
  border: none;
  border-radius: 25px;
  color: white;
  background-color: #7c9c80;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);

  &:hover {
    color: white;
    transition: 0.5s;
  }

  img {
    width: 27%;
  }
`;

const Slider = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    ${theme.ALIGN.COLUMN_CENTER};
    width: 250px;
    margin: 0 10px;
  }
`;

export {
  Slider,
  Category,
  Button,
  ClothWrapper,
  ResultExplainWrapper,
  ResultImg,
  ResultTitle,
  Container,
  IconWrapper,
  Icon,
  IconBlack,
  ContentWrapper,
  ContentResultContainer,
  ResultWrapper,
};
