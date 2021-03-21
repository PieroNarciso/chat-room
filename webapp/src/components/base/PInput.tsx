import React from 'react';

const PInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ className, type, ...props }) => {
  return (
    <input
      className={'w-full rounded' + ' ' + className}
      type={type ? type : 'text'}
      {...props}
    />
  );
};

export default PInput;
