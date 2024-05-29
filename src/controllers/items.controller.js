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
export const createItems = (req, res, next) => {
  // write logic here
  const { name, description, current_price, starting_price, end_time } =
    req.body;
  console.log(req.body);
  console.log(req.file.path);
  res.send('add new items');
};
export const updateItems = (req, res, next) => {
  // write logic here
  res.send('update items');
};

export const deleteItemsById = (req, res, next) => {
  // write logic here
  res.send('delete all items By Id');
};
