import { useNavigate } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

import { IHeaderProps } from "./types";
import * as S from "./styles";

import { Text } from "../Text";

function Header({ size = "base", background }: IHeaderProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <S.Header className={`${size} ${background && "background"}`} role="link">
      <LogoIcon onClick={handleClick} />
      <Text is="h1" size={size === "base" ? "huge" : "big"}>
        Watch
      </Text>
    </S.Header>
  );
}

export { Header };
