import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Animal } from '../animals/animal';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class DeathCause {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Причина смерти'})
  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.causeDeath, {cascade: true})
  animal: Animal[];
}
