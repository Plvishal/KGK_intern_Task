import Item from '../models/item.model.js';
import Bid from '../models/bids.model.js';
export const creaateBid = async (req, res) => {
  const { itemsId } = req.params;
  const { user_id, bid_amount } = req.body;
  try {
    const item = await Item.findById(itemsId);
    if (!item) {
      return res.status(404).send({ message: 'Item not found' });
    }

    if (bid_amount <= item.current_price) {
      return res
        .status(400)
        .send({ message: 'Bid amount must be higher than the current price' });
    }

    await Bid.create(itemsId, user_id, bid_amount);
    await Item.update(
      itemsId,
      item.name,
      item.description,
      bid_amount,
      item.end_time,
      item.image_url
    );

    res.status(201).send({ message: 'Bid placed successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error placing bid', error: err.message });
  }
};

export const getBidsById = async (req, res) => {
  const { itemId } = req.params;
  try {
    const item = await Bid.findByItemId(itemId);
    if (!item) {
      return res.status(404).send({ msg: " Items does't find in bid" });
    }
    res.send({ item });
  } catch (error) {
    return res.status(500).send('Server error');
  }
};
