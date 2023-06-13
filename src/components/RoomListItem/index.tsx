import { IRoomListItemProps } from "./types";

import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import { ReactComponent as DoorIcon } from "../../assets/icons/door.svg";
import { ReactComponent as AirIcon } from "../../assets/icons/air.svg";

import * as S from "./styles";

import { Text } from "../Text";
import { Icon } from "../Icon";

function RoomListItem({
  name,
  airOn,
  movement,
  openDoor,
  active,
}: IRoomListItemProps) {
  return (
    <S.Container className={`${active && "active"}`}>
      <Text is="h3" size="small">
        {name}
      </Text>
      <div className="icon-container">
        <Icon icon={<PersonIcon />} size="small" activated={movement} />
        <Icon icon={<DoorIcon />} size="small" activated={openDoor} />
        <Icon icon={<AirIcon />} size="small" activated={airOn} />
      </div>
    </S.Container>
  );
}

export { RoomListItem };
