import { Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';

@Entity()
export class ParasiteTreatment {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public date: string;

  @Column()
  public medicineName: string;

  @Column()
  public animalWeight: string;

  @Column()
  public dose: string;

  @Column()
  veterinarianName: string;

  @OneToOne(() => Animal, {cascade: true})

  animal: Animal;
}
