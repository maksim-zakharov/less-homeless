import { Column, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { Shelter } from './shelter.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ArrivalInfo {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Номер документа акта поступления'})
  @Column()
  public documentNumber: string;

  @ApiProperty({description: 'Дата поступления'})
  @Column()
  public date: string;

  @ApiProperty({description: 'Ссылка на акт поступления'})
  @Column()
  public captureDocUrl: string;

  @ApiProperty({description: 'ФИО приемщика'})
  @Column()
  public employeeName: string;

  @ApiProperty({description: 'Наименование приюта'})
  @ManyToOne(() => Shelter)
  shelter?: Shelter;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal;
}
