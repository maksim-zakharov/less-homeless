import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animal, NewAnimal, UpdatedAnimal } from './animal';
import { YandexS3Service } from '../core/yandex-s3/yandex-s3.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CatBreed } from '../entities/cat-breed.entity';
import { PetGender } from '../entities/pet-gender.entity';
import { Connection } from 'typeorm';
import { CatColor } from '../entities/cat-color.entity';
import { CatFur } from '../entities/cat-fur.entity';
import { DogBreed } from '../entities/dog-breed.entity';
import { DogColor } from '../entities/dog-color.entity';
import { DogFur } from '../entities/dog-fur.entity';
import { EarType } from '../entities/ear-type.entity';
import { PetSize } from '../entities/pet-size.entity';
import { PetType } from '../entities/pet-type.entity';
import { TailType } from '../entities/tail-type.entity';
import { Shelter } from '../entities/shelter.entity';
import { DeathCause } from '../entities/death-cause.entity';
import { ReasonForLeaving } from '../entities/reason-for-leaving.entity';
import { Euthanasia } from '../entities/euthanasia.entity';
import { District } from '../entities/district.entity';
import { ApiExcludeEndpoint, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('animals')
@Controller('animals')
export class AnimalsController {

  constructor(private connection: Connection, private s3: YandexS3Service, private animalsService: AnimalsService) {
  }

  @ApiResponse({
    status: 200,
    type: Animal
  })
  @ApiResponse({
    status: 200
  })
  @ApiOperation({description: 'Возвращает массив животных'})
  @Get()
  getAll(): Promise<Animal[]> {
    return this.animalsService.getAll();
  }

  @ApiResponse({
    status: 200,
    type: ReasonForLeaving
  })
  @ApiOperation({description: 'Возвращает массив причин выбытия',})
  @Get('leaving-reason')
  getLeavingReason(): Promise<ReasonForLeaving[]> {
    return this.connection.getRepository(ReasonForLeaving).find();
  }

  @ApiResponse({
    status: 200,
    type: Euthanasia
  })
  @ApiOperation({
    description: 'Возвращает массив причин эвтаназии',
  })
  @Get('euthanasia-reason')
  getEuthanasiaReasons(): Promise<Euthanasia[]> {
    return this.connection.getRepository(Euthanasia).find();
  }

  @ApiResponse({
    status: 200,
    type: DeathCause
  })
  @ApiOperation({
    description: 'Возвращает массив причин смерти',
  })
  @Get('cause-death')
  getCauseDeath(): Promise<DeathCause[]> {
    return this.connection.getRepository(DeathCause).find();
  }

  @ApiResponse({
    status: 200,
    type: Shelter
  })
  @ApiOperation({
    description: 'Возвращает массив приютов',
  })
  @Get('shelters')
  getShelters(): Promise<Shelter[]> {
    return this.connection.getRepository(Shelter).find();
  }

  @ApiResponse({
    status: 200,
    type: TailType
  })
  @ApiOperation({
    description: 'Возвращает массив типов хвостов',
  })
  @Get('tail-types')
  getTailTypes(): Promise<TailType[]> {
    return this.connection.getRepository(TailType).find();
  }

  @ApiResponse({
    status: 200,
    type: PetType
  })
  @ApiOperation({
    description: 'Возвращает массив видов животных',
  })
  @Get('pet-types')
  getPetTypes(): Promise<PetType[]> {
    return this.connection.getRepository(PetType).find();
  }

  @ApiResponse({
    status: 200,
    type: PetSize
  })
  @ApiOperation({
    description: 'Возвращает массив размеров животных',
  })
  @Get('pet-sizes')
  getPetSizes(): Promise<PetSize[]> {
    return this.connection.getRepository(PetSize).find();
  }

  @ApiResponse({
    status: 200,
    type: EarType
  })
  @ApiOperation({
    description: 'Возвращает массив типов ушей',
  })
  @Get('ear-types')
  getEarTypes(): Promise<EarType[]> {
    return this.connection.getRepository(EarType).find();
  }

  @Get('dog-furs')
  getDogFurs(): Promise<DogFur[]> {
    return this.connection.getRepository(DogFur).find();
  }

  @ApiResponse({
    status: 200,
    type: CatFur
  })
  @ApiOperation({
    description: 'Возвращает массив типов шерсти',
  })
  @Get('cat-furs')
  getCatFurs(): Promise<CatFur[]> {
    return this.connection.getRepository(CatFur).find();
  }

  @Get('dog-colors')
  getDogColors(): Promise<DogColor[]> {
    return this.connection.getRepository(DogColor).find();
  }

  @ApiResponse({
    status: 200,
    type: CatColor
  })
  @ApiOperation({
    description: 'Возвращает массив типов окраса',
  })
  @Get('cat-colors')
  getCatColors(): Promise<CatColor[]> {
    return this.connection.getRepository(CatColor).find();
  }

  @ApiResponse({
    status: 200,
    type: PetGender
  })
  @ApiOperation({
    description: 'Возвращает массив полов',
  })
  @Get('pet-genders')
  getPetGenders(): Promise<PetGender[]> {
    return this.connection.getRepository(PetGender).find();
  }

  @ApiResponse({
    status: 200,
    type: District
  })
  @ApiOperation({
    description: 'Возвращает массив административных округов',
  })
  @Get('districts')
  getDistricts(): Promise<District[]> {
    return this.connection.getRepository(District).find();
  }

  @Get('dog-breeds')
  getDogBreeds(): Promise<DogBreed[]> {
    return this.connection.getRepository(DogBreed).find();
  }

  @ApiResponse({
    status: 200,
    type: CatBreed
  })
  @ApiOperation({
    description: 'Возвращает массив пород',
  })
  @Get('cat-breeds')
  getCatBreeds(): Promise<CatBreed[]> {
    return this.connection.getRepository(CatBreed).find();
  }

  @ApiResponse({
    status: 200,
    type: Animal
  })
  @ApiOperation({
    description: 'Возвращает животное с выбранным идентификатором',
  })
  @Get(':id')
  async getById(@Param('id') id: number): Promise<Animal> {
    const animal = await this.animalsService.getById(id);
    if (!animal) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Животное не найдено'
      }, HttpStatus.BAD_REQUEST);
    }
    return animal;
  }

  @ApiExcludeEndpoint()
  @Post()
  create(@Body() newAnimal: NewAnimal): Promise<Animal> {
    return this.animalsService.create(newAnimal);
  }

  @ApiExcludeEndpoint()
  @Post(':id/photo')
  @UseInterceptors(FileInterceptor('photo'))
  async savePhoto(@UploadedFile() photo, @Param('id') id: number): Promise<any> {
    const result = await this.s3.upload(photo.buffer, `${photo.originalname}`, `/animals/${id}/`);

    const animal = await this.animalsService.getById(id);
    animal.imgSrc = result.Location;

    return this.animalsService.update(id, animal);
  }

  @ApiExcludeEndpoint()
  @Get(':id/docs')
  getDocs(@Param('id') id: number): Promise<{ name: string, url: string, createDate: string }[]> {
    return this.s3.get<{ Prefix: string, Contents: any[] }>(`/docs/${id}/`).then(docs =>
      Array.from<{ Key: string, LastModified: string }>(docs.Contents || []).map(d => ({
        name: d.Key.replace(docs.Prefix, ''),
        createDate: d.LastModified,
        url: `https://less-homeless.storage.yandexcloud.net/${d.Key}`
      }))
    );
  }

  @ApiExcludeEndpoint()
  @Post(':id/docs')
  @UseInterceptors(FileInterceptor('docs'))
  saveDocs(@UploadedFile() docs, @Param('id') id: number): Promise<any> {
    return this.s3.upload(docs.buffer, `${docs.originalname}`, `/docs/${id}/`);
  }

  @ApiExcludeEndpoint()
  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedAnimal: UpdatedAnimal): Promise<Animal> {
    const animal = await this.animalsService.getById(id);
    if (!animal) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Животное не найдено'
      }, HttpStatus.BAD_REQUEST);
    }
    await this.animalsService.update(id, updatedAnimal);

    return animal;
  }

  @ApiExcludeEndpoint()
  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    const order = this.animalsService.getById(id);
    if (!order) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Животное не найдено'
      }, HttpStatus.BAD_REQUEST);
    }

    return this.animalsService.delete(id);
  }
}
