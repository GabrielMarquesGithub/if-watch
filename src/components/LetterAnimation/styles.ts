import styled, { css, keyframes } from "styled-components";

const textWaveAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
    background-position: 0% 50%;
  }
  20%, 60% {
    transform: translateY(-10px);
    background-position: 100% 50%;
  }
  40%, 80% {
    transform: translateY(-5px);
  }
`;

interface ILetterStyleProps {
  index: number;
}

export const Letter = styled.span<ILetterStyleProps>`
  ${({
    index,
    theme: {
      colors: { translucentBackground, background },
      filter,
      spacing,
    },
  }) => css`
    padding: ${spacing[5]};

    display: inline-block;

    -webkit-background-clip: text;
    background: linear-gradient(
      to right,
      ${translucentBackground.secondary},
      ${background.primary}
    );
    background-size: 200% 100%;
    backdrop-filter: ${filter.blur};

    transform-origin: bottom center;
    animation: ${textWaveAnimation} 1s ease-in-out infinite;
    animation-delay: calc(${index} * 0.1s);
  `}
`;
