import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

import * as S from "./styles";

import roomContext from "../../contexts/roomContext";

import { HeaderWithIcon } from "../../components/HeaderWithIcon";
import { Text } from "../../components/Text";
import { ICreateRoomModel } from "../../models/room.model";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

const BASE: ICreateRoomModel = {
  name: "",
  local: "",
  description: "",
  type: "office",
  movement: false,
  openDoor: false,
  airOn: false,
};

function CreateRoom() {
  const { setRoom } = useContext(roomContext);
  const navigate = useNavigate();
  const [newRoom, setNewRoom] = useState<ICreateRoomModel>(BASE);

  const invalidSubmit = !newRoom.name || !newRoom.local || !newRoom.description;

  const handleSubmit = () => {
    if (invalidSubmit) return;

    setRoom(newRoom);
    navigate("/");
  };

  return (
    <>
      <S.Container>
        <section>
          <HeaderWithIcon icon={<PlusIcon />} title="Criação de Sala" />
        </section>
        <section>
          <main>
            <Input
              type="text"
              aria-autocomplete="list"
              spellCheck={true}
              aria-label="Digite o nome da sala"
              placeholder="Nome da sala"
              error={!newRoom.name}
              onChange={(e) =>
                setNewRoom((room) => ({ ...room, name: e.target.value }))
              }
            />
            <Input
              type="text"
              aria-autocomplete="list"
              spellCheck={true}
              aria-label="Digite o local da sala"
              placeholder="Local da sala"
              error={!newRoom.local}
              onChange={(e) =>
                setNewRoom((room) => ({ ...room, local: e.target.value }))
              }
            />
            <Textarea
              aria-autocomplete="list"
              spellCheck={true}
              aria-label="Digite uma descrição para a sala"
              placeholder="Descrição da sala"
              error={!newRoom.description}
              onChange={(e) =>
                setNewRoom((room) => ({ ...room, description: e.target.value }))
              }
            />
            <Button
              onClick={handleSubmit}
              title="Criar nova sala"
              role="submit"
              shape="full"
              disabled={invalidSubmit}
            >
              <Text is="p">Criar Sala</Text>
            </Button>
          </main>
        </section>
      </S.Container>
    </>
  );
}

export { CreateRoom };
