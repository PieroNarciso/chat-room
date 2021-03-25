import React from 'react';
import { useSelector } from 'react-redux';

import ChatMsg from '@/components/ChatDashboard/ChatMsg';
import { IState } from '@/interfaces';

interface ChatFlowProps {
  className?: string;
}

const ChatFlow = React.forwardRef<HTMLDivElement, ChatFlowProps>(({ className }, ref) => {
  const { messages } = useSelector((state: IState) => { 
    return { messages: state.messages }
  })

  return (
    <div className={'overflow-auto' + ' ' + className} ref={ref}>
      {messages.map((msg, index) => (
        <ChatMsg key={index} username={msg.username} message={msg.msg} />
      ))}
    </div>
  );
});


export default ChatFlow;
