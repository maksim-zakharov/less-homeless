import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';

@Entity()
export class DogBreed {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
}
