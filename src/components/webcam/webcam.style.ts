import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const ring = keyframes`
0%
  {
    transform:rotate(0deg);
  }
  100%
  {
    transform:rotate(360deg);
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 550px;
  height: 700px;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  video {
    object-fit: cover;
  }

  img {
    width: 550px;
    height: 750px;
    object-fit: cover;
  }
`;

const Button = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 0;
  left: 47%;

  display: grid;
  place-items: center;

  width: 70px;
  height: 35px;
  margin: 10px;
  border: none;
  border-radius: 25px;
  color: white;
  background-color: #7c9c80;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
  }

  img {
    width: 27%;
  }
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;
  border: none;
  background-color: white;
  margin-bottom: 20px;
  padding: 8px 13px;

  svg {
    width: 13px;
    height: 13px;
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

const CounterBox = styled.div`
  position: relative;
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 200px;
  margin-top: 50px;

  p {
    ${theme.ALIGN.COLUMN_CENTER};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    background: transparent;
    border: 3px solid #3c3c3c;
    border-radius: 50%;
    font-size: 60px;
    color: #000;
    letter-spacing: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  p::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid ${theme.COLOR.ORANGE};
    border-right: 3px solid ${theme.COLOR.ORANGE};
    border-radius: 50%;
    animation: ${ring} 1s linear infinite;
  }
`;

const Retry = styled.p`
  font-size: 15px;
`;

export {
  Container,
  Button,
  NextButton,
  TipIcon,
  TipWrapper,
  ContentWrapper,
  CounterBox,
  Retry,
};
