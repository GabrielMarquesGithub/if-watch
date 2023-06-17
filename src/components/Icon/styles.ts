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
        max-width: 60px;
        max-height: 60px;
      }
    }

    &.huge {
      &,
      svg,
      path {
        max-width: 100px;
        max-height: 100px;
      }
    }

    //variants
    &.info {
      svg,
      path {
        fill: ${semantic.info};
      }
    }

    &.error {
      svg,
      path {
        fill: ${semantic.error};
      }
    }

    &.success {
      svg,
      path {
        fill: ${semantic.success};
      }
    }
  `}
`;
