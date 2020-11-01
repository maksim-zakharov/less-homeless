import { Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ParasiteTreatment {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Дата обработки'})
  @Column()
  public date: string;

  @ApiProperty({description: 'Название препарата'})
  @Column()
  public medicineName: string;

  @ApiProperty({description: 'Вес животного'})
  @Column()
  public animalWeight: string;

  @ApiProperty({description: 'Доза препарата'})
  @Column()
  public dose: string;

  @ApiProperty({description: 'ФИО ветврача'})
  @Column()
  veterinarianName: string;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal;
}
