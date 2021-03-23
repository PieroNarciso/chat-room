import React from 'react';

const MsgInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ className, type, ...props }) => {
  return (
    <input
      className={
        'border-1 focus:border-transparent border-gray-300 focus:ring-purple-700 focus:ring-2 rounded shadow w-full text-lg' + ' ' + className
      }
      type={type ? type : 'text'}
      {...props}
    />
  );
};

export default MsgInput;
