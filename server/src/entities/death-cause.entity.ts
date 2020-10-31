import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Animal } from '../animals/animal';
import { Vaccination } from './vaccination.entity';

@Entity()
export class DeathCause {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.causeDeath, {cascade: true})
  animal: Animal[];
}
