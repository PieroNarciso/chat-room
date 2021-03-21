import React from 'react';

const MsgSendBtn: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ className, children, ...props }) => {
  return (
    <button
      className={
        'rounded-full bg-green-600 p-2 flex items-center justify-center shadow hover:bg-green-700 focus:outline-none' +
        ' ' +
        className
      }
      {...props}
    >
      <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
        <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
      </svg>
    </button>
  );
};

export default MsgSendBtn;
