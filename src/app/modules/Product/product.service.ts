import { IProduct } from './product.interface';
import { Product } from './product.model';

export const getAllProductsFromDB = async (): Promise<IProduct[]> =>
  await Product.find();

export const getProductByIdFromDB = async (id: string): Promise<IProduct[]> =>
  await Product.find({ _id: id });
