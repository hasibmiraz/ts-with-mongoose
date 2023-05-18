import { Request, Response } from 'express';
import { getAllProductsFromDB, getProductByIdFromDB } from './product.service';
import { sendApiResponse } from '../../utils/responseHandler';

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getAllProductsFromDB();
  return sendApiResponse(res, 200, true, products);
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductByIdFromDB(id);
  return sendApiResponse(res, 200, true, product);
};
