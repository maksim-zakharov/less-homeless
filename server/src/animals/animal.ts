import { Column, CreateDateColumn, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TailType } from '../entities/tail-type.entity';
import { PetType } from '../entities/pet-type.entity';
import { CatBreed } from '../entities/cat-breed.entity';
import { PetGender } from '../entities/pet-gender.entity';
import { CatColor } from '../entities/cat-color.entity';
import { CatFur } from '../entities/cat-fur.entity';
import { EarType } from '../entities/ear-type.entity';
import { PetSize } from '../entities/pet-size.entity';
import { Entity } from 'typeorm';
import { ReasonForLeaving } from '../entities/reason-for-leaving.entity';
import { DeathCause } from '../entities/death-cause.entity';
import { Vaccination } from '../entities/vaccination.entity';
import { ParasiteTreatment } from '../entities/parasite-treatment.entity';
import { CaptureInfo } from '../entities/capture-info.entity';
import { Sterilization } from '../entities/sterilization.entity';
import { Euthanasia } from '../entities/euthanasia.entity';
import { DisposalInfo } from '../entities/disposal-info.entity';
import { ArrivalInfo } from '../entities/arrival-info.entity';

export class NewAnimal {
  @Column({nullable: true})
  name: string;

  @ManyToOne(() => PetType)

  category?: PetType;

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

  @Column({nullable: true})
  doctorName: string;
  @Column({nullable: true})
  dischargeDate: string;

  /**
   * Здоров, Социализирован, Готок к пристройству, Пристроен
   */
  @Column({nullable: true})
  status: string;

  /**
   * Здоров, На лечении, Имеет хронические заболевания, Умер
   */
  @Column({nullable: true})
  healthStatus: string;

  /**
   * Приучен к лотку
   */
  @Column({nullable: true})
  trayAccustomed: boolean;

  /**
   * Приучен к лотку
   */
  @Column({nullable: true})
  walkingAccustomed: boolean;

  /**
   * Отношение к другим животным
   */
  @Column({nullable: true})
  attitudeTowardsAnimals: string;

  @OneToOne(() => Euthanasia, {nullable: true, cascade: true})
  @JoinColumn({name: 'euthanasiaId'})
  euthanasia?: Euthanasia;

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

  @OneToOne(() => ArrivalInfo, {nullable: true, cascade: true})
  @JoinColumn({name: 'arrivalInfoId'})
  arrivalInfo?: ArrivalInfo;

  @OneToOne(() => CaptureInfo, {nullable: true, cascade: true})
  @JoinColumn({name: 'captureInfoId'})
  captureInfo?: CaptureInfo;

  @OneToOne(() => DisposalInfo, {nullable: true, cascade: true})
  @JoinColumn({name: 'disposalInfoId'})
  disposalInfo?: DisposalInfo;

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
