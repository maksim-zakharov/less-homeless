import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class District {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Административный округ'})
  @Column()
  public name: string;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal[];
}
