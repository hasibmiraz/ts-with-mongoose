import { Router } from 'express';
import { getAllProducts } from './product.controller';

const router: Router = Router();

router.get('/allproducts', getAllProducts);

export default router;
