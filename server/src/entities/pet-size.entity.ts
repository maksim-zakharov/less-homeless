import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../animals/animal';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class PetSize {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Размер'})
  @Column()
  public name: string;

  @OneToMany(() => Animal, v => v.size, {cascade: true})
  animal: Animal[];
}
