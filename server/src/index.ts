import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

import { PORT, CORS_ORIGIN_WHITELIST } from '@/config/env';

const app = express();

/** Cors Config */
app.use(
  cors({
    origin: CORS_ORIGIN_WHITELIST,
  })
);

/** Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Socket Config */
const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: (origin, callback) => {
      if (origin) {
        if (CORS_ORIGIN_WHITELIST.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not Allowed by CORS'));
        }
      }
    },
    methods: ['GET', 'POST'],
  },
});
const socket = io.of('messages');

socket.on('connection', () => {
  console.log('Hello');
  socket.send('Hello');
});

server.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
