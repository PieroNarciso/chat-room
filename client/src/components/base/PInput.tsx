import React from 'react';

const PInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ className, type, ...props }) => {
  return (
    <input
      className={'w-full rounded bg-gray-300 border-0 focus:ring-2' + ' ' + className}
      type={type ? type : 'text'}
      {...props}
    />
  );
};

export default PInput;
