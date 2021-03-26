import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import LoginView from '@/views/LoginView';
import ChatView from '@/views/ChatView';
import NotFound from '@/views/NotFound';
import { useSelector } from 'react-redux';
import { IState } from './interfaces';

function App() {
  const { username } = useSelector((state: IState) => ({
    username: state.username,
  }));

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" exact component={LoginView} />
          {username.length > 0 ? (
            <Route path="/chat" exact component={ChatView} />
          ) : null}
          <Redirect from="/" to="/login" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
