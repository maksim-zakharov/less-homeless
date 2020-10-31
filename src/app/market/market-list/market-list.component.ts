import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AnimalsService } from '../../admin/animals/animals.service';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent implements OnInit {

  animals$ = this.animalsService.getAviariesAnimals().pipe(
    map(animals => animals.filter(a => !!a.imgSrc).concat(...animals).concat(...animals).concat(...animals).concat(...animals).concat(...animals))
  );

  constructor(private animalsService: AnimalsService) {
  }

  ngOnInit(): void {
  }

}
