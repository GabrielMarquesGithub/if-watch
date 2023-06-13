import { ITextareaProps } from "./types";
import * as S from "./styles";

function Textarea({ error, ...rest }: ITextareaProps) {
  return <S.Textarea className="textarea" aria-invalid={error} {...rest} />;
}

export { Textarea };
