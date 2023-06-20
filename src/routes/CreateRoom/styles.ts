import styled, { css, keyframes } from "styled-components";

export const Container = styled.section`
  ${({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing[20]};

    section:last-child {
      display: grid;
      gap: ${spacing[20]};
    }

    main {
      height: calc(120px + ${spacing[20]});
      width: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(4, 60px);
      grid-template-areas:
        "name name"
        "description local"
        "description type"
        "button button";
      gap: ${spacing[10]};

      input:first-child {
        grid-area: name;
      }

      input {
        grid-area: local;
      }

      textarea {
        grid-area: description;
      }

      button {
        grid-area: button;
      }

      select {
        grid-area: type;
      }
    }
  `}
`;
