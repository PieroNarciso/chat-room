import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginView from '@/views/LoginView';
import ChatView from '@/views/ChatView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={LoginView} />
        <Route path="/login" exact component={LoginView} />
        <Route path="/chat" exact component={ChatView} />
      </div>
    </BrowserRouter>
  );
}

export default App;
