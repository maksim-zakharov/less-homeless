import { Component, OnInit } from '@angular/core';
import { TransferItem } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  list: TransferItem[] = [
    {
      key: 1,
      title: `content1`,
      description: `description of content1`,
      direction: Math.random() * 2 > 1 ? 'right' : undefined
    },
    {
      key: 1,
      title: `content1`,
      description: `description of content1`,
      direction: Math.random() * 2 > 1 ? 'right' : undefined
    },
    {
      key: 1,
      title: `content1`,
      description: `description of content1`,
      direction: Math.random() * 2 > 1 ? 'right' : undefined
    },
    {
      key: 1,
      title: `content1`,
      description: `description of content1`,
      direction: Math.random() * 2 > 1 ? 'right' : undefined
    },
    {
      key: 1,
      title: `content1`,
      description: `description of content1`,
      direction: Math.random() * 2 > 1 ? 'right' : undefined
    }
  ];
  disabled = false;

  constructor() {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:no-any
  filterOption(inputValue: string, item: any): boolean {
    return item.description.indexOf(inputValue) > -1;
  }

  search(ret: {}): void {
    console.log('nzSearchChange', ret);
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }

}
