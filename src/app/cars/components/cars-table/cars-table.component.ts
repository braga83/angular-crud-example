import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { CarModel } from '../../model';
import { CarModalComponent } from '../car-modal/car-modal.component';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsTableComponent {
  @Input() set cars(cars: CarModel[]) {
    this.setDataSource(cars);
  }
  @Input() isLoadingCars: boolean;

  @Output() readonly onSaveCar = new EventEmitter<CarModel>();
  @Output() readonly onDeleteCar = new EventEmitter<CarModel>();

  displayedColumns: string[] = [
    'maker',
    'model',
    'year',
    'color',
    'monthlyPrice',
    'availableFrom',
  ];
  dataSource: MatTableDataSource<CarModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {}

  openCarModal(car?: CarModel): void {
    const dialogRef = this.dialog.open(CarModalComponent, {
      width: '450px',
      data: car,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        result.isDeleted ? this.onDeleteCar.emit(result) : this.onSaveCar.emit(result);
      }
    });
  }

  applySearch(searchValue: string): void {
    this.dataSource.filter = searchValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private setDataSource(cars: CarModel[]): void {
    this.dataSource = new MatTableDataSource(cars);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
