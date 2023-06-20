import styled, { css, keyframes } from "styled-components";

const headerApearAnimation = keyframes`
0%{
  transform: translateX(-100%);
}
100%{
  transform: translateX(0px);
}
`;

export const Container = styled.div`
  ${({
    theme: {
      colors: { translucentBackground },
      container,
      spacing,
      filter,
    },
  }) => css`
    width: ${container.large};
    min-height: 100vh;
    margin: 0px auto;

    display: flex;
    flex-direction: column;
    gap: ${spacing[20]};

    // children
    header {
      padding: ${spacing[20]} 0;

      overflow: hidden;

      user-select: none;

      // children
      a {
        width: 100%;
        display: flex;
        align-items: center;

        // children
        h1 {
          height: 90px;
          width: 100%;
          padding-left: ${spacing[15]};

          overflow: hidden;

          display: flex;
          align-items: center;
          z-index: -1;

          background: ${translucentBackground.secondary};

          animation: ${headerApearAnimation} 2s;
        }
      }
    }

    footer {
      width: 100vh;
      height: 25vh;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${spacing[5]};

      background: ${translucentBackground.secondary};

      nav {
        display: flex;
        gap: ${spacing[10]};
      }
    }
  `}
`;

export const Footer = styled.footer`
  ${({
    theme: {
      colors: { background },
      spacing,
    },
  }) => css`
    height: 20vh;
    margin-top: ${spacing[25]};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${spacing[5]};

    background: linear-gradient(transparent, ${background.primary});

    nav {
      display: flex;
      gap: ${spacing[10]};
    }
  `}
`;
