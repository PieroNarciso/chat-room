import { avatarColors } from '@/types';
import React from 'react';

interface MsgAvatarProps {
  className?: string;
  username: string;
  color: avatarColors;
}

const MsgAvatar: React.FC<MsgAvatarProps> = ({
  className,
  username,
  color,
}) => {

  const getColorBg = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500';
      case 'gray':
        return 'bg-gray-500';
      case 'orange':
        return 'bg-yellow-500';
      case 'red':
        return 'bg-red-500';
      case 'fuchsia':
        return 'bg-fuchsia-500';
      default:
        return 'bg-red-500';
    }
  };


  return (
    <div
      className={
        'text-white w-8 h-8 font-semibold tracking-wide border-gray-400 border-2 rounded-full flex items-center justify-center text-center capitalize' +
        ' ' +
        (getColorBg()) +
        ' ' +
        className
      }
    >
      {username.slice(0, 2)}
    </div>
  );
};

export default MsgAvatar;
