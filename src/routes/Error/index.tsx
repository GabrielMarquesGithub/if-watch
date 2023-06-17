import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

import * as S from "./styles";

import { LetterAnimation } from "../../components/LetterAnimation";

function ErrorBoundary() {
  const error = useRouteError();

  let text = "Oops!!";

  if (isRouteErrorResponse(error)) {
    text = error.status + " - " + error.statusText;
  }

  if (error instanceof Error) {
    text = error.message;
  }

  return (
    <S.Container>
      <Link to="/">
        <LetterAnimation text={text} />
      </Link>
    </S.Container>
  );
}

export { ErrorBoundary };
