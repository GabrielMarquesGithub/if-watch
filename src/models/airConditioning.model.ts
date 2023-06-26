import { IElectronicModel } from "./electronic.model";

export interface IAirConditioningModel extends IElectronicModel {
  temperature:
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30;
}
