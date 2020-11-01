import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class TailType {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Тип хвоста'})
  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.tail, {cascade: true})
  animal: Animal[];
}
