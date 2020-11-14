import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Connection, EntitySchema } from 'typeorm';
import { ObjectType } from 'typeorm/common/ObjectType';

@Injectable()
export class CrudService {

  constructor(private connection: Connection) {
  }

  get<T>(type: EntitySchema<T> | ObjectType<T>): Promise<T[]> {
    return this.connection.getRepository(type).find();
  }

  getById<T>(type: EntitySchema<T> | ObjectType<T>, id: number | string): Promise<T> {
    return this.connection.getRepository(type).findOne({where: {id}});
  }

  create<T>(type: EntitySchema<T> | ObjectType<T>, newObject: T): Promise<T> {
    const obj = this.connection.getRepository(type).create(newObject);
    return this.connection.getRepository(type).save(obj);
  }

  async update<T>(type: EntitySchema<T> | ObjectType<T>, id: number | string, updatedObject: EntitySchema<T> | any): Promise<T[]> {
    const obj = await this.getById(type, id);
    if (!obj) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        // error: 'Животное не найдено'
      }, HttpStatus.BAD_REQUEST);
    }

    return this.connection.getRepository(type).save({id, ...updatedObject});
  }

  async delete<T>(type: EntitySchema<T> | ObjectType<T>, id: number | string): Promise<any> {
    const obj = await this.getById(type, id);
    if (!obj) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        // error: 'Животное не найдено'
      }, HttpStatus.BAD_REQUEST);
    }

    return this.connection.getRepository(type).delete(id);
  }
}
