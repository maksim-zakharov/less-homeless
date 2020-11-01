import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';

@Entity()
export class Euthanasia {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public veterinarianName: string;

  @Column()
  public date: string;

  @Column()
  public act: string;

  @Column()
  public reason: string;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal[];
}
