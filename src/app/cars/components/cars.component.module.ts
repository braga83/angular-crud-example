import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';

import { CarsTableComponent } from './cars-table/cars-table.component';
import { CarModalComponent } from './car-modal/car-modal.component';

const COMPONENTS = [CarsTableComponent, CarModalComponent];
const MATERIAL_MODULES = [
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSortModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatMenuModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [MatDatepickerModule, DatePipe],
})
export class CarsComponentsModule {}
