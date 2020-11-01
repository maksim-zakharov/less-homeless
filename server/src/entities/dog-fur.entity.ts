import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class DogFur {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

}
