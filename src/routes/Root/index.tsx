import { Link, Outlet } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

import * as S from "./styles";

import { Icon } from "../../components/Icon";
import { Text } from "../../components/Text";

function Root() {
  return (
    <>
      <S.Container>
        <header>
          <Link to="/">
            <Icon icon={<LogoIcon />} size="huge" />
            <Text is="h1" size="huge" font="style">
              Watch
            </Text>
          </Link>
        </header>
        <Outlet />
      </S.Container>
    </>
  );
}

export { Root };
