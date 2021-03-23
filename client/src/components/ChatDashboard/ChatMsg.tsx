import React from 'react';

import MsgAvatar from '@/components/ChatDashboard/MsgAvatar';

interface ChatMsgProps {
  username: string;
  message: string;
  className?: string;
}

const ChatMsg: React.FC<ChatMsgProps> = ({ username, message, className }) => {
  return (
    <div className={'flex justify-end text-right text-white mx-2 py-2' + ' ' + className}>
      <div className="px-2 py-1 bg-gray-700 rounded-l-lg rounded-br-lg max-w-4/5">
        {message}
      </div>
      <MsgAvatar className="ml-2" username={username} />
    </div>
  );
};

export default ChatMsg;
