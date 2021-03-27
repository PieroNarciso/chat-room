import React from 'react';
import { useSelector } from 'react-redux';

import ChatMsg from '@/components/ChatDashboard/ChatMsg';
import { IState } from '@/interfaces';

interface ChatFlowProps {
  className?: string;
}

const ChatFlow = React.forwardRef<HTMLDivElement, ChatFlowProps>(
  ({ className }, ref) => {
    const { messages, username } = useSelector((state: IState) => {
      return {
        messages: state.messages,
        username: state.username,
      };
    });

    return (
      <div className={'overflow-auto' + ' ' + className} ref={ref}>
        {messages.map((msg, index) => (
          <ChatMsg
            key={index}
            username={msg.username}
            message={msg.msg}
            left={msg.username !== username}
            color={msg.avatarColor}
          />
        ))}
      </div>
    );
  }
);

export default ChatFlow;
