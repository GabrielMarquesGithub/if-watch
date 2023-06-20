import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import { ReactComponent as DoorIcon } from "../../assets/icons/door.svg";
import { ReactComponent as AirIcon } from "../../assets/icons/air.svg";

import { IRoomCardProps } from "./types";
import * as S from "./styles";

import { Text } from "../Text";
import { Icon } from "../Icon";

function RoomCard({
  name,
  local,
  description,
  type,
  movement,
  openDoor,
  airOn,
}: IRoomCardProps) {
  return (
    <S.Container>
      <div className="image-container">
        <div className="icon-container">
          <span>
            <Icon
              icon={<PersonIcon />}
              size="small"
              color={movement ? "success" : undefined}
            />
          </span>
          <span>
            <Icon
              icon={<DoorIcon />}
              size="small"
              color={openDoor ? "success" : undefined}
            />
          </span>
          <span>
            <Icon
              icon={<AirIcon />}
              size="small"
              color={airOn ? "success" : undefined}
            />
          </span>
        </div>
        <img src={`/src/assets/images/${type}.png`} />
      </div>
      <div className="text-container">
        <Text is="h3" lineLimit={1}>
          {name}
        </Text>
        <span className="local-container">
          <Text is="span" size="small" lineLimit={1}>
            {local}
          </Text>
        </span>
        <Text is="p" size="small" lineLimit={2}>
          {description}
        </Text>
      </div>
    </S.Container>
  );
}

export { RoomCard };
