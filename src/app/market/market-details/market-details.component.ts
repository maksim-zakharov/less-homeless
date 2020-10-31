import { Component, OnInit } from '@angular/core';
import { pluck, shareReplay, switchMap } from 'rxjs/operators';
import { AnimalsService } from '../../admin/animals/animals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-market-details',
  templateUrl: './market-details.component.html',
  styleUrls: ['./market-details.component.scss']
})
export class MarketDetailsComponent implements OnInit {

  animalId$ = this.route.params.pipe(
    pluck('id'),
    shareReplay(1)
  );

  animal$ = this.animalId$.pipe(
    switchMap(id => this.ordersService.getAnimalById(id)),
    shareReplay(1)
  );

  constructor(private ordersService: AnimalsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
