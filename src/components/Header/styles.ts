import styled, { css, keyframes } from "styled-components";

const headerApearAnimation = keyframes`
0%{
  transform: translateX(-100%);
}
100%{
  transform: translateX(0px);
}
`;

export const Header = styled.header`
  ${({
    theme: {
      colors: { translucentBackground },
      spacing,
      filter,
    },
  }) => css`
    width: 100%;
    padding: ${spacing[20]} 0;

    overflow: hidden;

    display: flex;
    align-items: center;

    cursor: pointer;
    user-select: none;

    // states
    &.background {
      // children
      h1 {
        background: ${translucentBackground.secondary};
        backdrop-filter: ${filter.blur};
      }
    }

    &.base {
      // children
      svg,
      path {
        max-height: 110px;
        max-width: 110px;
      }

      h1 {
        height: 100px;
        padding-left: ${spacing[15]};
      }
    }

    &.small {
      // children
      svg,
      path {
        max-height: 50px;
        max-width: 50px;
      }

      h1 {
        height: 40px;
        padding-left: ${spacing[10]};
      }
    }

    // children

    h1 {
      width: 100%;

      display: flex;
      align-items: center;
      z-index: -1;

      overflow: hidden;

      animation: ${headerApearAnimation} 2s;
    }
  `}
`;
