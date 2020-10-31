import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';

@Entity()
export class PetGender {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string

  @OneToMany(() => Animal, v => v.sex, {cascade: true})
  animal: Animal[];
}
