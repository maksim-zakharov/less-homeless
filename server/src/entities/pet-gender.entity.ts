import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class PetGender {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Пол'})
  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.sex, {cascade: true})
  animal: Animal[];
}
