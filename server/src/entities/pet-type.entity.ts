import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';

@Entity()
export class PetType {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.category, {cascade: true})
  animal: Animal[];
}
