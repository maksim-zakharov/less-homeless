import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class DisposalInfo {
  @PrimaryGeneratedColumn()
  public id: number;

  /**
   * Договор о передаче в собственность / Смерть
   */
  @ApiProperty({description: 'Причина выбытия'})
  @Column()
  public reason: string;

  @ApiProperty({description: 'Номер документа о передачи в собственность'})
  @Column()
  public documentNumber: string;

  @ApiProperty({description: 'Дата документа о передачи в собственность'})
  @Column()
  public documentDate: string;

  /**
   * Наименование юрлица
   */
  @ApiProperty({description: 'Наименование юрлица'})
  @Column()
  public legalName: string;

  /**
   * Адрес юрлица /физлица
   */
  @ApiProperty({description: 'Адрес'})
  @Column()
  public address: string;

  /**
   * ФИО опекуна
   */
  @ApiProperty({description: 'ФИО опекуна'})
  @Column()
  public guardianName: string;

  /**
   * ФИО физлица
   */
  @ApiProperty({description: 'ФИО физлица'})
  @Column()
  public individualName: string;

  // Если умер
  @ApiProperty({description: 'Номер акта о смерти'})
  @Column()
  public deathAct: string;

  @ApiProperty({description: 'Дата акта о смерти'})
  @Column()
  public deathDate: string;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal;
}
