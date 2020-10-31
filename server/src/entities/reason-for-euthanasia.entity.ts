import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';

@Entity()
export class ReasonForEuthanasia {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.euthanasiaReason, {cascade: true})
  animal: Animal[];
}
