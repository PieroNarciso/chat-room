import React from 'react';

import MsgAvatar from '@/components/ChatDashboard/MsgAvatar';

interface ChatMsgProps {
  username: string;
  left: boolean;
  message: string;
}

const ChatMsg: React.FC<ChatMsgProps> = ({ username, message, left }) => {
  const wrapperMsgClass = left? 'flex-row-reverse text-right': 'text-left';

  const messageClass = left? 'rounded-r-lg rounded-bl-lg bg-gray-600 text-white' : 'rounded-l-lg rounded-br-lg bg-gray-300';

  return (
    <div className={'flex justify-end mx-2 py-2' + ' ' + wrapperMsgClass}>
      <div className={"px-2 py-1 max-w-4/5" + ' ' + messageClass}>
        {message}
      </div>
      <MsgAvatar className={'text-white' + ' ' + (left? 'mr-2' : 'ml-2')} username={username} />
    </div>
  );
};
export default ChatMsg;
