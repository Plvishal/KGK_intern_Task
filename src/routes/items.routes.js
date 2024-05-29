import express from 'express';
import multer from 'multer';
import {
  createItems,
  deleteItemsById,
  getAllItems,
  getItemsById,
  updateItems,
} from '../controllers/items.controller.js';
import verifyToken from '../../middleware/verifyToken.js';

const itemsRouter = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
itemsRouter.route('/').get(verifyToken, getAllItems);
itemsRouter.route('/:id').get(getItemsById);
itemsRouter.route('/').post(upload.single('file'), createItems);
itemsRouter.route('/:id').put(updateItems);
itemsRouter.route('/:id').delete(deleteItemsById);

export default itemsRouter;
