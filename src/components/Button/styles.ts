import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({
    theme: {
      colors: { background, translucentBackground },
      filter,
      spacing,
      borderRadius,
      transition,
    },
  }) => css`
    height: 60px;
    padding: 0 ${spacing[10]};
    border: 3px solid ${translucentBackground.secondary};
    border-radius: ${borderRadius.base};

    overflow: hidden;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    background: ${background.primary};
    backdrop-filter: ${filter.blur};

    user-select: none;
    cursor: pointer;

    transition: ${transition.slow};
    // states
    &:hover {
      border-color: ${background.primary};
      background-color: ${translucentBackground.secondary};
    }

    // variants
    &.transparent {
      border-color: transparent;
      background-color: transparent;
      backdrop-filter: none;

      // states
      &:hover {
        background-color: ${translucentBackground.primary};
      }
    }

    // size
    &.squared {
      max-width: 60px;
      min-width: 60px;
    }

    &.full {
      width: 100%;
    }

    // children
    * + * {
      margin-left: ${spacing[10]};
    }
  `}
`;
