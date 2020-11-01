import { Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OperOrg } from './oper-org.entity';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { ArrivalInfo } from './arrival-info.entity';

@Entity()
export class Shelter {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name: string;
  @Column()
  public address: string;
  @Column()
  public phone: string;

  @ManyToOne(() => OperOrg, user => user.shelters)

  public subjection: OperOrg;

  @OneToMany(() => ArrivalInfo, v => v.shelter, {cascade: true})
  arrivalInfo: ArrivalInfo[];
}
