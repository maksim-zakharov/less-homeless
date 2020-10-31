import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName$ = this.authService.userObservable.pipe(map(user => user.name));

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
