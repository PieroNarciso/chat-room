import React, { useState } from 'react';

import PInput from '@/components/base/PInput';
import PBtn from '@/components/base/PBtn';

const LoginForm: React.FC<
  React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => {
  // Username State
  const [username, setUsername] = useState('');
  /** Set username to new value in `Input` Change */
  const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username);
  }

  return (
    <div
      className={'bg-white shadow rounded px-2 py-3' + ' ' + className}
      {...props}
    >
      <p className="text-lg font-semibold">Login</p>
      <form className="mt-4" onSubmit={submitHandler}>
        <PInput
          placeholder="Enter an Username"
          value={username}
          onChange={usernameHandler}
        />
        <div className="flex flex-row-reverse mt-3">
          <PBtn className="text-sm">Log In</PBtn>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
