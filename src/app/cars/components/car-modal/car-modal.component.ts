import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { CarModel } from '../../model';
import { CarsHelper } from '../../../helpers/cars.helper';
import { COLORS, GLOBAL_CONFIG, MAKERS } from 'src/app/config/config';

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.component.html',
  styleUrls: ['./car-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarModalComponent implements OnInit {
  carFormGroup: FormGroup;
  filteredColors: Observable<string[]>;

  makers: string[] = [MAKERS.BMW, MAKERS.TOYOTA, MAKERS.RENAULT];
  colors: string[] = [
    COLORS.BLACK,
    COLORS.WHITE,
    COLORS.RED,
    COLORS.GREY,
    COLORS.BLUE,
    COLORS.BROWN,
    COLORS.YELLOW,
    COLORS.GREEN,
  ];
  models: string[] = [];

  modelsDisabled: boolean = true;

  readonly config = GLOBAL_CONFIG;

  constructor(
    public dialogRef: MatDialogRef<CarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CarModel
  ) {}

  ngOnInit(): void {
    CarsHelper.setModelsMap();
    this.setFormGroup();
    this.filterColorsList();

    if (this.data?.id) {
      this.getModels(this.data.maker);
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  save(car: CarModel): void {
    this.carFormGroup.markAllAsTouched();
    if (this.carFormGroup.valid) {
      this.dialogRef.close(car);
    }
  }

  getModels(maker: string): void {
    this.models = CarsHelper.getTheRightModels(maker);
    this.carFormGroup.get('model').enable();
  }

  delete(car: CarModel): void {
    this.dialogRef.close({...car, isDeleted: true} as CarModel);
  }

  private setFormGroup(): void {
    this.carFormGroup = new FormGroup({
      id: new FormControl(this.data?.id ?? null),
      maker: new FormControl(this.data?.maker ?? '', Validators.required),
      model: new FormControl({
        value: this.data?.model ?? '',
        disabled: !this.data?.id,
      }),
      year: new FormControl(this.data?.year ?? '', Validators.required),
      color: new FormControl(this.data?.color ?? '', Validators.required),
      monthlyPrice: new FormControl(this.data?.monthlyPrice ?? 0),
      availableFrom: new FormControl(this.data?.availableFrom ?? ''),
    });
  }

  private filterColorsList(): void {
    this.filteredColors = this.carFormGroup.get('color').valueChanges.pipe(
      startWith(''),
      map((value) => this.filterColor(value))
    );
  }

  private filterColor(value: string): string[] {
    return this.colors.filter(
      (color) => color.toLowerCase().indexOf(value.toLowerCase()) === 0
    );
  }
}
