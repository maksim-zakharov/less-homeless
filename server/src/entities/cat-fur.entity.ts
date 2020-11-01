import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CatFur {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Шерсть'})
  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.wool, {cascade: true})
  animal: Animal[];
}
