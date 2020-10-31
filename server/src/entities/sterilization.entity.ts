import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';

@Entity()
export class Sterilization {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public status: string;

  @Column()
  public date: string;

  @Column()
  public planDate: string;

  @Column()
  veterinarianName: string;

  @ManyToOne(() => Animal, user => user.sterilization)
  public animal: Animal;
}
