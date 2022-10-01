import { Router } from 'express';
import categorieRoutes from './categories.routes';

const router = Router();

router.use('/categories', categorieRoutes);

export default router;