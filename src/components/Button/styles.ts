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
    padding: 0 ${spacing[10]};
    border: none;
    border-radius: ${borderRadius.base};

    overflow: hidden;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    background: ${translucentBackground.primary};

    user-select: none;
    cursor: pointer;

    transition: ${transition.slow};
    // states
    &:hover {
      background-color: ${background.primary};
    }

    &:disabled {
      background: ${translucentBackground.primary};
      cursor: default;

      * {
        opacity: 0.5;
      }
    }

    // variants
    &.transparent {
      background-color: transparent;

      // states
      &:hover {
        background-color: ${translucentBackground.primary};
      }
    }

    // size
    &.base {
      height: 60px;
    }

    &.small {
      height: 40px;
    }

    // shape
    &.squared {
      &.base {
        max-width: 60px;
        min-width: 60px;
      }

      &.small {
        max-width: 40px;
        min-width: 40px;
      }
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
