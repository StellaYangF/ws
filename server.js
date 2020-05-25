const { Server } = require('ws');
const wss = new Server({ port: 8080 });

wss.on('connection', socket => {
  socket.on('message', socket.send);
})