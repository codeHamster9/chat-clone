import React, { useState, useEffect } from 'react';
import Message from '../Message';

export default ({ message }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (message) {
      setMessages([...messages, message]);
    }
  }, [message]);

  return (
    <div className="message-box">
      {messages.length &&
        messages.map((m, i) => {
          let arrow = true;
          if (i > 0 && m.user === messages[i - 1].user) arrow = false;
          return <Message {...m} key={m.id} arrow={arrow} />;
        })}
    </div>
  );
};
