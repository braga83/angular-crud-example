import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL_CONFIG } from './config/config';

import { LocationUtils } from './helpers/location-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular crud example by André Braga';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate([LocationUtils.joinWithSlash(GLOBAL_CONFIG.CARS_URL)]);
  }
}
