import { IRoomModel } from "../../models/room.model";

export interface IRoomListItemProps
  extends Pick<IRoomModel, "name" | "movement" | "openDoor" | "airOn"> {
  active?: boolean;
}
