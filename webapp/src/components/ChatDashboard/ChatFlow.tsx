import React, { useState } from 'react';

import ChatMsg from '@/components/ChatDashboard/ChatMsg';
import { IMessage } from '@/interfaces';

interface ChatFlowProps {
  className?: string;
}

const ChatFlow: React.FC<ChatFlowProps> = ({ className }) => {
  const [messages, setMessages] = useState<IMessage[]>([
    { username: 'Piero', msg: 'ASDJAKSD' },
    { username: 'Piero', msg: 'SDjfklsqweiaSd' },
  ]);

  return (
    <div className={'' + ' ' + className}>
      {messages.map((msg, index) => (
        <ChatMsg key={index} username={msg.username} message={msg.msg} />
      ))}
    </div>
  );
};

export default ChatFlow;
