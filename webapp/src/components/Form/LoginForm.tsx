import React from 'react';

import PInput from '@/components/base/PInput';

const LoginForm: React.FC<
  React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => {
  return (
    <div className={'shadow rounded' + ' ' + className} {...props}>
      <p>Login</p>
      <PInput />
    </div>
  );
};

export default LoginForm;
