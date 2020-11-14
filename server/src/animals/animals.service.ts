import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Animal, NewAnimal, UpdatedAnimal } from './animal';
import { Shelter } from '../entities/shelter.entity';

@Injectable()
export class AnimalsService {

  constructor(private connection: Connection,
              @InjectRepository(Animal)
              private readonly animalsRepository: Repository<Animal>) {
  }

  getAll(options?: { shelterId: number | string }): Promise<Animal[]> {
    // if (options?.shelterId) {
    //   return this.connection.getRepository(Shelter).findOne({id: options?.shelterId}).then(shelter => shelter.);
    // }
    return this.animalsRepository.find({where: {shelter: {id: options?.shelterId}}, relations: ['shelter']});
  }

  getById(id: number): Promise<Animal> {
    return this.animalsRepository.findOne({id}, {
      relations: ['sterilization', 'captureInfo', 'vaccination', 'size', 'euthanasia', 'leavingReason', 'parasiteTreatment', 'tail', 'ears', 'causeDeath', 'wool', 'color', 'sex', 'breed', 'category']
    });
  }

  create(newAnimal: NewAnimal): Promise<Animal> {
    const animal = this.animalsRepository.create(newAnimal);
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
