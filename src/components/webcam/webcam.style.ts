import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  position: relative;
  max-width: 350px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${theme.WINDOW_SIZE.IPAD_PRO} {
    max-width: 550px;
    height: 750px;
  }

  video {
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

const NextButton = styled.div`
  position: absolute;
  top: 55%;
  right: -150px;
  svg {
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    padding: 6px;
  }
`;

export { Container, Button, NextButton };
