import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ReasonForLeaving {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Причина выбытия'})
  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.leavingReason, {cascade: true})
  animal: Animal[];
}
