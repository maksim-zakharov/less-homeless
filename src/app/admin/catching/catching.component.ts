import { Component, OnInit } from '@angular/core';
import { CatchingService } from './catching.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-catching',
  templateUrl: './catching.component.html',
  styleUrls: ['./catching.component.scss']
})
export class CatchingComponent implements OnInit {

  orders$: Observable<any[]>;

  constructor(private ordersService: CatchingService) { }

  ngOnInit(): void {
    this.orders$ = this.ordersService.getOrders().pipe(share());
  }
}
