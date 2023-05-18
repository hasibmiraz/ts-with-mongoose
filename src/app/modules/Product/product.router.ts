import { Router } from 'express';
import { getAllProducts, getProductById } from './product.controller';

const router: Router = Router();

router.get('/allproducts', getAllProducts);
router.get('/get-single-product/:id', getProductById);

export default router;
