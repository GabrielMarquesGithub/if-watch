import { IButtonProps } from "./types";
import * as S from "./styles";

function Button({
  size = "base",
  title,
  shape,
  variant,
  disabled = false,
  ...rest
}: IButtonProps) {
  const classNames = `${size} ${variant} ${shape}`;

  return (
    <S.Button
      title={title}
      aria-label={title}
      aria-disabled={disabled}
      disabled={disabled}
      className={classNames}
      {...rest}
    />
  );
}

export { Button };
