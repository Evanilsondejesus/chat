// index.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const path = require ('path'); 
 

const users = []

  

app.use(express.static(path.join(__dirname, '..', 'public')));

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');
   
  socket.on('mensagem', (mensagem) => {
    console.log(`Mensagem recebida: ${mensagem}`);
 
    io.emit('mensagem', mensagem);
  });


















socket.on('select_room', (data)=> { 
  const sala = data.room;
socket.join(sala) //us




/*
const userInRoom = users.find( user => user.username === data.username && user.room ===data.room);
if(userInRoom){
userInRoom.socket_id =socket.id

console.log("roooodou")
}else{
 
  users.push({
    room: data.room,
    username: data.username,
    socket_id: socket.id
    
    })
  }
*/




});







const message = []
socket.on('message', (data)=>{


  message.push({
    room: data.room,
    username: data.username,
    text: data.message
  })
  
const sala =data.room

  io.to(sala).emit("message", message);


})












  // Evento quando um cliente se desconecta
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  })
});




/*
    io.emit('mensagem', data);
  });



*/



server.listen(3000, () => {
  console.log('Servidor escutando na porta 3000');
});
