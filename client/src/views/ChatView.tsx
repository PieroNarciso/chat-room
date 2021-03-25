import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { io } from 'socket.io-client';

import ChatHeader from '@/components/ChatDashboard/ChatHeader';
import ChatFlow from '@/components/ChatDashboard/ChatFlow';
import ChatActions from '@/components/ChatDashboard/ChatActions';
import { IState } from '@/interfaces';

interface ChatViewProps {
  username: string;
}

const ChatView: React.FC<ChatViewProps> = ({ username }) => {
  useEffect(() => {
    const socket = io('http://localhost:8080/messages');

    socket.on('message', (data: string) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="w-screen h-screen">
      {/* Chat Container */}
      <div className="flex flex-col w-full h-full overflow-hidden bg-white shadow">
        <ChatHeader
          className="flex-grow-0 text-white bg-indigo-700"
          username={username}
        />
        <ChatFlow className="flex-grow" />
        <ChatActions className="flex-grow-0" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    username: state.username,
  };
};


export default connect(mapStateToProps)(ChatView);
