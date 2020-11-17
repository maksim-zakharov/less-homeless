import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-krasnodog',
  templateUrl: './krasnodog.component.html',
  styleUrls: ['./krasnodog.component.scss']
})
export class KrasnodogComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();

    this.authService.logout({withoutRedirect: true});
  }

}
