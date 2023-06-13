export interface IRoomModel {
  id: string;
  roomInfoId: string;
  name: string;
  local: string;
  description: string;
  type: "classroom" | "laboratory" | "office";
  openDoor: boolean;
  airOn: boolean;
  movement: boolean;
}

export interface ICreateRoomModel
  extends Omit<IRoomModel, "id" | "roomInfoId"> {}
