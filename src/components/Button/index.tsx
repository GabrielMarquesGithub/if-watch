import { IButtonProps } from "./types";
import * as S from "./styles";

function Button({
  size,
  title,
  variant,
  disabled = false,
  ...rest
}: IButtonProps) {
  const classNames = `${size} ${variant}`;

  return (
    <S.Button
      title={title}
      aria-label={title}
      aria-disabled={disabled}
      disabled={disabled}
      className={"button " + classNames}
      {...rest}
    />
  );
}

export { Button };
