import { createContext, ReactNode, useEffect, useState } from "react";
import {
  ref,
  get,
  push,
  set,
  onChildAdded,
  onChildChanged,
} from "firebase/database";

import { database } from "../services/firebase";

import { ICreateRoomModel, IRoomModel } from "../models/room.model";
import { IRoomInfoModel } from "../models/roomInfo.model";
import { useListener } from "../hooks/useListener";

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
  const [, setError] = useState<Error | null>(null);

  // Convertendo o formato vindo do realtime em array para facilitar formatações
  const mapToArray = (object: { [key: string]: IRoomModel }): IRoomModel[] => {
    return Object.values(object);
  };

  const getRoom = (roomId: string) => {
    if (!rooms) return null;
    return rooms.find((room) => room.id === roomId) ?? null;
  };

  const setRoom = (room: ICreateRoomModel) => {
    const roomsRef = ref(database, "rooms");
    const roomsInfoRef = ref(database, "roomsInfo");
    // Usando push para definir key
    const newRoomRef = push(roomsRef);
    const newRoomInfoRef = push(roomsInfoRef);
    newRoomInfoRef;

    if (!newRoomRef.key || !newRoomInfoRef.key) return;

    // Criando nova sala
    const roomData: IRoomModel = {
      id: newRoomRef.key,
      roomInfoId: newRoomInfoRef.key,
      ...room,
    };

    set(newRoomRef, roomData);

    const roomInfoData: IRoomInfoModel = {
      id: newRoomInfoRef.key,
      roomId: newRoomRef.key,
      amountOfPeople: 0,
      moisture: 0,
      temperature: 0,
      date: new Date().getTime(),
    };

    // Criando novas info para a sala
    set(newRoomInfoRef, roomInfoData);
  };

  // useEffect para realizar o primeiro download
  useEffect(() => {
    const roomsListRef = ref(database, "rooms");

    // listener do firebase para eventos de mudança em uma unica sala
    // Usando then por estar dentro do useEffect
    get(roomsListRef).then((snapshot) => {
      const roomsData = snapshot.val();
      if (roomsData) {
        setRooms(mapToArray(roomsData));
      }
    });
  }, []);

  useListener<IRoomModel>(
    "rooms",
    "child_changed",
    onChildChanged,
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
    "rooms",
    "child_added",
    onChildAdded,
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
