import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animal';
import { YandexS3Service } from '../core/yandex-s3/yandex-s3.service';
import { CatBreed } from '../entities/cat-breed.entity';
import { CatColor } from '../entities/cat-color.entity';
import { CatFur } from '../entities/cat-fur.entity';
import { DeathCause } from '../entities/death-cause.entity';
import { DogBreed } from '../entities/dog-breed.entity';
import { DogColor } from '../entities/dog-color.entity';
import { DogFur } from '../entities/dog-fur.entity';
import { EarType } from '../entities/ear-type.entity';
import { OperOrg } from '../entities/oper-org.entity';
import { PetGender } from '../entities/pet-gender.entity';
import { PetSize } from '../entities/pet-size.entity';
import { PetType } from '../entities/pet-type.entity';
import { ReasonForLeaving } from '../entities/reason-for-leaving.entity';
import { Shelter } from '../entities/shelter.entity';
import { TailType } from '../entities/tail-type.entity';
import { Vaccination } from '../entities/vaccination.entity';
import { ParasiteTreatment } from '../entities/parasite-treatment.entity';
import { CaptureInfo } from '../entities/capture-info.entity';
import { Sterilization } from '../entities/sterilization.entity';
import { Euthanasia } from '../entities/euthanasia.entity';
import { ArrivalInfo } from '../entities/arrival-info.entity';
import { DisposalInfo } from '../entities/disposal-info.entity';
import { District } from '../entities/district.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Animal, CaptureInfo, Sterilization, CatBreed, CatColor, CatFur, DeathCause, DogBreed, DogColor,
    ArrivalInfo, DisposalInfo, District, DogFur, EarType, OperOrg, PetGender, PetSize, PetType,
    ReasonForLeaving, Euthanasia, Shelter, TailType, Vaccination, ParasiteTreatment
  ])],
  controllers: [AnimalsController],
  providers: [AnimalsService, YandexS3Service]
})
export class AnimalsModule {
}
