import { Request, Response } from 'express';
import { getAllProductsFromDB } from './product.service';

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getAllProductsFromDB();
  return res.status(200).json({
    success: true,
    data: products,
  });
};
