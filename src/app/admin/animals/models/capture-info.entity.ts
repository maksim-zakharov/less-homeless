import { District } from './district.entity';

export class CaptureInfo {
  public id: number;


  public date: string;


  public captureDocUrl: string;


  public orderId: number;


  public orderDate: string;


  public orderDocUrl: string;

  public district: District;

  public address: string;
}
