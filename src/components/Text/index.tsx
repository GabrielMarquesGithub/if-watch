import { ITextProps } from "./types";
import * as S from "./styles";

function Text({
  is,
  font = "normal",
  size = "base",
  decoration,
  lineLimit,
  ...rest
}: ITextProps) {
  const classNames = `${font} ${size} ${decoration} ${
    lineLimit && `lineLimit lineLimit-${lineLimit}`
  }`;

  return <S.Text as={is} className={classNames} {...rest} />;
}

export { Text };
