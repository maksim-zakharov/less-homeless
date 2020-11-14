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
import { ApiProperty } from '@nestjs/swagger';
import { Shelter } from '../entities/shelter.entity';

export class NewAnimal {

  @ApiProperty({description: 'Кличка животного'})
  @Column({nullable: true})
  name: string;

  @ApiProperty({description: 'Вид животного'})
  @ManyToOne(() => PetType)

  category?: PetType;

  @ApiProperty({description: 'Порода'})
  @ManyToOne(() => CatBreed)

  breed?: CatBreed;
  @ApiProperty({description: 'Пол'})
  @ManyToOne(() => PetGender)

  sex?: PetGender;
  @ApiProperty({description: 'Окрас'})
  @ManyToOne(() => CatColor)

  color?: CatColor;
  @Column({nullable: true})
  birthDate: string;
  @ApiProperty({description: 'Шерсть'})
  @ManyToOne(() => CatFur)

  wool?: CatFur;
  @ApiProperty({description: 'Тип ушей'})
  @ManyToOne(() => EarType)

  ears?: EarType;

  @Column({nullable: true})
  aviary: string;

  @ApiProperty({description: 'Тип хвоста'})
  @ManyToOne(() => TailType)

  tail?: TailType;
  @ApiProperty({description: 'Размер'})
  @ManyToOne(() => PetSize)

  size?: PetSize;
  @ApiProperty({description: 'Вес'})
  @Column({nullable: true})
  weight: string;
  @ApiProperty({description: 'Особые приметы'})
  @Column({nullable: true})
  specialSigns: string;
  @ApiProperty({description: 'Идентификационная метка'})
  @Column({nullable: true, unique: true})
  identificationLabel: string;

  @ApiProperty({description: 'ФИО доктора'})
  @Column({nullable: true})
  doctorName: string;
  @ApiProperty({description: 'Дата выбытия'})
  @Column({nullable: true})
  dischargeDate: string;

  /**
   * Здоров, Социализирован, Готок к пристройству, Пристроен
   */
  @ApiProperty({description: 'Статус животного'})
  @Column({nullable: true})
  status: string;

  /**
   * Здоров, На лечении, Имеет хронические заболевания, Умер
   */
  @ApiProperty({description: 'Статус здоровья'})
  @Column({nullable: true})
  healthStatus: string;

  /**
   * Приучен к лотку
   */
  @ApiProperty({description: 'Приучен к лотку'})
  @Column({nullable: true})
  trayAccustomed: boolean;

  /**
   * Приучен к прогулкам
   */
  @ApiProperty({description: 'Приучен к прогулкам'})
  @Column({nullable: true})
  walkingAccustomed: boolean;

  /**
   * Отношение к другим животным
   */
  @ApiProperty({description: 'Отношение к другим животным'})
  @Column({nullable: true})
  attitudeTowardsAnimals: string;

  @ApiProperty({description: 'Эвтаназия'})
  @OneToOne(() => Euthanasia, {nullable: true, cascade: true})
  @JoinColumn({name: 'euthanasiaId'})
  euthanasia?: Euthanasia;

  @ApiProperty({description: 'Причина выбытия'})
  @ManyToOne(() => ReasonForLeaving)
  leavingReason?: ReasonForLeaving;

  @ApiProperty({description: 'Причина смерти'})
  @ManyToOne(() => DeathCause)
  causeDeath?: DeathCause;

  @ApiProperty({description: 'Ссылка на фотографию'})
  @Column({nullable: true})
  imgSrc: string;

  @ApiProperty({description: 'Вакцинация'})
  @OneToMany(() => Vaccination, v => v.animal)
  vaccination: Vaccination[];

  @ApiProperty({description: 'Защита от паразитов'})
  @OneToOne(() => ParasiteTreatment, {nullable: true, cascade: true})
  @JoinColumn({name: 'parasiteTreatmentId'})
  parasiteTreatment?: ParasiteTreatment;

  // @ApiProperty({description: 'Информация о прибытии'})
  // @OneToOne(() => ArrivalInfo, {nullable: true, cascade: true})
  // @JoinColumn({name: 'arrivalInfoId'})
  // arrivalInfo?: ArrivalInfo;

  @ApiProperty({description: 'Приют'})
  @ManyToOne(() => Shelter, shelter => shelter.animals)
  shelter: Shelter;

  @ApiProperty({description: 'Инфморация об отлове'})
  @OneToOne(() => CaptureInfo, {nullable: true, cascade: true})
  @JoinColumn({name: 'captureInfoId'})
  captureInfo?: CaptureInfo;

  @ApiProperty({description: 'Информация о выбытии'})
  @OneToOne(() => DisposalInfo, {nullable: true, cascade: true})
  @JoinColumn({name: 'disposalInfoId'})
  disposalInfo?: DisposalInfo;

  @ApiProperty({description: 'Стерилизация'})
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
  @ApiProperty({description: 'Дата создания записи'})
  @CreateDateColumn()
  createDate: string;
}
