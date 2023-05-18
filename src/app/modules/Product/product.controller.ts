import { Request, Response } from 'express';
import { getAllProductsFromDB, getProductByIdFromDB } from './product.service';

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getAllProductsFromDB();
  return res.status(200).json({
    success: true,
    data: products,
  });
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductByIdFromDB(id);
  return res.status(200).json({
    success: true,
    data: product,
  });
};
