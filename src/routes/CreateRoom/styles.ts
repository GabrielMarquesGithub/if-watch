import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { container, spacing } }) => css`
    width: ${container.large};
    margin: 0px auto;

    display: flex;
    flex-direction: column;
    gap: ${spacing[20]};

    // children
    & > section {
      display: grid;
      grid-template-columns: 300px calc(
          ${container.large} - 300px - ${spacing[20]}
        );
      grid-template-areas: "card-container form-container";
      gap: ${spacing[20]};

      section {
        grid-area: card-container;

        display: flex;
        flex-direction: column;
        gap: ${spacing[10]};
      }

      main {
        grid-area: form-container;

        height: calc(120px + ${spacing[20]});
        width: 100%;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 60px 60px;
        grid-template-areas:
          "name name"
          "description local"
          "description button";
        gap: ${spacing[20]};

        .input:first-child {
          grid-area: name;
        }

        .input {
          grid-area: local;
        }

        .textarea {
          grid-area: description;
        }

        .button {
          grid-area: button;
        }
      }
    }
  `}
`;
