import { IMessage } from '@/interfaces';

export interface addMessage {
  type: 'ADD_MESSAGE';
  payload: IMessage;
}

export interface setUsername {
  type: 'SET_USERNAME';
  payload: string;
}

export type reducerActions = addMessage | setUsername;
