import React from 'react';

import LoginForm from '@/components/Form/LoginForm';


const LoginView = () => {
  return (
    <div>
      <div className="flex items-center h-screen px-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginView;
