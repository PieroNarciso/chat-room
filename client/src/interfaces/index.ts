import { avatarColors } from "@/types";

export interface IMessage {
  username: string;
  msg: string;
  avatarColor: avatarColors;
}

export interface IState {
  messages: IMessage[];
  username: string;
  avatarColor: avatarColors;
}
