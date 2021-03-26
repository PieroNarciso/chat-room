import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MsgInput from '@/components/ChatDashboard/MsgInput';
import MsgSendBtn from '@/components/ChatDashboard/MsgSendBtn';
import { IMessage, IState } from '@/interfaces';

interface ChatActionsProps {
  onSendMessage: (message: IMessage) => void;
  className?: string;
}

const ChatActions: React.FC<ChatActionsProps> = ({
  className,
  onSendMessage,
}) => {
  // Setup Store `username`
  const { username } = useSelector((state: IState) => ({
    username: state.username,
  }));
  
  // Handle User Input
  const [msgInput, setMsgInput] = useState('');
  const msgInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMsgInput(event.target.value);
  };

  const sendMsg = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (msgInput.length === 0) return;
    const data = { username: username, msg: msgInput };
    onSendMessage(data);
    setMsgInput('');
  };

  return (
    <div className={className}>
      <form className="flex p-2" onSubmit={sendMsg}>
        <MsgInput value={msgInput} onChange={msgInputHandler} />
        <MsgSendBtn className="ml-2" disabled={msgInput.length === 0}/>
      </form>
    </div>
  );
};

export default ChatActions;
