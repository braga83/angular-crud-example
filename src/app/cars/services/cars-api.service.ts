import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { CarModel } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CarsApiService {
  constructor(private firestore: AngularFirestore) {}

  /**
   * Get all cars
   *
   * @return {*}
   * @memberof CarsApiService
   */
  getAll() {
    return this.firestore.collection('cars').snapshotChanges();
  }

  /**
   * Create car
   *
   * @param {CarModel} car
   * @return {*}
   * @memberof CarsApiService
   */
  create(car: CarModel) {
    return this.firestore.collection('cars').add(car);
  }

  /**
   * Update car
   *
   * @param {CarModel} car
   * @memberof CarsApiService
   */
  update(car: CarModel): void {
    this.firestore.doc('cars/' + car.id).update(car);
  }

  /**
   * Delete car
   *
   * @param {string} carId
   * @memberof CarsApiService
   */
  delete(carId: string): void {
    this.firestore.doc('cars/' + carId).delete();
  }
}
