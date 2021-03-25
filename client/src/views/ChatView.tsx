import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io, Socket } from 'socket.io-client';

import ChatHeader from '@/components/ChatDashboard/ChatHeader';
import ChatFlow from '@/components/ChatDashboard/ChatFlow';
import ChatActions from '@/components/ChatDashboard/ChatActions';
import { IMessage, IState } from '@/interfaces';
import {DefaultEventsMap} from 'socket.io-client/build/typed-events';

const ChatView: React.FC = () => {
  // Setup Dispatch for add messages
  const dispatch = useDispatch();

  // Username from store
  const { username } = useSelector((state: IState) => ({
    username: state.username,
  }));

  // Setup Message Socket
  const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();
  useEffect(() => {
    socketRef.current = io('http://localhost:8080/messages');

    socketRef.current.on('message', (data: string) => {
      console.log(data);
    });

    socketRef.current.on('sendMessage', async (payload: IMessage) => {
      dispatch({
        type: 'ADD_MESSAGE',
        payload,
      });
      scrollToBottom();
    });

  }, []);

  // Ref To scrollToBottom
  const chatFlowRef = useRef<HTMLDivElement>(null);
  /** Scroll chat to bottom */
  const scrollToBottom = () => {
    if (chatFlowRef.current) {
      chatFlowRef.current.scrollTop = chatFlowRef.current.scrollHeight;
    }
  };

  const onSendMessage = async (message: IMessage) => {
    socketRef.current?.emit('sendMessage', message);
  };

  return (
    <div className="w-screen h-screen">
      {/* Chat Container */}
      <div className="flex flex-col w-full h-full overflow-hidden bg-white shadow">
        <ChatHeader
          className="flex-grow-0 text-white bg-indigo-700"
          username={username}
        />
        <ChatFlow ref={chatFlowRef} className="flex-grow" />
        <ChatActions
          className="flex-grow-0"
          onSendMessage={(data) => onSendMessage(data)}
        />
      </div>
    </div>
  );
};

export default ChatView;
