import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { reducerActions } from '@/actions';
import PInput from '@/components/base/PInput';
import PBtn from '@/components/base/PBtn';
import { useHistory } from 'react-router';

const LoginForm: React.FC<
  React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => {
  /** Dispath actions to store */
  const dispatch = useDispatch<Dispatch<reducerActions>>();
  /** History to navigate programmatically */
  const history = useHistory();

  // Username State
  const [username, setUsername] = useState('');
  /** Set username to new value in `Input` Change */
  const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  /** 
   * React to submit event Form
   * Set `username` and navigate to Chat route
   */
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: 'SET_USERNAME',
      payload: username,
    });
    setUsername('');
    history.push({ pathname: 'chat' });
  };

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
          className="focus:ring-indigo-600"
        />
        <div className="flex flex-row-reverse mt-3">
          <PBtn className="text-sm font-semibold text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white">Log In</PBtn>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
