import { Shelter } from './shelter.entity';

export class ArrivalInfo {
  public id: number;

  public documentNumber: string;

  public date: string;

  public captureDocUrl: string;

  public employeeName: string;

  public shelter?: Shelter;
}
