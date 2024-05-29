import app from './app.js';
import con from './config/db.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
import Notification from './src/models/notification.model.js';
import Bid from './src/models/bids.model.js';
// Socket.io setup
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('New WebSocket connection established');

  socket.on('bid', async (data) => {
    try {
      // Assuming data contains user_id, item_id, and bid_amount
      const { user_id, item_id, bid_amount } = data;

      // Save the bid in the database
      const newBid = await Bid.create({ user_id, item_id, bid_amount });

      // Create a notification for the bid
      await Notification.create(
        user_id,
        `New bid placed: ${bid_amount} on item ${item_id}`
      );

      // Notify all connected clients about the new bid
      io.emit('update', { user_id, item_id, bid_amount, newBid });

      console.log('Bid placed and notification sent.');
    } catch (err) {
      console.error('Error handling bid event:', err.message);
    }
  });

  socket.on('disconnect', () => {
    console.log('WebSocket disconnected');
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
