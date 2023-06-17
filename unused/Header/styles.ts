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
        backdrop-filter: ${filter.blur};

        animation: ${headerApearAnimation} 2s;
      }
    }
  `}
`;
