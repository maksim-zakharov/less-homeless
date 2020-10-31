import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { Observable } from 'rxjs';
import { pluck, share, shareReplay, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService, NzUploadChangeParam } from 'ng-zorro-antd';

@Component({
  selector: 'app-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.scss']
})
export class AnimalsDetailsComponent implements OnInit {

  animalId$ = this.route.params.pipe(
    pluck('id'),
    shareReplay(1)
  );

  animal$ = this.animalId$.pipe(
    switchMap(id => this.ordersService.getAnimalById(id)),
    shareReplay(1)
  );

  docs$ = this.animalId$.pipe(
    switchMap(id => this.ordersService.getAnimalDocsById(id)),
    shareReplay(1)
  );

  constructor(private msg: NzMessageService, private ordersService: AnimalsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  handleChange({file, fileList}: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      const newDoc = {
        url: `https://less-homeless.storage.yandexcloud.net/${file.response.Key}`,
        createDate: file.lastModifiedDate,
        name: file.name
      };

      const id = file.response.Key.replace('docs/', '').split('/')[0];

      this.ordersService.addDocsToCache(id, newDoc);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}
