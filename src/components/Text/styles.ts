import styled, { css } from "styled-components";

export const Text = styled.p`
  ${({
    theme: {
      colors: { text, brand },
      typography: { fontFamily, fontSize, fontWeight },
      transition,
    },
  }) => css`
    text-decoration: none;
    color: ${text.light};
    height: min-content;
    font-weight: ${fontWeight.normal};

    &.hover {
      transition: ${transition.normal};

      &:hover {
         {
          color: ${brand.primary};

          * {
            color: ${brand.primary};
          }
        }
      }
    }

    // sizes
    &.small {
      font-size: ${fontSize.small};
    }

    &.base {
      font-size: ${fontSize.base};
    }

    &.big {
      font-size: ${fontSize.big};
    }

    &.huge {
      font-size: ${fontSize.huge};
    }

    // family
    &.normal {
      font-family: ${fontFamily.normal};
    }

    &.style {
      font-family: ${fontFamily.style};
    }

    // decoration
    &.underline {
      text-decoration: underline;
    }

    // lineLimit
    &.lineLimit {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &.lineLimit-1 {
      -webkit-line-clamp: 1;
    }

    &.lineLimit-2 {
      -webkit-line-clamp: 2;
    }
  `}
`;
