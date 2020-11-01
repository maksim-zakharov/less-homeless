import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class DogColor {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Окрас'})
  @Column()
  public name: string;
}
