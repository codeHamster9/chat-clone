import React from 'react';

export default ({ content, user, timestamp, arrow, color }) => {
  const timeFormatted = new Date(timestamp).toLocaleTimeString();
  let messageStyle = 'message';

  if (arrow) {
    messageStyle = messageStyle.concat(' ', 'with-arrow');
  }

  if (user === 'Me') {
    messageStyle = messageStyle.concat(' ', 'me-message', ' ', 'self');
  }

  return (
    <div className={messageStyle}>
      {arrow && <div className="title">{user}</div>}
      <div className="content">{content}</div>
      <div className="time-wrapper">
        <div className="time">{timeFormatted}</div>
      </div>
    </div>
  );
};
