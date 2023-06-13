import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      colors: { background, translucentBackground },
      filter,
      spacing,
      borderRadius,
    },
  }) => css`
    height: 60px;
    padding: 0 ${spacing[10]};
    border-radius: ${borderRadius.base};

    display: inline-flex;
    align-items: center;
    gap: ${spacing[10]};

    background: ${translucentBackground.secondary};
    backdrop-filter: ${filter.blur};

    user-select: none;

    // states
    &.full {
      width: 100%;
    }

    // children
    span {
      padding: ${spacing[10]};
      border-radius: ${borderRadius.base};

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${background.primary};
    }
  `}
`;
