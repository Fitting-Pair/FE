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

  button {
    cursor: pointer;
    ${theme.ALIGN.ROW_CENTER};
    padding: 8px 20px;
    border: none;
    border-radius: 50px;
    box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
    color: ${theme.COLOR.GREEN};
    font-family: ${theme.FONT.ROBOTO_MEDIUM};

    img {
      margin-left: 5px;
    }

    @media ${theme.WINDOW_SIZE.IPAD_PRO} {
      font-size: 14px;
      padding: 10px 23px;
    }

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: 11px;
      padding: 8px 19px;
    }
  }
`;

const LogoWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  img {
    animation: ${shin} 1.5s 0s linear forwards;
    width: 80%;
    margin-bottom: 40px;

    @media ${theme.WINDOW_SIZE.IPAD_PRO} {
      width: 100%;
    }

    @media ${theme.WINDOW_SIZE.MOBILE} {
      width: 75%;
      margin-bottom: 30px;
    }
  }
`;

const Text = styled.div`
  p {
    color: #fff;
    text-shadow: 1px 2px 2px rgba(136, 136, 136, 0.6);
    font-size: 15px;
    font-family: ${theme.FONT.INTER_MEDIUM};
    text-align: center;
    margin-bottom: 20px;

    @media ${theme.WINDOW_SIZE.IPAD_PRO} {
      font-size: 20px;
      margin-bottom: 23px;
    }

    @media ${theme.WINDOW_SIZE.MOBILE} {
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
`;

export { Container, LogoWrapper, Text };
