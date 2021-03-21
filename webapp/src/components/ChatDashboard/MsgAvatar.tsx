import React from 'react';

interface MsgAvatarProps {
  className?: string;
  username: string;
}

const MsgAvatar: React.FC<MsgAvatarProps> = ({ className, username }) => {
  return (
    <div className={'text-white w-8 h-8 font-semibold tracking-wide border-gray-400 border-2 bg-red-500 rounded-full flex items-center justify-center text-center capitalize' + ' ' +className}>
      {username.slice(0, 2)}
    </div>
  );
};

export default MsgAvatar;
