import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      borderRadius,
      spacing,
      colors: { background, translucentBackground },
      transition,
      filter,
    },
  }) => css`
    width: 300px;
    height: 300px;
    border-radius: ${borderRadius.base};

    position: relative;
    z-index: 1;
    overflow: hidden;

    background: ${translucentBackground.secondary};
    backdrop-filter: ${filter.blur};

    transition: ${transition.normal};

    // states
    &:not(.disabled):hover {
      backdrop-filter: ${filter.blur};

      cursor: pointer;

      transform: scale(1.02);
    }

    // children
    .image-container {
      height: 200px;
      position: relative;

      // children
      img {
        width: 300px;
        height: 200px;
      }

      .icon-container {
        width: 100%;
        padding: ${spacing[10]} ${spacing[10]} 0 0;

        position: absolute;

        display: flex;
        justify-content: end;
        gap: ${spacing[10]};

        // children
        span {
          padding: 7px;
          border-radius: 100%;

          display: block;
          justify-content: center;
          align-items: center;

          background: ${translucentBackground.secondary};
          backdrop-filter: ${filter.blur};
        }
      }
    }

    .text-container {
      padding: ${spacing[10]};

      display: grid;
      align-items: center;
      row-gap: ${spacing[10]};
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 40px 1fr;
      grid-template-areas:
        "name local"
        "description description";

      h2 {
        grid-area: name;
      }

      .local-container {
        grid-area: local;
        justify-self: flex-end;

        height: 35px;
        width: 80px;
        padding: 0 ${spacing[10]};
        border-radius: ${borderRadius.base};

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${background.tertiary};

        text-align: center;
      }

      p {
        grid-area: description;
      }
    }
  `}
`;
