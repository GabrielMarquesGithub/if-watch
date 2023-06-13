import { IInputProps } from "./types";
import * as S from "./styles";

function Input({ error, ...rest }: IInputProps) {
  return <S.Input className="input" aria-invalid={error} {...rest} />;
}

export { Input };
