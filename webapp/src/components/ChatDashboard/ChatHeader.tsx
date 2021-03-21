import React from 'react';

import PBtn from '@/components/base/PBtn';

interface ChatHeaderProps {
  username: string;
  className?: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ className, username }) => {
  return (
    <div className={'flex px-4 py-2 items-center justify-between' + ' ' + className}>
      <h1 className="font-semibold tracking-wide uppercase hover:text-gray-300">{username}</h1>
      <PBtn className="hover:bg-indigo-500">LogOut</PBtn>
    </div>
  );
};

export default ChatHeader;
