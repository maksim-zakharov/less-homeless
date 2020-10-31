import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  orders$ = this.ordersService.getAviariesAnimals().pipe(share());

  constructor(private ordersService: AnimalsService) { }

  ngOnInit(): void {
  }
}
