import Item from '../models/item.model.js';

export const getAllItems = (req, res, next) => {
  // write logic here
  const {} = req.body;
  console.log(req.file);
  res.send('get all items');
};
export const getItemsById = (req, res, next) => {
  // write logic here
  res.send('get all items By Id');
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
    console.log(item);
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
