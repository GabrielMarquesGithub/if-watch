import { createGlobalStyle, css, keyframes } from "styled-components";

const bodyBackgroundAnimation = keyframes`
0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const GlobalStyle = createGlobalStyle`
  /* Reset de estilos */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* Estilos globais */
  ${({
    theme: {
      spacing,
      borderRadius,
      colors: { background },
    },
  }) => css`
    *::-webkit-scrollbar {
      width: ${spacing[10]};
    }

    *::-webkit-scrollbar-track {
      border-radius: ${borderRadius.base};

      background-color: ${background.secondary};
    }

    *::-webkit-scrollbar-thumb {
      border-radius: ${borderRadius.base};

      background-color: ${background.tertiary};
    }

    html {
      overflow-y: scroll;

      & > *::-webkit-scrollbar {
        background-color: ${background.secondary};
      }
    }

    body {
      height: 100vh;

      background: linear-gradient(
        -45deg,
        ${background.secondary},
        ${background.tertiary}
      );
      background-attachment: fixed;

      animation: ${bodyBackgroundAnimation} 15s ease infinite;
    }
  `}

  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
