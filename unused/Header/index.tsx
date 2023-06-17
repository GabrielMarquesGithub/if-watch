import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

import { IHeaderProps } from "./types";
import * as S from "./styles";

import { Text } from "../../src/components/Text";
import { Icon } from "../../src/components/Icon";

function Header({ size = "base", background }: IHeaderProps) {
  return (
    <S.Header className={`${size} ${background && "background"}`} role="link">
      <Link to="/">
        <Icon icon={<LogoIcon />} size="huge" />
        <Text is="h1" size={size === "base" ? "huge" : "big"}>
          Watch
        </Text>
      </Link>
    </S.Header>
  );
}

export { Header };
