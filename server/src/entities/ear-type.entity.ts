import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class EarType {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Тип ушей'})
  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.ears, {cascade: true})
  animal: Animal[];
}
