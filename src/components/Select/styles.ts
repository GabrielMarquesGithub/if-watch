import styled, { css } from "styled-components";

export const Select = styled.select`
  ${({
    theme: {
      colors: { text, translucentBackground, semantic, background },
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

    font-family: ${fontFamily.normal};
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.base};
    color: ${text.light};

    transition: ${transition.normal};

    option {
      background: ${background.secondary};
      color: ${text.light};
    }

    option:hover {
      background-color: ${background.primary};
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
