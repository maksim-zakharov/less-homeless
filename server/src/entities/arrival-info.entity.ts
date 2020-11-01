import { Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { District } from '../../../src/app/admin/animals/models/district.entity';
import { ReasonForLeaving } from './reason-for-leaving.entity';
import { Shelter } from './shelter.entity';

@Entity()
export class ArrivalInfo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public documentNumber: string;

  @Column()
  public date: string;

  @Column()
  public captureDocUrl: string;

  @Column()
  public employeeName: string;

  @ManyToOne(() => Shelter)
  shelter?: Shelter;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal;
}
