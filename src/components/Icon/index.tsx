import { IIconProps } from "./types";
import * as S from "./styles";

function Icon({
  icon,
  size = "base",
  activated = false,
  background = false,
}: IIconProps) {
  const classNames = `${size} ${activated ? "activated" : ""} ${
    background ? "background" : ""
  }`;

  return <S.Container className={"icon " + classNames}>{icon}</S.Container>;
}

export { Icon };
