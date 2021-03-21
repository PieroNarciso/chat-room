import React from 'react';

import ChatHeader from '@/components/ChatDashboard/ChatHeader';
import ChatFlow from '@/components/ChatDashboard/ChatFlow';
import ChatActions from '@/components/ChatDashboard/ChatActions';

const ChatView = () => {
  return (
    <div className="w-screen h-screen">
      {/* Chat Container */} 
      <div className="flex flex-col w-full h-full overflow-hidden bg-white shadow">
        <ChatHeader className="flex-grow-0 text-white bg-indigo-700" username="Piero" />
        <ChatFlow className="flex-grow" />
        <ChatActions className="flex-grow-0" />
      </div>
    </div>
  );
};

export default ChatView;
