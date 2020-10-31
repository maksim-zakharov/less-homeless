import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';

@Entity()
export class Vaccination {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public date: string;

  @Column()
  public medicineName: string;

  @Column()
  public medicineSeries: string;

  @Column()
  public animalWeight: string;

  @Column()
  public dose: string;

  @Column()
  veterinarianName: string;

  @ManyToOne(() => Animal, {cascade: true})

  animal: Animal;
}
