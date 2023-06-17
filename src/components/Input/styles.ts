import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({
    theme: {
      colors: { text, translucentBackground, background, semantic },
      typography: { fontFamily, fontWeight, fontSize },
      filter,
      spacing,
      borderRadius,
      transition,
    },
  }) => css`
    height: 60px;
    padding: 0 ${spacing[20]};
    border: 3px solid transparent;
    outline: none;
    border-radius: ${borderRadius.base};

    background: ${translucentBackground.secondary};
    backdrop-filter: ${filter.blur};

    font-family: ${fontFamily.normal};
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.base};
    color: ${text.light};

    transition: ${transition.normal};

    // special
    &::placeholder {
      font-family: ${fontFamily.normal};
      font-weight: ${fontWeight.normal};
      font-size: ${fontSize.base};
      color: ${background.tertiary};
    }

    // states
    &:focus {
      background: ${translucentBackground.primary};
    }

    &:hover {
      background: ${translucentBackground.primary};
    }

    &[aria-invalid="true"] {
      border: 3px solid ${semantic.error};
    }
  `}
`;
