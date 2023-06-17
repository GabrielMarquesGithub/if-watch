import styled, { css, keyframes } from "styled-components";

const headerApearAnimation = keyframes`
0%{
  transform: translateY(-100px);
}
100%{
  transform: translateY(0px);
}
`;

export const Container = styled.div`
  ${({
    theme: {
      spacing,
      borderRadius,
      colors: { translucentBackground },
    },
  }) => css`
    width: 100%;

    //state
    &.isLoading {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    // children
    header {
      height: 80px;
      padding: ${spacing[20]};
      margin: ${spacing[20]};
      border-radius: ${borderRadius.base};

      display: flex;
      align-items: center;
      justify-content: space-between;

      background: ${translucentBackground.secondary};

      user-select: none;

      animation: ${headerApearAnimation} 400ms;
      // children
      .name-container {
        display: flex;
        align-items: center;
        gap: ${spacing[10]};
      }

      .icon-container {
        display: flex;
        align-items: center;
        gap: ${spacing[20]};

        span {
          display: flex;
          align-items: center;
          gap: ${spacing[5]};
        }
      }
    }
  `}
`;
