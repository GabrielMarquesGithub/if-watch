import { IIconProps } from "./types";
import * as S from "./styles";

function Icon({ icon, size = "base", color }: IIconProps) {
  const classNames = `${size} ${color ?? color}`;

  return <S.Container className={classNames}>{icon}</S.Container>;
}

export { Icon };
