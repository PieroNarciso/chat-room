import React from 'react'

import MsgSendBtn from '@/components/MessageDashboard/MsgSendBtn';
import MsgInput from '@/components/MessageDashboard/MsgInput';
import LoginForm from '@/components/Form/LoginForm';

function App() {

  return (
    <div className="App">
      <MsgSendBtn></MsgSendBtn>
      <MsgInput type="text" placeholder="Type a message" />
      <LoginForm />
    </div>
  )
}

export default App
