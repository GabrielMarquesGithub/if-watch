import styled, { css, keyframes } from "styled-components";

const asideApearAnimation = keyframes`
0% {
  transform: translateX(-300px);
}
100% {
  transform: translateX(0px);
}
`;

export const Container = styled.div`
  ${({
    theme: {
      filter: { blur },
      colors: { translucentBackground },
      spacing,
    },
  }) => css`
    display: flex;

    // children
    & > aside {
      height: 100vh;
      min-width: 300px;

      display: grid;
      grid-template-rows: 100px 1fr 100px;

      background: ${translucentBackground.secondary};

      animation: ${asideApearAnimation} 400ms;

      // children
      & > header {
        justify-self: center;

        padding: ${spacing[20]};
      }

      & > ul {
        display: grid;
        gap: 0px;
        grid-template-rows: repeat(5, 1fr);
      }

      & > footer {
        padding: ${spacing[20]};

        .decrease-button {
          display: inline-block;
          transform: rotate(180deg);
        }

        .increase-button {
          float: right;
        }
      }
    }

    & > main {
      width: 100%;
    }
  `}
`;
