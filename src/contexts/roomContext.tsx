import { createContext, ReactNode, useState } from "react";

import { ICreateRoomModel, IRoomModel } from "../models/room.model";
import { ICreateRoomInfoModel } from "../models/roomInfo.model";
import { useListener } from "../hooks/useListener";
import { useSetData } from "../hooks/useSetData";
import { useGetData } from "../hooks/useGetData";

interface IRoomContext {
  rooms: IRoomModel[] | null;
  getRoom: (roomId: string) => IRoomModel | null;
  setRoom: (room: ICreateRoomModel) => void;
}

const BASE: IRoomContext = {
  rooms: null,
  getRoom: () => null,
  setRoom: () => {},
};

export const roomContext = createContext<IRoomContext>(BASE);

export function RoomProvider({ children }: { children: ReactNode }) {
  const [rooms, setRooms] = useState<IRoomModel[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const getRoom = (roomId: string) => {
    if (!rooms) return null;
    return rooms.find((room) => room.id === roomId) ?? null;
  };

  const setRoom = async (room: ICreateRoomModel) => {
    // Criando dados zerados para o inicio da sala
    const roomInfo: ICreateRoomInfoModel = {
      amountOfPeople: 0,
      moisture: 0,
      temperature: 0,
      date: new Date().getTime(),
    };

    let roomInfoId: string;

    await useSetData("roomsInfo", (dataRef) => {
      roomInfoId = dataRef ?? "";
      return { ...roomInfo, id: dataRef };
    });

    await useSetData<IRoomModel>("rooms", (dataRef) => {
      return { ...room, id: dataRef, roomInfoId: roomInfoId };
    });
  };

  useGetData<IRoomModel[]>("rooms", (data) => setRooms(data));

  useListener<IRoomModel>(
    { path: "rooms", eventType: "child_changed" },
    (data) =>
      setRooms(
        (prevRooms) =>
          prevRooms &&
          prevRooms.map((room) => (room.id === data.id ? data : room))
      ),
    (error) => {
      setError(error);
    }
  );

  useListener<IRoomModel>(
    { path: "rooms", eventType: "child_added" },
    (data) =>
      setRooms((prevRooms) => (prevRooms ? [...prevRooms, data] : [data])),
    (error) => {
      setError(error);
    }
  );

  return (
    <roomContext.Provider value={{ rooms, getRoom, setRoom }}>
      {children}
    </roomContext.Provider>
  );
}

export default roomContext;
