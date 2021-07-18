import { CarModel } from '../cars/model';
import { MAKERS, MODELS, COLORS } from '../config/config';

export const carMock: CarModel = {
  id: null,
  maker: MAKERS.BMW,
  model: MODELS.X1,
  year: '2020',
  color: COLORS.BLACK,
  monthlyPrice: 100,
  availableFrom: '',
} as CarModel;
