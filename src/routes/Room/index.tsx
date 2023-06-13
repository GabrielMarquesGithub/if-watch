import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { onValue } from "firebase/database";

import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import { ReactComponent as DropIcon } from "../../assets/icons/drop.svg";
import { ReactComponent as HighThermometerIcon } from "../../assets/icons/highThermometer.svg";

import * as S from "./styles";

import roomContext from "../../contexts/roomContext";

import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { IRoomInfoModel } from "../../models/roomInfo.model";
import { useListener } from "../../hooks/useListener";

function Room() {
  const [roomInfo, setRoomInfo] = useState<IRoomInfoModel | null>(null);
  const { getRoom } = useContext(roomContext);
  const { roomId } = useParams();

  // Verificações de dados
  if (!roomId) return;
  const room = getRoom(roomId);

  if (!room) return;

  useListener<IRoomInfoModel>(
    "roomsInfo/" + room.roomInfoId,
    "value",
    onValue,
    (data) => setRoomInfo(data),
    () => setRoomInfo(null),
    roomId
  );

  if (!roomInfo) return;

  return (
    <S.Container>
      <header>
        <Text is="h2" size="big" lineLimit={1}>
          {room.name}
        </Text>
        <div className="icon-container">
          <span>
            <Icon icon={<PersonIcon />} />
            <Text is="h2" size="big">
              {roomInfo.amountOfPeople}
            </Text>
          </span>
          <span>
            <Icon icon={<DropIcon />} />
            <Text is="h2" size="big">
              {roomInfo.moisture}%
            </Text>
          </span>
          <span>
            <Icon icon={<HighThermometerIcon />} />
            <Text is="h2" size="big">
              {roomInfo.temperature}°
            </Text>
          </span>
        </div>
      </header>
    </S.Container>
  );
}

export { Room };
