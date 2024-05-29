import Notification from '../models/notification.model.js';
export const getNotication = async (req, res) => {
  const user_id = req.user.id;
  try {
    const notifications = await Notification.findByUserId(user_id);
    res.json(notifications);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error retrieving notifications', error: err.message });
  }
};

export const markReadNotification = (req, res) => {};
// Admin
export const createNotification = async (req, res) => {
  const user_id = req.user.id;
  const { message, is_read } = req.body;

  try {
    const notification = await Notification.create(user_id, message, is_read);
    res.status(201).send({ msg: 'notification created' });
  } catch (error) {
    return res.status(500).send('Error while creating notification');
  }
};
