import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class DogFur {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Шерсть'})
  @Column()
  public name: string;

}
