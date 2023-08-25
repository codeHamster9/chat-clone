import React, { useState } from 'react';
import './style.scss';

export default ({ typing }) => {
  const [userInput, setUserInput] = useState('');
  const [failed, setFailed] = useState(false);

  const handleClick = async (e) => {
    console.log('userInput:', userInput);
    if (!userInput) return;
    try {
      const response = await window.Chat.sendMessage(userInput);
      setUserInput('');
      setFailed(false);
    } catch (e) {
      console.log(e);
      setFailed(true);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleClick(e);
    }
  };

  return (
    <div className="controls" style={{ width: '100%' }}>
      {typing && (
        <span
          style={{ 'margin-left': '13px' }}
        >{`${typing} is typing...`}</span>
      )}
      <div className="control-wrapper">
        <input
          placeholder="Say something"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {failed && <span style={{ color: 'red' }}>{'sent failed'}</span>}
    </div>
  );
};
