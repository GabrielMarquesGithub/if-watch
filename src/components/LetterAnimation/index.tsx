import { ILetterAnimationProps } from "./types";
import * as S from "./styles";

import { Text } from "../Text";

function LetterAnimation({ text }: ILetterAnimationProps) {
  const letters = text.split("");

  return (
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
  );
}

export { LetterAnimation };
