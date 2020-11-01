import { Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OperOrg } from './oper-org.entity';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { ArrivalInfo } from './arrival-info.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Shelter {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({description: 'Название приюта'})
  @Column()
  name: string;
  @ApiProperty({description: 'Адрес приюта'})
  @Column()
  public address: string;
  @ApiProperty({description: 'Телефон приюта'})
  @Column()
  public phone: string;

  @ApiProperty({description: 'Управляющий орган'})
  @ManyToOne(() => OperOrg, user => user.shelters)
  public subjection: OperOrg;

  @OneToMany(() => ArrivalInfo, v => v.shelter, {cascade: true})
  arrivalInfo: ArrivalInfo[];
}
