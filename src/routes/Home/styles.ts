import styled, { css, keyframes } from "styled-components";

const mainApearAnimation = keyframes`
0%{
  transform: translateY(300px);
}
100%{
  transform: translateY(0px);
}
`;

export const Container = styled.div`
  ${({ theme: { container, spacing, transition } }) => css`
    width: ${container.large};
    margin: 0px auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing[20]};

    // children
    section {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .button {
        .icon {
          transform: rotate(0deg);
          transition: ${transition.slow};
        }

        &:hover {
          .icon {
            transform: rotate(180deg);
          }
        }
      }
    }

    main {
      width: 100%;

      display: grid;
      grid-template-columns: repeat(3, 300px);
      justify-content: space-between;
      row-gap: ${spacing[20]};

      animation: ${mainApearAnimation} 1.5s;
    }
  `}
`;
