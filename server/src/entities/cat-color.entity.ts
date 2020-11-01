import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CatColor {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Окрас'})
  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.color, {cascade: true})
  animal: Animal[];
}
