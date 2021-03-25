import { Socket } from 'socket.io';
import { io } from '@/index';

import { IMessage } from '@/interfaces';


const msgSocket = io.of('messages');

msgSocket.on('connection', (socket: Socket): void => {
  // Send message on connection
  console.log('Connected');
  socket.send('Bienvenido al servidor');

  /** `onSendMessage` */
  socket.on('sendMessage', async (data: IMessage) => {
    msgSocket.emit('sendMessage', data); 
  });

  socket.on('disconnect', () => {
    console.log('Disconnected');
  });

  socket.on('typing', (data: IMessage['username']) => {
    socket.broadcast.emit('typing', data);
  });

});

export { msgSocket };
