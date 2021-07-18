import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { CarModel } from '../model';
import { CarsApiService } from '../services/cars-api.service';
import { GLOBAL_CONFIG } from 'src/app/config/config';

@Component({
  templateUrl: './cars-overview.component.html',
  styleUrls: ['./cars-overview.component.scss'],
})
export class CarsOverviewComponent implements OnInit {
  cars: CarModel[];

  isLoadingCars$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  private _destroy$ = new Subject();

  constructor(
    private carsApiService: CarsApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCarsList();
  }

  save(car: CarModel): void {
    car?.id ? this.update(car) : this.create(car);
    this.getCarsList();
  }

  delete(car: CarModel): void {
    this.carsApiService.delete(car.id);
    this.toastr.success(GLOBAL_CONFIG.DELETE_SUCCESS);
  }

  create(car: CarModel): void {
    this.carsApiService.create(car);
    this.toastr.success(GLOBAL_CONFIG.CREATE_SUCCESS);
  }

  update(car: CarModel): void {
    this.carsApiService.update(car);
    this.toastr.success(GLOBAL_CONFIG.UPDATE_SUCCESS);
  }

  private getCarsList(): void {
    this.isLoadingCars$.next(true);
    this.carsApiService
      .getAll()
      .pipe(takeUntil(this._destroy$))
      .subscribe((data) => {
        this.cars = data.map((e) => {
          const data = e.payload.doc.data() as CarModel;
          Object.keys(data)
            .filter((key) => data[key] instanceof Timestamp)
            .forEach((key) => (data[key] = data[key].toDate()));
          data.id = e.payload.doc.id;
          return data;
        });

        this.isLoadingCars$.next(false);
      });
  }
}
