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
