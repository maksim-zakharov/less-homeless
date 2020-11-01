import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';

@Entity()
export class District {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal[];
}
