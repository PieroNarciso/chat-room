import React from 'react';
import { connect } from 'react-redux';

import ChatMsg from '@/components/ChatDashboard/ChatMsg';
import { IMessage, IState } from '@/interfaces';

interface ChatFlowProps {
  username: string;
  messages: IMessage[];
  className?: string;
}

const ChatFlow: React.FC<ChatFlowProps> = ({
  messages,
  className,
}) => {

  return (
    <div className={'overflow-auto' + ' ' + className}>
      {messages.map((msg, index) => (
        <ChatMsg key={index} username={msg.username} message={msg.msg} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(ChatFlow);
