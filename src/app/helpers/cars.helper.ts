import { MODELS, MAKERS } from '../config/config';

export class CarsHelper {
  static map = new Map<string, string[]>();

  static getTheRightModels(maker: string): string[] {
    return this.map.get(maker);
  }

  static setModelsMap(): void {
    this.map.set(MAKERS.BMW, [MODELS.SERIES3, MODELS.X1]);
    this.map.set(MAKERS.TOYOTA, [MODELS.YARIS, MODELS.RAV4]);
    this.map.set(MAKERS.RENAULT, [MODELS.MEGANE, MODELS.CLIO]);
  }
}
