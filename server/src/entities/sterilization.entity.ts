import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Sterilization {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Статус стерилизации'})
  @Column()
  public status: string;

  @ApiProperty({description: 'Дата стерилизации'})
  @Column()
  public date: string;

  @ApiProperty({description: 'Плановая дата стерилизации'})
  @Column()
  public planDate: string;

  @ApiProperty({description: 'ФИО ветврача'})
  @Column()
  veterinarianName: string;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal;
}
