import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const shin = keyframes`
	0% {
		opacity: 0.2;
	}

	100% {
		opacity: 1;
	}
`;

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  height: 100dvh;
  gap: 30px;

  button {
    cursor: pointer;
    ${theme.ALIGN.ROW_CENTER};
    font-size: 14px;
    padding: 10px 23px;
    border: none;
    border-radius: 50px;
    box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
    color: ${theme.COLOR.GREEN};
    font-family: ${theme.FONT.ROBOTO_MEDIUM};
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    button {
      font-size: 11px;
      padding: 6px 15px;
    }
    gap: 10px;
  }
`;

const LogoWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  img {
    animation: ${shin} 1.5s 0s linear forwards;
    width: 450px;
    object-fit: contain;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      width: 230px;
    }
  }
`;

const Text = styled.div`
  p {
    color: white;
    text-shadow: 1px 2px 2px rgba(136, 136, 136, 0.6);
    font-size: 17px;
    font-family: ${theme.FONT.INTER_MEDIUM};
    text-align: center;
    margin-bottom: 20px;

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: 12px;
    }
  }
`;

const NextButton = styled.button`
  display: flex;
  gap: 5px;
`;

const LogoContainer = styled.div`
  display: grid;
  gap: 15px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    gap: 10px;
  }
`;

export { Container, LogoWrapper, Text, NextButton, LogoContainer };
