import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsOverviewComponent } from './containers/cars-overview.component';
import { CarsRoutingModule } from './cars.routing';
import { CarsComponentsModule } from './components/cars.component.module';

const CONTAINERS = [CarsOverviewComponent];

@NgModule({
  imports: [CommonModule, CarsRoutingModule, CarsComponentsModule],
  declarations: [...CONTAINERS],
})
export class CarsModule {}
