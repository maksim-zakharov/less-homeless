import { Injectable } from '@nestjs/common';
import * as EasyYandexS3 from 'easy-yandex-s3';

@Injectable()
export class YandexS3Service {

  private s3;

  constructor() {
// Инициализация
    this.s3 = new EasyYandexS3({
      auth: {
        accessKeyId: process.env.YANDEX_S3_ACCESSKEY || '5ZGRpDzTNn5bVkscQveb',
        secretAccessKey: process.env.YANDEX_S3_SECRETKEY || 'wQWzkfUTSlcS6RFGgpEWhLuSoEnJOwXU-RdC-2cj',
      },
      Bucket: process.env.YANDEX_S3_BUCKET || 'less-homeless',
      debug: process.env.YANDEX_S3_DEBUG || true
    });
  }

  upload(buffer: File, name: string, path: string): Promise<boolean> | Promise<any> {
    return this.s3.Upload({
      buffer,
      name
    }, path);
  }

  // upload(buffer: Blob, path: string, name: string): Promise<boolean> | Promise<any> {
  //   return this.s3.upload({
  //     buffer,
  //     name
  //   }, path);
  // }

  get<T>(path: string): Promise<T> {
    return this.s3.GetList(path);
  }

  remove(path: string, name: string): Promise<boolean> | Promise<any> {
    return this.s3.Remove(`${path}${name}`);
  }
}
