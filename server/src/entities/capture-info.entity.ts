import { Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';

@Entity()
export class CaptureInfo {
  @PrimaryGeneratedColumn()
  public id: number;

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

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal;
}
