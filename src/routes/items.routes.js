import express from 'express';
import {
  createItems,
  deleteItemsById,
  getAllItems,
  getItemsById,
  updateItems,
} from '../controllers/items.controller.js';
import verifyToken from '../../middleware/verifyToken.js';

const itemsRouter = express.Router();
itemsRouter.route('/').get(verifyToken, getAllItems);
itemsRouter.route('/:id').get(getItemsById);
itemsRouter.route('/').post(createItems);
itemsRouter.route('/:id').put(updateItems);
itemsRouter.route('/:id').delete(deleteItemsById);

export default itemsRouter;
