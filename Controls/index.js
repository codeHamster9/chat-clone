import React, { useState } from 'react';
import './style.scss';

export default () => {
  const [userInput, setUserInput] = useState('');
  const handleClick = async (e) => {
    console.log('userInput:', userInput);
    if (!userInput) return;
    try {
      const response = await window.Chat.sendMessage(userInput);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="controls">
      <input
        placeholder="Say something"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};
