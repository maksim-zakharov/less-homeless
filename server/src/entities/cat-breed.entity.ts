import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CatBreed {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Порода'})
  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.breed, {cascade: true})
  animal: Animal[];
}
