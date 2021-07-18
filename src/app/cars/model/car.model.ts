export interface CarModel {
  id: string;
  maker: string;
  model: string;
  year: string;
  color: string;
  monthlyPrice: number;
  availableFrom: string;
  isDeleted?: boolean;
}
