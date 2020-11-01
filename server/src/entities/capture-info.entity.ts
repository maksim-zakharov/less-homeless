import { Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { District } from '../../../src/app/admin/animals/models/district.entity';
import { ReasonForLeaving } from './reason-for-leaving.entity';

@Entity()
export class CaptureInfo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public documentNumber: string;

  @Column()
  public date: string;

  @Column()
  public captureDocUrl: string;

  @Column()
  public orderId: number;

  @Column()
  public orderDate: string;

  @Column()
  public orderDocUrl: string;

  @Column()
  public address: string;

  @ManyToOne(() => District)
  public district: District;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal;
}
