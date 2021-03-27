import { IMessage } from '@/interfaces';
import { avatarColors } from '@/types';

export interface addMessage {
  type: 'ADD_MESSAGE';
  payload: IMessage;
}

export interface setUsername {
  type: 'SET_USERNAME';
  payload: string;
}

export interface setAvatarColor {
  type: 'SET_AVATAR_COLOR';
  payload: avatarColors;
}

export type reducerActions = addMessage | setUsername | setAvatarColor;
