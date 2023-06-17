import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import { ReactComponent as DropIcon } from "../../assets/icons/drop.svg";
import { ReactComponent as HighThermometerIcon } from "../../assets/icons/highThermometer.svg";
import { ReactComponent as LightIcon } from "../../assets/icons/light.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";

import * as S from "./styles";

import roomContext from "../../contexts/roomContext";

import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { IRoomInfoModel } from "../../models/roomInfo.model";
import { useListener } from "../../hooks/useListener";
import { Button } from "../../components/Button";
import { LetterAnimation } from "../../components/LetterAnimation";
import { IRoomModel } from "../../models/room.model";
import { useRemoveData } from "../../hooks/useRemoveData";

function Room() {
  const { roomId } = useParams();
  const [roomInfo, setRoomInfo] = useState<IRoomInfoModel | null>(null);
  const [room, setRoom] = useState<IRoomModel | null>(null);
  const { getRoom, rooms } = useContext(roomContext);

  // IMPORTANTE
  const navigate = useNavigate();

  // Buscando a sala quando
  useEffect(() => {
    if (!roomId || !rooms) return;

    setRoom(getRoom(roomId));
  }, [roomId, rooms]);

  // Listener para buscar as info relacionadas a salas
  useListener<IRoomInfoModel>(
    {
      path: "roomsInfo/" + (room ? room.roomInfoId : ""),
      eventType: "changed",
      useEffectTrigger: [room],
      addListener: !!room,
    },
    (data) => setRoomInfo(data),
    (error) => {}
  );

  const handleRoomDelete = async () => {
    if (!room) return;
    await useRemoveData("roomsInfo/" + room.roomInfoId);
    await useRemoveData("rooms/" + room.id);
    navigate(
      rooms && rooms.length >= 2
        ? "/room/" + (rooms[0].id !== room.id ? rooms[0].id : rooms[1].id)
        : "/"
    );
  };

  return (
    <S.Container className={`${!roomInfo && "isLoading"}`}>
      {!room && !roomInfo && <LetterAnimation text="Loading..." />}
      {room && roomInfo && (
        <header>
          <div className="name-container">
            <Text is="h2" size="big" lineLimit={1}>
              {room.name}
            </Text>
            <Button
              onClick={handleRoomDelete}
              title="Deletar sala"
              role="button"
              shape="squared"
              size="small"
              variant="transparent"
            >
              <Icon icon={<TrashIcon />} />
            </Button>
          </div>
          <div className="icon-container">
            <span>
              <Icon icon={<PersonIcon />} />
              <Text is="h2" size="big">
                {roomInfo.amountOfPeople}
              </Text>
            </span>
            <span>
              <Icon icon={<LightIcon />} />
              <Text is="h2" size="big">
                {roomInfo.luminosity}%
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
      )}
    </S.Container>
  );
}

export { Room };
