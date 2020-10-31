import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';

@Entity()
export class PetSize {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.size, {cascade: true})
  animal: Animal[];
}
