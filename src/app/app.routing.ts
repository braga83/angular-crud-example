import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GLOBAL_CONFIG } from './config/config';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: GLOBAL_CONFIG.CARS_URL,
        loadChildren: () =>
          import('./cars/cars.module').then((m) => m.CarsModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
