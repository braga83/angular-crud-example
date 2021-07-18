import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { CarModalComponent } from './car-modal.component';
import { carMock } from '../../../test/car-mock';
import { MAKERS } from 'src/app/config/config';

describe('CarModalComponent', () => {
  let component: CarModalComponent;
  let fixture: ComponentFixture<CarModalComponent>;

  const dialogMock = {
    close: () => {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatAutocompleteModule],
      declarations: [CarModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarModalComponent);
    component = fixture.componentInstance;
  });

  afterAll(() => {
    fixture.destroy();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call the function to close the dialog', () => {
    spyOn(component.dialogRef, 'close');
    component.close();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });

  it('should return invalid for maker when user do not insert a value', () => {
    fixture.detectChanges();

    component.carFormGroup.get('maker').updateValueAndValidity();
    const isValid = component.carFormGroup.get('maker').valid;

    expect(isValid).toBeFalse();
  });

  it('should return valid for maker when user insert value', () => {
    fixture.detectChanges();

    component.carFormGroup.get('maker').patchValue(MAKERS.BMW);
    const isValid = component.carFormGroup.get('maker').valid;

    expect(isValid).toBeTrue();
  });

  it('should call the function to close the dialog on save if form is valid', () => {
    spyOn(component.dialogRef, 'close');

    fixture.detectChanges();

    component.carFormGroup.patchValue(carMock);

    component.save(carMock);

    expect(component.dialogRef.close).toHaveBeenCalled();
    expect(component.carFormGroup.valid).toBeTrue();
  });

  it('should not call the function to close the dialog on save if form is invalid', () => {
    spyOn(component.dialogRef, 'close');

    fixture.detectChanges();

    component.carFormGroup.get('maker').patchValue(MAKERS.BMW);

    component.save(carMock);

    expect(component.dialogRef.close).not.toHaveBeenCalled();
    expect(component.carFormGroup.valid).toBeFalse();
  });
});
