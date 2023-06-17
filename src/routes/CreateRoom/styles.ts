import styled, { css, keyframes } from "styled-components";

const mainApearAnimation = keyframes`
0%{
  transform: translateY(300px);
}
100%{
  transform: translateY(0px);
}
`;

export const Container = styled.section`
  ${({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing[20]};

    section:last-child {
      display: grid;
      gap: ${spacing[20]};

      animation: ${mainApearAnimation} 1.5s;
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
        "description local"
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
    }
  `}
`;
