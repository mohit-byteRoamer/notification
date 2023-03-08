import React from 'react';
import MessageContext from './messageContext';

const MessageState = function (props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [message, setMessage] = React.useState('Message Push Mohit');
  return (
    <MessageContext.Provider value={{message, setMessage}}>
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageState;
