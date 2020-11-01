import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class PetType {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Вид животного'})
  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.category, {cascade: true})
  animal: Animal[];
}
