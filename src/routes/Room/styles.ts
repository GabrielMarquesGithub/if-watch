import styled, { css, keyframes } from "styled-components";

const headerApearAnimation = keyframes`
0%{
  transform: translateY(-100px);
}
100%{
  transform: translateY(0px);
}
`;

export const Container = styled.section`
  ${({
    theme: {
      spacing,
      borderRadius,
      colors: { translucentBackground },
    },
  }) => css`
    width: 100%;
    padding: ${spacing[20]};

    display: grid;
    grid-template-columns: 1fr calc(60px);
    grid-template-areas: "header header" "none aside";
    gap: ${spacing[20]};

    //state
    &.isLoading {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    // children
    & > header {
      grid-area: header;

      height: 80px;
      padding: ${spacing[20]};
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

    & > aside {
      grid-area: aside;
    }

    form {
      div {
        display: flex;
        gap: ${spacing[10]};
      }
      display: flex;
      flex-direction: column;
      gap: ${spacing[10]};
    }
  `}
`;
