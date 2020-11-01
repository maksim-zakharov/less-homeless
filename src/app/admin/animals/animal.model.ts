import { PetType } from './models/pet-type.entity';
import { CatBreed } from './models/cat-breed.entity';
import { PetGender } from './models/pet-gender.entity';
import { CatColor } from './models/cat-color.entity';
import { CatFur } from './models/cat-fur.entity';
import { EarType } from './models/ear-type.entity';
import { TailType } from './models/tail-type.entity';
import { PetSize } from './models/pet-size.entity';
import { ReasonForLeaving } from './models/reason-for-leaving.entity';
import { DeathCause } from './models/death-cause.entity';
import { Vaccination } from './models/vaccination.entity';
import { ParasiteTreatment } from './models/parasite-treatment.entity';
import { CaptureInfo } from './models/capture-info.entity';
import { Sterilization } from './models/sterilization.entity';
import { Euthanasia } from './models/euthanasia.entity';
import { DisposalInfo } from './models/disposal-info.entity';
import { ArrivalInfo } from './models/arrival-info.entity';

export class AnimalModel {

  id: number;
  createDate: string;
  name: string;

  category: PetType;

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

  doctorName: string;

  dischargeDate: string;

  euthanasia?: Euthanasia;

  leavingReason: ReasonForLeaving;

  causeDeath: DeathCause;

  imgSrc: string;

  status: string;
  healthStatus: string;
  trayAccustomed: boolean;
  walkingAccustomed: boolean;
  attitudeTowardsAnimals: string;

  vaccination: Vaccination;

  parasiteTreatment: ParasiteTreatment;

  captureInfo: CaptureInfo;

  arrivalInfo?: ArrivalInfo;

  disposalInfo: DisposalInfo;

  sterilization: Sterilization;
}
