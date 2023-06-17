import { useContext } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as BookIcon } from "../../assets/icons/book.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

import * as S from "./styles";

import { RoomCard } from "../../components/RoomCard";
import { HeaderWithIcon } from "../../components/HeaderWithIcon";
import { roomContext } from "../../contexts/roomContext";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { LetterAnimation } from "../../components/LetterAnimation";
import { Notification } from "../../components/Notification";

function Home() {
  const { rooms, error, loading } = useContext(roomContext);

  return (
    <>
      <S.Container>
        <section>
          <HeaderWithIcon icon={<BookIcon />} title="Salas de Aula" />
          <Link to="create">
            <Button title="Criar nova sala" role="link" shape="squared">
              <span className="icon">
                <Icon icon={<PlusIcon />} />
              </span>
            </Button>
          </Link>
        </section>
        <main className={`${!rooms && "isLoading"}`}>
          {loading && <LetterAnimation text="Loading..." />}
          {rooms &&
            rooms.map((room) => (
              <Link to={"room/" + room.id} key={room.id}>
                <RoomCard {...room} />
              </Link>
            ))}
        </main>
      </S.Container>
      {error && (
        <Notification message={`Error - ${error.message}`} onClose={() => {}} />
      )}
    </>
  );
}

export { Home };
