import React from 'react';
import App from './App';
import MessageState from './context/messageState';

function AppRoot() {
  return (
    <MessageState>
      <App />
    </MessageState>
  );
}

export default AppRoot;
