import styled, { css, keyframes } from "styled-components";

const apearAnimation = keyframes`
0%{
  transform: translateY(200px);
}
100%{
  transform: translateY(0px);
}
`;

export const Container = styled.div`
  ${({
    theme: {
      colors: { translucentBackground },
      filter,
      spacing,
      borderRadius,
    },
  }) => css`
    padding: ${spacing[10]};
    padding-left: ${spacing[20]};
    border-radius: ${borderRadius.base};

    position: fixed;
    bottom: ${spacing[20]};
    right: ${spacing[20]};

    display: flex;
    align-items: center;
    gap: ${spacing[10]};

    background: ${translucentBackground.secondary};

    animation: ${apearAnimation} 1s;

    // children
    span {
      transform: rotate(45deg);
    }
  `}
`;
