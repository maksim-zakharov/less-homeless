import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Vaccination {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Дата вакцинации'})
  @Column()
  public date: string;

  @ApiProperty({description: 'Название препарата'})
  @Column()
  public medicineName: string;

  @ApiProperty({description: 'Номер серии препарата'})
  @Column()
  public medicineSeries: string;

  @ApiProperty({description: 'Вес животного'})
  @Column()
  public animalWeight: string;

  @ApiProperty({description: 'Доза препарата'})
  @Column()
  public dose: string;

  @ApiProperty({description: 'ФИО ветврача'})
  @Column()
  veterinarianName: string;

  @ManyToOne(() => Animal, {cascade: true})
  animal: Animal;
}
