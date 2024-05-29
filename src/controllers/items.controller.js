import Item from '../models/item.model.js';

export const getAllItems = async (req, res, next) => {
  // write logic here
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;
  try {
    const items = await Item.findAll(limit, offset);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving item' });
  }
};
export const getItemsById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).send({ msg: ' Item not found' });
    }
    res.status(200).send({ item });
  } catch (error) {
    return res.status(500).send({ msg: 'Retrieving error' });
  }
};
export const createItems = async (req, res, next) => {
  // write logic here
  const { name, description, starting_price, image_url, end_time } = req.body;
  const str_price = parseFloat(starting_price);
  const imag_url = req.file ? req.file.path : null;
  console.log(imag_url, str_price, name);

  try {
    const itemName = await Item.findByName(name);
    if (itemName) {
      return res.send({ msg: ' This Item name already added' });
    }
    const item = await Item.create(
      name,
      description,
      str_price,
      image_url,
      end_time
    );
  } catch (error) {
    return res.status(500).send({ msg: 'Error creating Items' });
  }
};
export const updateItems = (req, res, next) => {
  // write logic here
  res.send('update items');
};

export const deleteItemsById = (req, res, next) => {
  // write logic here
  res.send('delete all items By Id');
};
