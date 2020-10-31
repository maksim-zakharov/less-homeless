import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Animal } from '../animals/animal';

@Entity()
export class DeathCause {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => Animal, user => user.causeDeath)
  public animal: Animal;
}
