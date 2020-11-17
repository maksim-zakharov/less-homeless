import { Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OperOrg } from './oper-org.entity';
import { Animal } from '../animals/animal';
import { Entity } from 'typeorm';
import { ArrivalInfo } from './arrival-info.entity';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';

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

  @Column({nullable: true, type: 'float'})
  public longitude: number;

  @Column({nullable: true, type: 'float'})
  public latitude: number;

  @Column({nullable: true})
  public city: string;

  @ApiProperty({description: 'Телефон приюта'})
  @Column()
  public phone: string;

  @ApiProperty({description: 'Управляющий орган'})
  @ManyToOne(() => OperOrg, user => user.shelters)
  public subjection: OperOrg;

  // @OneToMany(() => ArrivalInfo, v => v.shelter, {cascade: true})
  // public arrivalInfo: ArrivalInfo[];

  @OneToMany(() => Animal, v => v.shelter)
  public animals: Animal[];

  @OneToMany(() => User, v => v.shelter, {cascade: true})
  public employees: User[];
}
