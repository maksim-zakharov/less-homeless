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
  @Column({nullable: true})
  name: string;

  @ManyToOne(() => PetType)

  category?: PetType;

  @Column({nullable: true})
  district: string;
  @Column({nullable: true})
  street: string;

  @ManyToOne(() => CatBreed)

  breed?: CatBreed;
  @ManyToOne(() => PetGender)

  sex?: PetGender;
  @ManyToOne(() => CatColor)

  color?: CatColor;
  @Column({nullable: true})
  birthDate: string;
  @ManyToOne(() => CatFur)

  wool?: CatFur;
  @ManyToOne(() => EarType)

  ears?: EarType;

  @Column({nullable: true})
  aviary: string;

  @ManyToOne(() => TailType)

  tail?: TailType;
  @ManyToOne(() => PetSize)

  size?: PetSize;
  @Column({nullable: true})
  weight: string;
  @Column({nullable: true})
  specialSigns: string;
  @Column({nullable: true, unique: true})
  identificationLabel: string;
  @ManyToOne(() => Shelter)

  shelter?: Shelter;
  @Column({nullable: true})
  doctorName: string;
  @Column({nullable: true})
  dischargeDate: string;

  @ManyToOne(() => ReasonForEuthanasia)

  euthanasiaReason?: ReasonForEuthanasia;

  @ManyToOne(() => ReasonForLeaving)

  leavingReason?: ReasonForLeaving;

  @ManyToOne(() => DeathCause)

  causeDeath?: DeathCause;

  @Column({nullable: true})
  imgSrc: string;

  @OneToMany(() => Vaccination, v => v.animal)
  vaccination: Vaccination[];

  @OneToOne(() => ParasiteTreatment, {nullable: true, cascade: true})
  @JoinColumn({name: 'parasiteTreatmentId'})
  parasiteTreatment?: ParasiteTreatment;

  @OneToOne(() => CaptureInfo, {nullable: true, cascade: true})
  @JoinColumn({name: 'captureInfoId'})
  captureInfo?: CaptureInfo;

  @OneToOne(() => Sterilization, {nullable: true, cascade: true})
  @JoinColumn({name: 'sterilizationId'})
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
