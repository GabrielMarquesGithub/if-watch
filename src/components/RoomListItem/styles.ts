import styled, { css } from "styled-components";

export const Container = styled.li`
  ${({
    theme: {
      spacing,
      transition,
      colors: { brand, translucentBrand },
    },
  }) => css`
    width: 300px;
    height: 70px;
    padding: 0 40px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${spacing[10]};

    user-select: none;
    cursor: pointer;

    // special
    &::before {
      content: " ";

      width: 300px;
      height: 70px;
      border-right: 3px solid transparent;

      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -1;

      transform: translateX(-300px);
      transition: ${transition.slow};
    }

    // states
    &.active,
    &:not(.active):hover {
      &::before {
        border-right: 3px solid ${brand.primary};

        background: ${translucentBrand.primary};

        transform: translateX(0px);
      }
    }

    // children
    .icon-container {
      display: flex;
      gap: ${spacing[10]};
    }
  `}
`;
