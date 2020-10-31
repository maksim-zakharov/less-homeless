import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';

@Entity()
export class CatColor {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.color, {cascade: true})
  animal: Animal[];
}
