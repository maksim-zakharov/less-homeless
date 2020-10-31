import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from './login/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
