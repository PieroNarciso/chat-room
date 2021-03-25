import { msgSocket } from '@/api/sockets/MessageSocket';
import { Namespace } from 'socket.io';

export default (): Namespace => msgSocket;
