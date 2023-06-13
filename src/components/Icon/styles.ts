import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      colors: { semantic },
    },
  }) => css`
    //sizes
    &.small {
      &,
      svg,
      path {
        max-width: 15px;
        max-height: 15px;
      }
    }

    &.base {
      &,
      svg,
      path {
        max-width: 20px;
        max-height: 20px;
      }
    }

    &.big {
      &,
      svg,
      path {
        max-width: 25px;
        max-height: 25px;
      }
    }

    //variants
    &.activated {
      svg,
      path {
        fill: ${semantic.success};
      }
    }
  `}
`;
