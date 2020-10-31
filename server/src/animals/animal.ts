import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TailType } from '../entities/tail-type.entity';
import { PetType } from '../entities/pet-type.entity';
import { CatBreed } from '../entities/cat-breed.entity';
import { PetGender } from '../entities/pet-gender.entity';
import { CatColor } from '../entities/cat-color.entity';
import { CatFur } from '../entities/cat-fur.entity';
import { EarType } from '../entities/ear-type.entity';
import { PetSize } from '../entities/pet-size.entity';
import { Shelter } from '../entities/shelter.entity';
import { Entity } from 'typeorm';
import { ReasonForEuthanasia } from '../entities/reason-for-euthanasia.entity';
import { ReasonForLeaving } from '../entities/reason-for-leaving.entity';
import { DeathCause } from '../entities/death-cause.entity';

export class NewAnimal {
  @Column('text')
  name: string;

  @ManyToOne(() => PetType, photo => photo.animal)
  category: PetType;

  @Column('text')
  catchingAct: string;
  @Column('text')
  district: string;
  @Column('text')
  street: string;

  @ManyToOne(() => CatBreed, photo => photo.animal)
  breed: CatBreed;
  @ManyToOne(() => PetGender, photo => photo.animal)
  sex: PetGender;
  @ManyToOne(() => CatColor, photo => photo.animal)
  color: CatColor;
  @Column('text')
  birthDate: string;
  @ManyToOne(() => CatFur, photo => photo.animal)
  wool: CatFur;
  @ManyToOne(() => EarType, photo => photo.animal)
  ears: EarType;

  @ManyToOne(() => TailType, photo => photo.animal)
  tail: TailType;
  @ManyToOne(() => PetSize, photo => photo.animal)
  size: string;
  @Column('text')
  weight: string;
  @Column('text')
  specialSigns: string;
  @Column('text')
  identificationLabel: string;
  @ManyToOne(() => Shelter, photo => photo.animal)
  shelter: Shelter;
  @Column('text')
  shelterArrivalDate: string;
  @Column('text')
  sterilizationStationName: string;
  @Column('text')
  sterilizationStationAddress: string;
  @Column('text')
  sterilizationStationArrivalDate: string;
  @Column('text')
  sterilizationDate: string;
  @Column('text')
  doctorFullname: string;
  @Column('text')
  dischargeDate: string;
  @Column('text')
  headOfSterilizationFullname: string;

  @ManyToOne(() => ReasonForEuthanasia, photo => photo.animal)
  euthanasiaReason: ReasonForEuthanasia;

  @ManyToOne(() => ReasonForLeaving, photo => photo.animal)
  leavingReason: ReasonForLeaving;

  @ManyToOne(() => DeathCause, photo => photo.animal)
  causeDeath: DeathCause;

  @Column('text', {nullable: true})
  imgSrc: string;
}

export class UpdatedAnimal extends NewAnimal {
  @PrimaryGeneratedColumn()
  id: number;
}

@Entity()
export class Animal extends UpdatedAnimal {
  @CreateDateColumn()
  createDate: string;
}
