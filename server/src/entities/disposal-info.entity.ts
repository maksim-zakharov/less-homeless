import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';

@Entity()
export class DisposalInfo {
  @PrimaryGeneratedColumn()
  public id: number;

  /**
   * Договор о передаче в собственность / Смерть
   */
  @Column()
  public reason: string;

  @Column()
  public documentNumber: string;

  @Column()
  public documentDate: string;

  /**
   * Наименование юрлица
   */
  @Column()
  public legalName: string;

  /**
   * Адрес юрлица /физлица
   */
  @Column()
  public address: string;

  /**
   * ФИО опекуна
   */
  @Column()
  public guardianName: string;

  /**
   * ФИО физлица
   */
  @Column()
  public individualName: string;

  // Если умер
  @Column()
  public deathAct: string;

  @Column()
  public deathDate: string;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal;
}
