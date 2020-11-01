import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class DogBreed {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Порода'})
  @Column()
  public name: string;
}
