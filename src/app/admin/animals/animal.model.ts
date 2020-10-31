import { PetType } from './models/pet-type.entity';
import { CatBreed } from './models/cat-breed.entity';
import { PetGender } from './models/pet-gender.entity';
import { CatColor } from './models/cat-color.entity';
import { CatFur } from './models/cat-fur.entity';
import { EarType } from './models/ear-type.entity';
import { TailType } from './models/tail-type.entity';
import { PetSize } from './models/pet-size.entity';
import { Shelter } from './models/shelter.entity';
import { ReasonForEuthanasia } from './models/reason-for-euthanasia.entity';
import { ReasonForLeaving } from './models/reason-for-leaving.entity';
import { DeathCause } from './models/death-cause.entity';
import { Vaccination } from './models/vaccination.entity';
import { ParasiteTreatment } from './models/parasite-treatment.entity';
import { CaptureInfo } from './models/capture-info.entity';
import { Sterilization } from './models/sterilization.entity';

export class AnimalModel {

  id: number;
  createDate: string;
  name: string;

  category: PetType;


  district: string;

  street: string;

  breed: CatBreed;
  sex: PetGender;
  color: CatColor;

  birthDate: string;
  wool: CatFur;
  ears: EarType;


  aviary: string;

  tail: TailType;
  size: PetSize;

  weight: string;

  specialSigns: string;

  identificationLabel: string;
  shelter: Shelter;

  doctorName: string;

  dischargeDate: string;

  euthanasiaReason: ReasonForEuthanasia;

  leavingReason: ReasonForLeaving;

  causeDeath: DeathCause;

  imgSrc: string;

  vaccination: Vaccination;

  parasiteTreatment: ParasiteTreatment;

  captureInfo: CaptureInfo;

  sterilization: Sterilization;
}
