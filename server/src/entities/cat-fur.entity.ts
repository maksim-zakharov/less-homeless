import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';

@Entity()
export class CatFur {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.wool, {cascade: true})
  animal: Animal[];
}
