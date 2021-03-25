export interface IMessage {
  username: string;
  msg: string;
}

export interface IState {
  messages: IMessage[];
  username: string;
}
