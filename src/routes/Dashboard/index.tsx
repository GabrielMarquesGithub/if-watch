import { useContext, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

import * as S from "./styles";

import { roomContext } from "../../contexts/roomContext";
import { RoomListItem } from "../../components/RoomListItem";
import { Icon } from "../../components/Icon";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

const ITEMS_PER_PAGE = 5;

function Dashboard() {
  // Salas
  const { rooms } = useContext(roomContext);
  const { roomId } = useParams();

  //Paginação
  const [page, setPage] = useState(1);

  if (!rooms) return;

  // Cálculo de paginação
  const shownRooms = rooms.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Logica de mostrar botões
  const showDecreaseButton = page < 2;
  const showIncreaseButton = page * ITEMS_PER_PAGE >= rooms.length;

  return (
    <S.Container>
      <aside>
        <Header size="small" />
        <ul>
          {shownRooms.map((room) => (
            <Link to={"room/" + room.id} key={room.id}>
              <RoomListItem {...room} active={roomId == room.id} />
            </Link>
          ))}
        </ul>
        <footer>
          {showDecreaseButton || (
            <span className="decrease-button">
              <Button
                onClick={() => setPage(page - 1)}
                title="Voltar para pagina anterior"
                role="button"
                size="squared"
                variant="transparent"
              >
                <Icon size="small" icon={<ArrowIcon />} />
              </Button>
            </span>
          )}
          {showIncreaseButton || (
            <span className="increase-button">
              <Button
                onClick={() => setPage(page + 1)}
                title="Ir para a proxima pagina"
                role="button"
                size="squared"
                variant="transparent"
              >
                <Icon size="small" icon={<ArrowIcon />} />
              </Button>
            </span>
          )}
        </footer>
      </aside>
      <main>
        <Outlet />
      </main>
    </S.Container>
  );
}

export { Dashboard };
