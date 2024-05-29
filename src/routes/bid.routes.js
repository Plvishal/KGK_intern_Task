import express from 'express';
import { creaateBid } from '../controllers/bids.controller.js';

const bidRouter = express.Router();
bidRouter.route('/:itemsId/bids').post(creaateBid);

export default bidRouter;
