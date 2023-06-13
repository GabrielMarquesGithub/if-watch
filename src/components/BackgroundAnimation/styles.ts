import styled, { css, keyframes } from "styled-components";

const backgroundObjectsAnimation = keyframes`  
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
`;

export interface IObjectStyleProps {
  width: number;
  height: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
}

export const Object = styled.li<IObjectStyleProps>`
  ${({
    left,
    width,
    height,
    animationDelay,
    animationDuration,
    theme: {
      colors: { text },
    },
  }) => css`
    width: ${width}px;
    height: ${height}px;

    position: absolute;
    left: ${left}%;
    bottom: -150px;
    opacity: 0.2;

    display: block;

    background: ${text.light};
    backdrop-filter: blur(5%);

    list-style: none;

    animation: ${backgroundObjectsAnimation} 25s linear infinite;
    animation-delay: ${animationDelay}s;
    animation-duration: ${animationDuration}s;
  `}
`;

export const Container = styled.ul`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;
