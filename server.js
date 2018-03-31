const express = require('express');
const app = express();
const http = require('http').Server(app)
const PORT = process.env.PORT || 3000;
const io = require('socket.io')(http)

// displays index.html file on root of localhost
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log('user connected');
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect',() =>{
    console.log('user disconnected');
  });
});

app.listen(PORT, () => {
  console.log(`here we come on PORT ${PORT}`);
});
 
