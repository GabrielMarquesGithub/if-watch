import { IInputProps } from "./types";
import * as S from "./styles";

function Input({ error, ...rest }: IInputProps) {
  return <S.Input aria-invalid={error} {...rest} />;
}

export { Input };
