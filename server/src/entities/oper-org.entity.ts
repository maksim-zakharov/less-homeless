import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Shelter } from './shelter.entity';
import { Entity } from 'typeorm';

@Entity()
export class OperOrg {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => Shelter, photo => photo.subjection)
  shelters: Shelter[];
}
