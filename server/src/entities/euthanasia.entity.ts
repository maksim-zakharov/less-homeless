import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Euthanasia {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'ФИО ветврача'})
  @Column()
  public veterinarianName: string;

  @ApiProperty({description: 'Дата эвтаназии'})
  @Column()
  public date: string;

  @ApiProperty({description: 'Акт о эвтаназии'})
  @Column()
  public act: string;

  @ApiProperty({description: 'Причина эвтаназии'})
  @Column()
  public reason: string;

  @OneToOne(() => Animal, {cascade: true})
  animal: Animal[];
}
