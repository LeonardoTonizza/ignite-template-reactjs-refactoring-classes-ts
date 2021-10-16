export interface IFood {
  id: number;
  name: string;
  description: string;
  price: boolean;
  available: boolean;
  image: string;
}

export type IFoodInput = Omit<IFood, 'id' | 'available'>;
