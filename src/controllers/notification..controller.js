import Notification from '../models/notification.model.js';
export const getNotication = async (req, res) => {
  const user_id = req.user.id;
  console.log(req.user.id);
  return res.send('ok');
  //   try {
  //     const notifications = await Notification.findByUserId(user_id);
  //     res.json(notifications);
  //   } catch (err) {
  //     res
  //       .status(500)
  //       .json({ message: 'Error retrieving notifications', error: err.message });
  //   }
};
export const markReadNotification = (req, res) => {};
