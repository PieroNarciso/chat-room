import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import MsgInput from '@/components/ChatDashboard/MsgInput';
import MsgSendBtn from '@/components/ChatDashboard/MsgSendBtn';
import {IMessage, IState} from '@/interfaces';

interface ChatActionsProps {
  addMessage: (payload: IMessage) => void;
  username: string;
  className?: string;
}

const ChatActions: React.FC<ChatActionsProps> = ({ username, addMessage, className }) => {
  const [msgInput, setMsgInput] = useState('');
  const msgInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMsgInput(event.target.value);
  };

  const sendMsg = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessage({ username: username, msg: msgInput })
    setMsgInput('');
  };

  return (
    <div className={className}>
      <form className="flex p-2" onSubmit={sendMsg}>
        <MsgInput value={msgInput} onChange={msgInputHandler} />
        <MsgSendBtn className="ml-2" />
      </form>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addMessage: (payload: IMessage) => {
      dispatch({
        type: 'ADD_MESSAGE',
        payload,
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatActions);
