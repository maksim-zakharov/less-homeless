import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, EntitySchema, Repository } from 'typeorm';
import { Animal, NewAnimal, UpdatedAnimal } from './animal';
import { Shelter } from '../entities/shelter.entity';
import { ReasonForEuthanasia } from '../entities/reason-for-euthanasia.entity';
import { PetSize } from '../entities/pet-size.entity';
import { PetType } from '../entities/pet-type.entity';
import { EarType } from '../entities/ear-type.entity';
import { PetGender } from '../entities/pet-gender.entity';
import { CatFur } from '../entities/cat-fur.entity';
import { CatColor } from '../entities/cat-color.entity';
import { CatBreed } from '../entities/cat-breed.entity';
import { TailType } from '../entities/tail-type.entity';
import { CaptureInfo } from '../entities/capture-info.entity';
import { DeathCause } from '../entities/death-cause.entity';
import { Sterilization } from '../entities/sterilization.entity';
import { Vaccination } from '../entities/vaccination.entity';
import { ParasiteTreatment } from '../entities/parasite-treatment.entity';

@Injectable()
export class AnimalsService {

  constructor(private connection: Connection,
              @InjectRepository(Animal)
              private readonly animalsRepository: Repository<Animal>) {
  }

  getAll(): Promise<Animal[]> {
    return this.animalsRepository.find();
  }

  getById(id: number): Promise<Animal> {
    return this.animalsRepository.findOne(id, {
      relations: ['sterilization', 'size', 'parasiteTreatment', 'tail', 'ears', 'wool', 'color', 'sex', 'breed', 'category']
    });
  }

  async create(newAnimal: NewAnimal): Promise<Animal> {
    const animal = this.animalsRepository.create(newAnimal);

    if (newAnimal.shelter) {
      newAnimal.shelter = this.connection.getRepository(Shelter).create(newAnimal.shelter);
      await this.connection.getRepository(Shelter).save(newAnimal.shelter);
    }

    if (newAnimal.euthanasiaReason) {
      newAnimal.euthanasiaReason = this.connection.getRepository(ReasonForEuthanasia).create(newAnimal.euthanasiaReason);
      await this.connection.getRepository(ReasonForEuthanasia).save(newAnimal.euthanasiaReason);
    }

    if (newAnimal.size) {
      newAnimal.size = this.connection.getRepository(PetSize).create(newAnimal.size);
      await this.connection.getRepository(PetSize).save(newAnimal.size);
    }

    if (newAnimal.category) {
      newAnimal.category = this.connection.getRepository(PetType).create(newAnimal.category);
      await this.connection.getRepository(PetType).save(newAnimal.category);
    }

    if (newAnimal.ears) {
      newAnimal.ears = this.connection.getRepository(EarType).create(newAnimal.ears);
      await this.connection.getRepository(EarType).save(newAnimal.ears);
    }

    if (newAnimal.sex) {
      newAnimal.sex = this.connection.getRepository(PetGender).create(newAnimal.sex);
      await this.connection.getRepository(PetGender).save(newAnimal.sex);
    }

    if (newAnimal.wool) {
      newAnimal.wool = this.connection.getRepository(CatFur).create(newAnimal.wool);
      await this.connection.getRepository(CatFur).save(newAnimal.wool);
    }

    if (newAnimal.color) {
      newAnimal.color = this.connection.getRepository(CatColor).create(newAnimal.color);
      await this.connection.getRepository(CatColor).save(newAnimal.color);
    }

    if (newAnimal.breed) {
      newAnimal.breed = this.connection.getRepository(CatBreed).create(newAnimal.breed);
      await this.connection.getRepository(CatBreed).save(newAnimal.breed);
    }

    if (newAnimal.tail) {
      newAnimal.tail = this.connection.getRepository(TailType).create(newAnimal.tail);
      await this.connection.getRepository(TailType).save(newAnimal.tail);
    }

    if (newAnimal.captureInfo) {
      newAnimal.captureInfo = this.connection.getRepository(CaptureInfo).create(newAnimal.captureInfo);
      await this.connection.getRepository(CaptureInfo).save(newAnimal.captureInfo);
    }

    if (newAnimal.causeDeath) {
      newAnimal.causeDeath = this.connection.getRepository(DeathCause).create(newAnimal.causeDeath);
      await this.connection.getRepository(DeathCause).save(newAnimal.causeDeath);
    }

    if (newAnimal.sterilization) {
      newAnimal.sterilization = this.connection.getRepository(Sterilization).create(newAnimal.sterilization);
      await this.connection.getRepository(Sterilization).save(newAnimal.sterilization);
    }

    if (newAnimal.parasiteTreatment) {
      newAnimal.parasiteTreatment = this.connection.getRepository(ParasiteTreatment).create(newAnimal.parasiteTreatment);
      await this.connection.getRepository(ParasiteTreatment).save(newAnimal.parasiteTreatment);
    }

    if (newAnimal.vaccination) {
      newAnimal.vaccination = this.connection.getRepository(Vaccination).create(newAnimal.vaccination);
      await this.connection.getRepository(Vaccination).save(newAnimal.vaccination);
    }

    return this.animalsRepository.save(animal);
  }

  async update(id: number, updatedAnimal: UpdatedAnimal): Promise<Animal> {
    const animal = await this.animalsRepository.findOne({where: {id}});
    if (!animal) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Животное не найдено'
      }, HttpStatus.BAD_REQUEST);
    }

    return this.animalsRepository.save({id, ...updatedAnimal});
  }

  async delete(id: number): Promise<any> {
    const animal = await this.animalsRepository.findOne({where: {id}});
    if (!animal) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Животное не найдено'
      }, HttpStatus.BAD_REQUEST);
    }

    return this.animalsRepository.delete(id);
  }
}
