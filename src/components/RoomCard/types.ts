import { IRoomModel } from "../../models/room.model";

export interface IRoomCardProps
  extends Pick<
    IRoomModel,
    | "name"
    | "local"
    | "description"
    | "type"
    | "movement"
    | "openDoor"
    | "airOn"
  > {
  disabled?: boolean;
}
