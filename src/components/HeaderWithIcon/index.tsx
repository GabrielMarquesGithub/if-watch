import { IHeaderWithIconProps } from "./types";
import * as S from "./styles";

import { Text } from "../Text";
import { Icon } from "../Icon";

function HeaderWithIcon({ children, icon, title, full }: IHeaderWithIconProps) {
  return (
    <S.Container className={`${full && "full"}`}>
      <span>
        <Icon icon={icon} />
      </span>
      <Text is="h2">{title}</Text>
      {children && <div>{children}</div>}
    </S.Container>
  );
}

export { HeaderWithIcon };
