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
    },
  }) => css`
    display: flex;

    // children
    aside {
      height: 100vh;
      width: 300px;

      display: grid;
      grid-template-rows: 120px 1fr 80px;

      background: ${translucentBackground.secondary};
      backdrop-filter: ${blur};

      animation: ${asideApearAnimation} 400ms;

      // children
      header {
        justify-self: center;
        max-width: 200px;
      }

      footer {
        width: 200px;
        margin: 0 auto;

        .decrease-button {
          display: inline-block;
          transform: rotate(180deg);
        }

        .increase-button {
          float: right;
        }
      }
    }

    main {
      width: 100%;
    }
  `}
`;
