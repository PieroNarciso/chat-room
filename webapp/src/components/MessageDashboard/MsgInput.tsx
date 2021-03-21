import React from 'react';

const MsgInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ className, ...props }) => {
  return (
    <input
      className={'border-1 border-gray-400 rounded shadow w-full' + ' ' + className}
      {...props}
    />
  );
};

export default MsgInput;
