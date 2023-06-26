export interface IElectronicModel {
  id: string;
  name: string;
  online: boolean;
  roomId: string;
}

export interface ICreateElectronicModel
  extends Pick<IElectronicModel, "name"> {}
