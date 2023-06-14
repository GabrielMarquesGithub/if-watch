import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

import * as S from "./styles";

import { Text } from "../../components/Text";

function ErrorBoundary() {
  const error = useRouteError();

  let text = "Oops!!";

  if (isRouteErrorResponse(error)) {
    text = error.status + " - " + error.statusText;
  }

  if (error instanceof Error) {
    text = error.message;
  }

  const letters = text.split("");

  return (
    <>
      <S.Container>
        <main>
          <Link to="/">
            <Text is="h2" size="big">
              {letters.map((letter, index) => {
                if (letter === " ") {
                  return "\u00A0\u00A0\u00A0";
                }
                return (
                  <S.Letter index={index} key={index}>
                    {letter}
                  </S.Letter>
                );
              })}
            </Text>
          </Link>
        </main>
      </S.Container>
    </>
  );
}

export { ErrorBoundary };
