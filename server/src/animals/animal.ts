import { Column, CreateDateColumn, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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
import { Vaccination } from '../entities/vaccination.entity';
import { ParasiteTreatment } from '../entities/parasite-treatment.entity';
import { CaptureInfo } from '../entities/capture-info.entity';
import { Sterilization } from '../entities/sterilization.entity';

export class NewAnimal {
  @Column('text', {nullable: true})
  name: string;

  @ManyToOne(() => PetType, photo => photo.animal, {nullable: true})
  category?: PetType;

  @Column('text', {nullable: true})
  district: string;
  @Column('text', {nullable: true})
  street: string;

  @ManyToOne(() => CatBreed, photo => photo.animal, {nullable: true})
  breed?: CatBreed;
  @ManyToOne(() => PetGender, photo => photo.animal, {nullable: true})
  sex?: PetGender;
  @ManyToOne(() => CatColor, photo => photo.animal, {nullable: true})
  color?: CatColor;
  @Column('text', {nullable: true})
  birthDate: string;
  @ManyToOne(() => CatFur, photo => photo.animal, {nullable: true})
  wool?: CatFur;
  @ManyToOne(() => EarType, photo => photo.animal, {nullable: true})
  ears?: EarType;

  @Column('text', {nullable: true})
  aviary: string;

  @ManyToOne(() => TailType, photo => photo.animal, {nullable: true})
  tail?: TailType;
  @ManyToOne(() => PetSize, photo => photo.animal, {nullable: true})
  size?: PetSize;
  @Column('text', {nullable: true})
  weight: string;
  @Column('text', {nullable: true})
  specialSigns: string;
  @Column('text', {nullable: true})
  identificationLabel: string;
  @ManyToOne(() => Shelter, photo => photo.animal, {nullable: true})
  shelter?: Shelter;
  @Column('text', {nullable: true})
  doctorName: string;
  @Column('text', {nullable: true})
  dischargeDate: string;

  @ManyToOne(() => ReasonForEuthanasia, photo => photo.animal, {nullable: true})
  euthanasiaReason?: ReasonForEuthanasia;

  @ManyToOne(() => ReasonForLeaving, photo => photo.animal, {nullable: true})
  leavingReason?: ReasonForLeaving;

  @ManyToOne(() => DeathCause, photo => photo.animal, {nullable: true})
  causeDeath?: DeathCause;

  @Column('text', {nullable: true})
  imgSrc: string;

  @OneToMany(() => Vaccination, photo => photo.animal, {nullable: true})
  vaccination?: Vaccination;

  @Column( {nullable: true})
  parasiteTreatmentId: number;

  @OneToMany(() => ParasiteTreatment, photo => photo.animal, {nullable: true})
  parasiteTreatment?: ParasiteTreatment;

  @OneToOne(() => CaptureInfo, photo => photo.animal, {nullable: true})
  captureInfo?: CaptureInfo;

  @Column( {nullable: true})
  sterilizationId: number;

  @OneToOne(() => Sterilization, photo => photo.animal, {nullable: true})
  sterilization?: Sterilization;
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
