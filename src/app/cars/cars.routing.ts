import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsOverviewComponent } from './containers/cars-overview.component';

const routes: Routes = [
  {
    path: '',
    component: CarsOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
