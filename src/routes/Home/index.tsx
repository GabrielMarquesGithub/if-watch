import { useContext, ReactElement } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as BookIcon } from "../../assets/icons/book.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

import * as S from "./styles";

import { RoomCard } from "../../components/RoomCard";
import { HeaderWithIcon } from "../../components/HeaderWithIcon";
import { roomContext } from "../../contexts/roomContext";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { Header } from "../../components/Header";

function Home() {
  const { rooms } = useContext(roomContext);
  let mainContent: ReactElement | ReactElement[] = <div>Dados não existem</div>;

  if (rooms) {
    mainContent = rooms.map((room) => (
      <Link to={"room/" + room.id} key={room.id}>
        <RoomCard {...room} />
      </Link>
    ));
  }

  return (
    <>
      <S.Container>
        <Header background />
        <section>
          <HeaderWithIcon icon={<BookIcon />} title="Salas de Aula" />
          <Link to="create">
            <Button
              onClick={() => {}}
              title="Criar nova sala"
              role="link"
              size="squared"
            >
              <Icon icon={<PlusIcon />} />
            </Button>
          </Link>
        </section>
        <main>{mainContent}</main>
      </S.Container>
    </>
  );
}

export { Home };
