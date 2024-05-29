import express from 'express';
import { creaateBid, getBidsById } from '../controllers/bids.controller.js';

const bidRouter = express.Router();
bidRouter.route('/:itemId/bids').get(getBidsById);
bidRouter.route('/:itemsId/bids').post(creaateBid);

export default bidRouter;
