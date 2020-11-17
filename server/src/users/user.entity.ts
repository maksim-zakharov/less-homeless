import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Shelter } from '../entities/shelter.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  public password: string;

  @ManyToOne(() => Shelter)
  shelter?: Shelter;

  @Column({nullable: true})
  public city: string;
}
