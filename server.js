import app from './app.js';
import con from './config/db.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
// Socket.io setup
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('New WebSocket connection');

  socket.on('bid', (data) => {
    // Handle new bid
    io.emit('update', data);
  });

  socket.on('disconnect', () => {
    console.log('WebSocket disconnected');
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
