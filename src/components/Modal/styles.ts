import styled, { css } from "styled-components";

export const Overlay = styled.div`
  ${({
    theme: {
      colors: { background, translucentBackground },
      borderRadius,
      transition,
      spacing,
    },
  }) => css`
    width: 100vw;
    height: 100vh;
    padding: ${spacing[20]};

    position: fixed;
    z-index: 2;
    left: 0px;
    top: 0px;
    opacity: 0;
    visibility: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${translucentBackground.primary};

    // states
    &.open {
      opacity: 1;
      visibility: visible;
    }

    // children
    & > div {
      padding: ${spacing[20]};
      border-radius: ${borderRadius.base};

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      gap: ${spacing[20]};

      background: ${translucentBackground.tertiary};

      transition: ${transition.normal};

      // children
      & > .close-button:first-child {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        //children
        span {
          transform: rotate(45deg);
        }
      }
    }
  `}
`;
