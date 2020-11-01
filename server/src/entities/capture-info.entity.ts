import { Column, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { District } from './district.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CaptureInfo {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Номер акта отлова'})
  @Column()
  public documentNumber: string;

  @ApiProperty({description: 'Дата акта отлова'})
  @Column()
  public date: string;

  @ApiProperty({description: 'Ссылка на акт отлова'})
  @Column()
  public captureDocUrl: string;

  @ApiProperty({description: 'Номер заказа-наряда'})
  @Column()
  public orderId: number;

  @ApiProperty({description: 'Дата заказа-наряда'})
  @Column()
  public orderDate: string;

  @ApiProperty({description: 'Ссылка на документ заказа-наряда'})
  @Column()
  public orderDocUrl: string;

  @ApiProperty({description: 'Адрес места отлова'})
  @Column()
  public address: string;

  @ApiProperty({description: 'Административный округ'})
  @ManyToOne(() => District)
  public district: District;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal;
}
