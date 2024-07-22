// components/Chatbot.jsx
import React, { useState, useEffect } from 'react';
import { useChatbot } from './ChatbotProvider';

const ChatbotPro = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, isLoading, error, getConversationHistory, 

  useEffect(() => {
    getConversationHistory();
  }, [getConversationHistory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 rounded-lg shadow-lg">
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.isUser ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      {isLoading && <div className="text-center text-gray-400">Bot is typing...</div>}
      {error && <div className="text-red-400 text-center">{error}</div>}
    </div>
    <form onSubmit={handleSubmit} className="p-4 bg-gray-900">
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </form>
  </div>
  );
};

export default ChatbotPro;