import React, { useState } from 'react';

import MsgInput from '@/components/ChatDashboard/MsgInput';
import MsgSendBtn from '@/components/ChatDashboard/MsgSendBtn';

interface ChatActionsProps {
  className?: string;
}

const ChatActions: React.FC<ChatActionsProps> = ({ className }) => {
  const [msgInput, setMsgInput] = useState('');
  const msgInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMsgInput(event.target.value);
  };

  const sendMsg = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(msgInput);
    setMsgInput('');
  };

  return (
    <div className={className}>
      <form className="flex p-2" onSubmit={sendMsg}>
        <MsgInput value={msgInput} onChange={msgInputHandler} />
        <MsgSendBtn className="ml-2" />
      </form>
    </div>
  );
};

export default ChatActions;
